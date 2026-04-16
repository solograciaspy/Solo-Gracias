"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";

// ============================================================
// SOLO GRACIAS — AuthModal
// AGREGAR al final de page.tsx, antes de la función App
// No modifica ninguna función existente
// ============================================================

type AuthView = "login" | "register";

interface AuthModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

const EyeIcon = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </>
    )}
  </svg>
);

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1A0838" style={{ flexShrink: 0 }}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const SpiralLogoAuth = () => (
  <svg width="20" height="20" viewBox="0 0 72 72" fill="none">
    <path d="M36 36 C36 33 34 31 31 31 C28 31 26 33 26 36 C26 40 29 43 33 44 C38 45 43 42 45 37 C47 31 44 24 39 21 C33 17 25 19 20 24 C14 30 14 39 18 46 C23 54 33 57 42 54 C52 50 58 40 56 30 C54 19 44 12 33 12 C21 12 11 20 9 32 C7 44 13 57 24 62 C36 68 51 65 59 54"
      stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="36" cy="36" r="2.5" fill="#C9A84C"/>
  </svg>
);

function getStrength(val: string): { score: number; label: string; color: string } {
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const map = [
    { label: "", color: "" },
    { label: "Débil", color: "#E24B4A" },
    { label: "Media", color: "#C9A84C" },
    { label: "Fuerte", color: "#1D9E75" },
    { label: "Muy fuerte", color: "#1D9E75" },
  ];
  return { score, ...map[score] };
}

