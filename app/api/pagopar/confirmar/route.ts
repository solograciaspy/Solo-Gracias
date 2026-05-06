import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@/lib/supabase/server";

const TOKEN_PRIVADO = "d0d47b2ccb402959125fcf5ff15fc299";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { nro_pedido, monto, hash_confirmacion, email_cliente, estado } = body;

    // Verificar hash de Pagopar
    const hashEsperado = crypto
      .createHash("sha512")
      .update(TOKEN_PRIVADO + monto + nro_pedido)
      .digest("hex");

    if (hashEsperado !== hash_confirmacion) {
      return NextResponse.json({ error: "Hash inválido" }, { status: 401 });
    }

    // Solo procesar pagos aprobados
    if (estado !== "APROBADO") {
      return NextResponse.json({ ok: false, estado });
    }

    // Actualizar Supabase — activar acceso del usuario
    const supabase = await createClient();
    const { error } = await supabase
      .from("subscriptions")
      .upsert({
        email: email_cliente,
        nro_pedido,
        monto,
        estado: "activo",
        fecha_pago: new Date().toISOString(),
      });

    if (error) {
      return NextResponse.json({ error: "Error Supabase", detalle: error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}