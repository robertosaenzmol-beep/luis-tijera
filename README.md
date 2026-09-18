# Luis Tijera — Barbería y Peluquería en Alcobendas

Web estática construida con Astro + Tailwind CSS, desplegada en Vercel.

## Requisitos

- Node.js >= 18
- npm o pnpm

## Desarrollo local

```bash
npm install
npm run dev
```

La web se abre en `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview   # preview local del build
```

## Deploy en Vercel

1. Crea un repo en GitHub y sube el proyecto
2. Conecta el repo en [vercel.com](https://vercel.com)
3. Vercel detecta Astro automáticamente — no necesita configuración extra
4. Cada push a `main` dispara un deploy automático

## Sveltia CMS (/admin)

El CMS permite al cliente subir posts de blog y fotos a la galería sin tocar código.

### Configuración

1. En `public/admin/config.yml`, cambia `repo:` por el repo real de GitHub
2. El cliente necesita un **GitHub Personal Access Token** (clásico, scope `repo`)
3. Accede al CMS en `https://luistijera.es/admin`

### Qué puede gestionar el cliente

- **Blog**: crear, editar y eliminar posts
- **Galería**: subir fotos de trabajos con título, estilo y barbero

## Dominio personalizado

1. En Vercel → Settings → Domains, añade `luistijera.es`
2. Configura los DNS del dominio según las instrucciones de Vercel (registros A y CNAME)
3. Vercel genera certificado SSL automáticamente

## Google Analytics

1. Crea una propiedad en GA4
2. Copia el Measurement ID (G-XXXXXXXXXX)
3. Reemplaza `G-XXXXXXXXXX` en `src/layouts/Layout.astro`
4. GA4 solo se carga si el usuario acepta cookies (RGPD)

## Google Search Console

1. Verifica la propiedad con el método DNS o meta tag
2. Envía el sitemap: `https://luistijera.es/sitemap-index.xml`

## Estructura

```
src/
├── layouts/Layout.astro     → HTML base, SEO, JSON-LD, cookies
├── components/              → Componentes reutilizables
├── content/                 → Blog y galería (content collections)
├── pages/                   → Rutas de la web
public/
├── admin/                   → Sveltia CMS
├── images/                  → Imágenes estáticas
```

## Datos pendientes

Ver `PENDIENTES.md` para la lista completa de datos que faltan por confirmar con el cliente.
