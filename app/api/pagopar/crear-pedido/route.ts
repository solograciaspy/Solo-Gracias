import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const TOKEN_PUBLICO = "712066fadfe64770d01ac343b5e5f365";
const TOKEN_PRIVADO = "d0d47b2ccb402959125fcf5ff15fc299";

const PLANES: Record<string, { monto: number; descripcion: string }> = {
  esencia_mensual:  { monto: 69000,    descripcion: "Solo Gracias — Esencia Mensual" },
  esencia_anual:    { monto: 693000,   descripcion: "Solo Gracias — Esencia Anual" },
  alma_mensual:     { monto: 139000,   descripcion: "Solo Gracias — Alma+ Mensual" },
  alma_anual:       { monto: 1393000,  descripcion: "Solo Gracias — Alma+ Anual" },
};

export async function POST(req: NextRequest) {
  try {
    const { plan, nombre, email } = await req.json();

    if (!PLANES[plan]) {
      return NextResponse.json({ error: "Plan inválido" }, { status: 400 });
    }

    const { monto, descripcion } = PLANES[plan];
    const nroPedido = `SG-${Date.now()}`;
    const hash = crypto
      .createHash("sha512")
      .update(TOKEN_PRIVADO + monto + nroPedido)
      .digest("hex");

    const pedido = {
      token_publico: TOKEN_PUBLICO,
      nro_pedido: nroPedido,
      nombre_cliente: nombre,
      email_cliente: email,
      descripcion,
      monto,
      hash,
      items: [
        {
          nombre: descripcion,
          cantidad: 1,
          precio_unitario: monto,
        },
      ],
    };

    const res = await fetch("https://api.pagopar.com/api/pedidos/1.1/crear", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });

    const data = await res.json();

    if (!data.respuesta?.resultado) {
      return NextResponse.json({ error: "Error Pagopar", detalle: data }, { status: 500 });
    }

    return NextResponse.json({
      url_pago: `https://pagar.pagopar.com/v3-redireccionamiento/?hash=${data.respuesta.resultado}`,
      nro_pedido: nroPedido,
    });
  } catch (err) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}