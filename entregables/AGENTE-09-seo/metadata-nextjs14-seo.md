# AGENTE 9 — SEO / CONTENIDO ORGÁNICO
## Metadata Next.js 14 + Estrategia SEO · Solo Gracias · 29 abril 2026

---

## METADATA OPTIMIZADA — CÓDIGO LISTO PARA layout.tsx

```typescript
// app/layout.tsx — Next.js 14 Metadata Export

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Solo Gracias | Streaming de Transformación Personal en Español',
    template: '%s | Solo Gracias',
  },
  description:
    'Plataforma de streaming para tu transformación personal en español. Meditación, bienestar y crecimiento para Latinoamérica. Empieza hoy.',
  keywords: [
    'transformación personal en español',
    'plataforma bienestar latinoamérica',
    'meditación en español',
    'streaming wellness LATAM',
    'crecimiento personal online',
    'mindfulness en español',
    'plataforma espiritual latina',
    'bienestar mental latinoamérica',
    'cursos meditación online',
    'desarrollo personal LATAM',
    'streaming espiritual español',
    'salud mental en español',
    'plataforma mindfulness latina',
    'videos bienestar personal',
  ],
  authors: [{ name: 'Solo Gracias', url: 'https://sologracias.com' }],
  creator: 'Solo Gracias',
  publisher: 'Solo Gracias',
  metadataBase: new URL('https://sologracias.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-419': '/',
      'es-MX': '/mx',
      'es-AR': '/ar',
      'es-CO': '/co',
    },
  },
  openGraph: {
    title: 'Solo Gracias | Streaming de Transformación Personal en Español',
    description:
      'Plataforma de streaming para tu transformación personal en español. Meditación, bienestar y crecimiento para Latinoamérica.',
    siteName: 'Solo Gracias',
    locale: 'es_419',
    alternateLocale: ['es_MX', 'es_AR', 'es_CO', 'es_ES'],
    url: 'https://sologracias.com',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solo Gracias — Plataforma de Transformación Personal en Español',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Gracias | Transformación Personal en Español',
    description:
      'Streaming de bienestar y transformación personal para Latinoamérica. Meditación, crecimiento y propósito en español.',
    site: '@SoloGracias',
    creator: '@SoloGracias',
    images: ['/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'wellness',
  classification: 'Bienestar / Transformación Personal / Streaming',
}
```

---

## KEYWORDS OBJETIVO — LATAM EN ESPAÑOL

### Tier 1 — Alta intención / Alto volumen
- transformación personal en español
- plataforma bienestar latinoamérica
- meditación en español
- streaming wellness LATAM
- crecimiento personal online

### Tier 2 — Nicho / Comunidad
- mindfulness en español
- plataforma espiritual latina
- bienestar mental latinoamérica
- desarrollo personal LATAM
- streaming espiritual español

### Tier 3 — Long tail
- "primera plataforma bienestar latinoamericana"
- "meditación guaraní ancestral"
- "transformación personal Paraguay"
- "alternativa Mindvalley español"
- "alternativa Gaia español"

---

## AUDITORÍA METADATA ACTUAL

**Estado antes de implementar:**
- title: "Solo Gracias" — demasiado corto, sin keywords
- description: "La primera plataforma de streaming de transformacion personal para hispanohablantes." — sin acentos, sin keywords secundarias
- Sin OG tags — links en WhatsApp/IG/FB/LinkedIn aparecen sin imagen ni descripción
- Sin Twitter Card
- Sin canonical URL
- Sin keywords array

**Issues a corregir en layout.tsx:**
1. `"transformacion"` → `"transformación"` (acento faltante en description actual)
2. Agregar todo el bloque metadata de arriba
3. Crear imagen `/public/og-image.jpg` (1200×630px) y `/public/twitter-card.jpg`

---

## IMÁGENES OG REQUERIDAS (pendiente producción A6)

| Archivo | Tamaño | Descripción |
|---------|--------|-------------|
| `/public/og-image.jpg` | 1200 × 630 px | Imagen principal para links compartidos |
| `/public/twitter-card.jpg` | 1200 × 630 px | Twitter/X card image |
| `/public/favicon.ico` | 32 × 32 px | Favicon del sitio |
| `/public/apple-touch-icon.png` | 180 × 180 px | Ícono iOS |
