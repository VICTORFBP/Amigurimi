# Tareas Pendientes para el Equipo (Desarrollo y Marketing)

Este documento contiene las tareas finales recomendadas antes de lanzar campañas publicitarias o enviar tráfico masivo a la landing page.

## 1. Integración de Píxeles de Rastreo (Analytics & Ads)
- [ ] **Pixel de Meta (Facebook/Instagram Ads):** Insertar el código base en el `<head>` (dentro de `src/layouts/Layout.astro`).
- [ ] **Pixel de Hotmart:** Asegurarse de que Hotmart está comunicándose correctamente con las campañas para reportar las conversiones.
- [ ] **Google Analytics (opcional pero recomendado):** Insertar el tag (GTAG) para ver el comportamiento del usuario en la web.

## 2. Páginas Legales (Requisito para Facebook Ads)
- [ ] Crear la página de **Política de Privacidad** (`src/pages/politica-de-privacidad.astro`).
- [ ] Crear la página de **Términos y Condiciones** (`src/pages/terminos.astro`).
- [ ] Agregar los enlaces a estas páginas en la sección inferior del `Footer.astro`.

## 3. Optimización para Compartir (Open Graph / SEO)
- [ ] En `src/layouts/Layout.astro`, agregar la etiqueta meta `og:image` con una imagen representativa del producto. Esto asegura que si alguien envía el enlace por WhatsApp o Facebook, aparezca una miniatura bonita y no un enlace vacío.

## 4. Revisión de Rendimiento y Móviles
- [ ] Probar la página desde un celular real para asegurar que el nuevo carrusel de testimonios y los videos se vean y se deslicen correctamente.
- [ ] Verificar que los videos (`.webm`) carguen rápido. Si demoran mucho, considerar pasarlos por un compresor de video (como Handbrake) manteniendo la calidad.

## 5. Pruebas de Enlaces
- [ ] Realizar una compra de prueba (o generar un boleto) en Hotmart usando los botones de la página para confirmar que el Hotlink de afiliado está registrando los clics y comisiones adecuadamente.