export function AuthModal({ onClose, onSuccess }: AuthModalProps) {
  const supabase = createClient();
  const [view, setView] = useState<AuthView>("login");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const strength = getStrength(password);

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    onSuccess?.();
    onClose();
  };

  const handleRegister = async () => {
    setError("");
    if (!terms) { setError("Aceptá los términos para continuar."); return; }
    if (strength.score < 2) { setError("La contraseña es muy débil."); return; }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: nombre } },
    });
    setLoading(false);
    if (error) { setError(error.message); return; }
    setSuccess("¡Cuenta creada! Revisá tu correo para confirmar.");
  };

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/` },
    });
  };

  const handleApple = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "apple",
      options: { redirectTo: `${window.location.origin}/` },
    });
  };

  const handleForgot = async () => {
    if (!email) { setError("Ingresá tu correo primero."); return; }
    setLoading(true);
    await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);
    setSuccess("Te enviamos un email para restablecer tu contraseña.");
  };

  const switchView = (v: AuthView) => {
    setView(v);
    setError("");
    setSuccess("");
    setPassword("");
    setShowPass(false);
  };

  // ─── Estilos inline (no modifica CSS global) ───────────────

  const s = {
    overlay: {
      position: "fixed" as const,
      inset: 0,
      background: "rgba(26,8,56,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "24px 16px",
    },
    wrap: { position: "relative" as const, width: "100%", maxWidth: 400 },
    glow: {
      position: "absolute" as const,
      inset: -18,
      borderRadius: 30,
      boxShadow: "0 0 18px 6px rgba(155,109,255,0.18), 0 0 40px 12px rgba(107,33,168,0.10), 0 0 70px 20px rgba(155,109,255,0.06)",
      pointerEvents: "none" as const,
      zIndex: 0,
      background: "#ffffff",
    },
    modal: {
      background: "#ffffff",
      border: "0.5px solid #e4d9f7",
      borderRadius: 20,
      width: "100%",
      padding: "36px 32px",
      position: "relative" as const,
      zIndex: 1,
    },
    logoRow: { display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginBottom: 6 },
    logoText: { fontSize: 15, fontWeight: 500, color: "#3D1E7A", fontFamily: "Georgia, serif", letterSpacing: "0.02em" },
    title: { fontSize: 22, fontWeight: 500, color: "#1A0838", textAlign: "center" as const, marginBottom: 4, fontFamily: "Georgia, serif" },
    sub: { fontSize: 13, color: "#9B6DFF", textAlign: "center" as const, marginBottom: 28 },
    socialRow: { display: "flex", gap: 8, marginBottom: 20 },
    btnSocial: {
      flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      padding: "8px 10px", border: "0.5px solid #e4d9f7", borderRadius: 8,
      background: "#faf8ff", color: "#1A0838", fontSize: 12, fontWeight: 500,
      cursor: "pointer", fontFamily: "inherit",
    },
    dividerRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20 },
    dividerLine: { flex: 1, height: "0.5px", background: "#e8e0f5" },
    dividerText: { fontSize: 12, color: "#9B6DFF", whiteSpace: "nowrap" as const },
    tabs: { display: "flex", background: "#f3eeff", borderRadius: 10, padding: 3, marginBottom: 24, gap: 3 },
    tab: (active: boolean) => ({
      flex: 1, padding: "8px", fontSize: 13, fontWeight: 500, textAlign: "center" as const,
      cursor: "pointer", border: active ? "0.5px solid #e0d5f5" : "none",
      background: active ? "#ffffff" : "transparent",
      color: active ? "#3D1E7A" : "#9B6DFF",
      borderRadius: 8, fontFamily: "inherit",
    }),
    field: { marginBottom: 16 },
    label: { display: "block", fontSize: 11, color: "#6B21A8", marginBottom: 6, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase" as const },
    fieldWrap: { position: "relative" as const },
    input: {
      width: "100%", background: "#faf8ff", border: "0.5px solid #e4d9f7",
      borderRadius: 10, padding: "11px 40px 11px 14px",
      fontSize: 14, color: "#1A0838", outline: "none", fontFamily: "inherit",
    },
    eyeBtn: {
      position: "absolute" as const, right: 12, top: "50%", transform: "translateY(-50%)",
      background: "none", border: "none", cursor: "pointer",
      color: showPass ? "#9B6DFF" : "#c4b8e0", padding: 0, display: "flex", alignItems: "center",
    },
    strengthRow: { display: "flex", gap: 4, marginTop: 8 },
    strengthBar: (i: number) => ({
      flex: 1, height: 3, borderRadius: 2,
      background: i < strength.score
        ? (strength.score <= 1 ? "#E24B4A" : strength.score <= 2 ? "#C9A84C" : "#1D9E75")
        : "#e8e0f5",
      transition: "background 0.3s",
    }),
    strengthLabel: { fontSize: 11, marginTop: 5, color: strength.color },
    forgot: { textAlign: "right" as const, marginBottom: 20, marginTop: -8 },
    forgotBtn: { fontSize: 12, color: "#9B6DFF", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" },
    btnMain: {
      width: "100%", padding: 13, background: loading ? "#6B21A8" : "#3D1E7A",
      border: "none", borderRadius: 50, fontSize: 15, fontWeight: 500,
      color: "#fff", cursor: loading ? "not-allowed" : "pointer", fontFamily: "inherit",
      opacity: loading ? 0.8 : 1,
    },
    checkRow: { display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 18 },
    checkLabel: { fontSize: 12, color: "#9B6DFF", cursor: "pointer", lineHeight: 1.5 },
    errorBox: { fontSize: 12, color: "#E24B4A", background: "#fff0f0", border: "0.5px solid #f5c1c1", borderRadius: 8, padding: "8px 12px", marginBottom: 14 },
    successBox: { fontSize: 12, color: "#1D9E75", background: "#f0faf5", border: "0.5px solid #b3e6cf", borderRadius: 8, padding: "8px 12px", marginBottom: 14 },
    footer: { fontSize: 12, color: "#9B6DFF", textAlign: "center" as const, marginTop: 20 },
    footerBtn: { color: "#3D1E7A", fontWeight: 500, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 12 },
    closeBtn: {
      position: "absolute" as const, top: 14, right: 16,
      background: "none", border: "none", cursor: "pointer",
      fontSize: 18, color: "#c4b8e0", lineHeight: 1,
    },
  };

  return (
    <div style={s.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={s.wrap}>
        <div style={s.glow} />
        <div style={s.modal}>
          <button style={s.closeBtn} onClick={onClose}>✕</button>

          {/* Logo */}
          <div style={s.logoRow}>
            <SpiralLogoAuth />
            <span style={s.logoText}>Solo Gracias</span>
          </div>

          <div style={s.title}>
            {view === "login" ? "Bienvenida de vuelta" : "Comenzá tu viaje"}
          </div>
          <div style={s.sub}>
            {view === "login" ? "Tu transformación te espera" : "Primeros 30 días completamente gratis"}
          </div>

          {/* Social */}
          <div style={s.socialRow}>
            <button style={s.btnSocial} onClick={handleGoogle}>
              <GoogleIcon /> Google
            </button>
            <button style={s.btnSocial} onClick={handleApple}>
              <AppleIcon /> Apple
            </button>
          </div>

          {/* Divider */}
          <div style={s.dividerRow}>
            <div style={s.dividerLine} />
            <span style={s.dividerText}>o con tu correo</span>
            <div style={s.dividerLine} />
          </div>

          {/* Tabs */}
          <div style={s.tabs}>
            <button style={s.tab(view === "login")} onClick={() => switchView("login")}>Iniciar sesión</button>
            <button style={s.tab(view === "register")} onClick={() => switchView("register")}>Crear cuenta</button>
          </div>

          {/* Error / Success */}
          {error && <div style={s.errorBox}>{error}</div>}
          {success && <div style={s.successBox}>{success}</div>}

          {/* Login form */}
          {view === "login" && (
            <>
              <div style={s.field}>
                <label style={s.label}>Correo electrónico</label>
                <div style={s.fieldWrap}>
                  <input style={s.input} type="email" placeholder="tu@email.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div style={s.field}>
                <label style={s.label}>Contraseña</label>
                <div style={s.fieldWrap}>
                  <input style={s.input} type={showPass ? "text" : "password"}
                    placeholder="••••••••" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()} />
                  <button style={s.eyeBtn} onClick={() => setShowPass(!showPass)}>
                    <EyeIcon open={showPass} />
                  </button>
                </div>
              </div>
              <div style={s.forgot}>
                <button style={s.forgotBtn} onClick={handleForgot}>¿Olvidaste tu contraseña?</button>
              </div>
              <button style={s.btnMain} onClick={handleLogin} disabled={loading}>
                {loading ? "Ingresando..." : "Ingresar"}
              </button>
            </>
          )}

          {/* Register form */}
          {view === "register" && (
            <>
              <div style={s.field}>
                <label style={s.label}>Nombre</label>
                <div style={s.fieldWrap}>
                  <input style={s.input} type="text" placeholder="Tu nombre completo"
                    value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
              </div>
              <div style={s.field}>
                <label style={s.label}>Correo electrónico</label>
                <div style={s.fieldWrap}>
                  <input style={s.input} type="email" placeholder="tu@email.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div style={s.field}>
                <label style={s.label}>Contraseña</label>
                <div style={s.fieldWrap}>
                  <input style={s.input} type={showPass ? "text" : "password"}
                    placeholder="Mínimo 8 caracteres" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  <button style={s.eyeBtn} onClick={() => setShowPass(!showPass)}>
                    <EyeIcon open={showPass} />
                  </button>
                </div>
                {password && (
                  <>
                    <div style={s.strengthRow}>
                      {[0,1,2,3].map((i) => <div key={i} style={s.strengthBar(i)} />)}
                    </div>
                    <div style={s.strengthLabel}>{strength.label}</div>
                  </>
                )}
              </div>
              <div style={s.checkRow}>
                <input type="checkbox" id="auth-terms" checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  style={{ accentColor: "#3D1E7A", width: 14, height: 14, marginTop: 2, flexShrink: 0 }} />
                <label htmlFor="auth-terms" style={s.checkLabel}>
                  Acepto los <span style={{ color: "#C9A84C" }}>términos y condiciones</span> y la <span style={{ color: "#C9A84C" }}>política de privacidad</span>
                </label>
              </div>
              <button style={s.btnMain} onClick={handleRegister} disabled={loading}>
                {loading ? "Creando cuenta..." : "Crear mi cuenta — 30 días gratis"}
              </button>
            </>
          )}

          {/* Footer */}
          <div style={s.footer}>
            {view === "login" ? (
              <>¿No tenés cuenta?{" "}
                <button style={s.footerBtn} onClick={() => switchView("register")}>Crear cuenta gratis</button>
              </>
            ) : (
              <>¿Ya tenés cuenta?{" "}
                <button style={s.footerBtn} onClick={() => switchView("login")}>Iniciar sesión</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
