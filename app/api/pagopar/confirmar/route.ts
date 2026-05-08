import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@/lib/supabase/server";

const TOKEN_PRIVADO = "d0d47b2ccb402959125fcf5ff15fc299";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const resultado = body.resultado?.[0];

    if (!resultado) {
      return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
    }

    const { hash_pedido, token, pagado, numero_pedido, monto } = resultado;

    // Verificar hash: sha1(token_privado + hash_pedido)
    const tokenEsperado = crypto
      .createHash("sha1")
      .update(TOKEN_PRIVADO + hash_pedido)
      .digest("hex");

    if (tokenEsperado !== token) {
      return NextResponse.json({ error: "Token inválido" }, { status: 401 });
    }

    // Solo procesar pagos aprobados
    if (!pagado) {
      return NextResponse.json(body.resultado);
    }

    // Activar usuario en Supabase
    const supabase = await createClient();
    await supabase.from("subscriptions").upsert({
      nro_pedido: numero_pedido,
      hash_pedido,
      monto,
      estado: "activo",
      fecha_pago: new Date().toISOString(),
    });

    // Pagopar espera que devolvamos el mismo JSON que nos envió
    return NextResponse.json(body.resultado);

  } catch (err) {
    return NextResponse.json({ error: "Error interno", detalle: String(err) }, { status: 500 });
  }
}
