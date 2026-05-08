import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const TOKEN_PUBLICO = "712066fadfe64770d01ac343b5e5f365";
const TOKEN_PRIVADO = "d0d47b2ccb402959125fcf5ff15fc299";

const PLANES: Record<string, { monto: number; descripcion: string; id_producto: number }> = {
  esencia_mensual: { monto: 69000,   descripcion: "Solo Gracias — Esencia Mensual", id_producto: 1 },
  esencia_anual:   { monto: 693000,  descripcion: "Solo Gracias — Esencia Anual",   id_producto: 2 },
  alma_mensual:    { monto: 139000,  descripcion: "Solo Gracias — Alma+ Mensual",   id_producto: 3 },
  alma_anual:      { monto: 1393000, descripcion: "Solo Gracias — Alma+ Anual",     id_producto: 4 },
};

export async function POST(req: NextRequest) {
  try {
    const { plan, nombre, email } = await req.json();

    if (!PLANES[plan]) {
      return NextResponse.json({ error: "Plan inválido" }, { status: 400 });
    }

    const { monto, descripcion, id_producto } = PLANES[plan];
    const id_pedido_comercio = `SG-${Date.now()}`;

    const token = crypto
      .createHash("sha1")
      .update(TOKEN_PRIVADO + id_pedido_comercio + String(monto))
      .digest("hex");

    const fecha_maxima = new Date(Date.now() + 24 * 60 * 60 * 1000)
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);

    const pedido = {
      token,
      comprador: {
        ruc: "",
        email,
        ciudad: "1",
        nombre,
        telefono: "",
        direccion: "",
        documento: "",
        coordenadas: "",
        razon_social: nombre,
        tipo_documento: "CI",
        direccion_referencia: null,
      },
      public_key: TOKEN_PUBLICO,
      monto_total: monto,
      tipo_pedido: "VENTA-COMERCIO",
      compras_items: [
        {
          ciudad: "1",
          nombre: descripcion,
          cantidad: 1,
          categoria: "909",
          public_key: TOKEN_PUBLICO,
          url_imagen: "",
          descripcion,
          id_producto,
          precio_total: monto,
          vendedor_telefono: "",
          vendedor_direccion: "",
          vendedor_direccion_referencia: "",
          vendedor_direccion_coordenadas: "",
        },
      ],
      fecha_maxima_pago: fecha_maxima,
      id_pedido_comercio,
      descripcion_resumen: descripcion,
      forma_pago: 9,
    };

    console.log("Enviando a Pagopar:", JSON.stringify(pedido));

    const res = await fetch("https://api.pagopar.com/api/comercios/2.0/iniciar-transaccion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });

    const data = await res.json();
    console.log("Respuesta Pagopar:", JSON.stringify(data));

    if (!data.respuesta || !data.resultado?.[0]?.data) {
      return NextResponse.json({ error: "Error Pagopar", detalle: data }, { status: 500 });
    }

    const hash_pedido = data.resultado[0].data;

    return NextResponse.json({
      url_pago: `https://www.pagopar.com/pagos/${hash_pedido}`,
      id_pedido_comercio,
      hash_pedido,
    });

  } catch (err) {
    console.log("Error interno:", String(err));
    return NextResponse.json({ error: "Error interno", detalle: String(err) }, { status: 500 });
  }
}
