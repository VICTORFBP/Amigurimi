# Requerimientos de Material Visual (Imágenes)

Para terminar de dar vida a la página web, necesitamos extraer las imágenes del [Google Drive](https://drive.google.com/drive/folders/1NpCF10_lgBcEERwNUCjlTQ-SphD_5k5V) y guardarlas en la carpeta `public/images/` de este proyecto.

> **Importante:** Todas las imágenes deben ser convertidas a formato `.webp` y comprimidas para que pesen menos de **200 KB** (requisito de SEO y rendimiento).

## Lista de Imágenes a Reemplazar

### 1. Página de Inicio y Hero
- **`public/images/hero-placeholder.webp`**
  - **Uso:** Imagen principal en la portada de la web (`HeroSection.astro`).
  - **Descripción:** Debe ser una imagen muy atractiva, idealmente un montaje de varios amigurumis adorables o un perro tejido de alta calidad que capte la atención de inmediato. Relación de aspecto recomendada: 4:5.

### 2. Mockup del Ebook (Landing Comercial)
- **`public/images/ebook-mockup.webp`**
  - **Uso:** Imagen principal de la landing page de ventas (`ebook-patrones-mascotas.astro`).
  - **Descripción:** Un mockup o representación 3D del ebook "60 Patrones de Mascotas Amigurumi". Relación de aspecto recomendada: 3:4.

### 3. Galería de Productos (6 Imágenes)
- **`public/images/gallery-1.webp`**
- **`public/images/gallery-2.webp`**
- **`public/images/gallery-3.webp`**
- **`public/images/gallery-4.webp`**
- **`public/images/gallery-5.webp`**
- **`public/images/gallery-6.webp`**
  - **Uso:** Muestra de patrones incluidos en el ebook (`ProductGallery.astro`).
  - **Descripción:** Imágenes individuales cuadradas (relación de aspecto 1:1) de diferentes mascotas ya tejidas (perros, gatos, conejos, etc.).

### 4. Meta Imagen SEO (Open Graph)
- **`public/images/og-default.jpg`**
  - **Uso:** Es la imagen que aparecerá cuando se comparta el enlace de la web en WhatsApp, Facebook, etc.
  - **Descripción:** Una imagen horizontal (1200x630 píxeles) que contenga los mejores amigurumis y el título de la página.

### 5. (Opcional) Fotos de Testimonios
Actualmente usamos imágenes de prueba, pero si en el Drive hay fotos de personas que han dejado reviews, se pueden subir como `testimonio-1.webp`, `testimonio-2.webp`, etc., y actualizar las rutas en `TestimonialsSection.astro`.

---
**Instrucciones para el Colaborador:**
Por favor, procesa las imágenes, dales el nombre exacto que se indica arriba y súbelas a la carpeta `/public/images/`. No es necesario modificar el código si usas los nombres exactos.
