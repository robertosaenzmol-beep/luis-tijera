# Argumentario de venta — Luis Tijera Barbería

Documento para la reunión con Luis. Cada decisión técnica tiene un por qué de negocio.

---

## El problema

Luis Tijera tiene 727 reseñas entre dos locales y **ni una sola página web propia**. Su antigua web de Google (negocio.site) lleva meses devolviendo un error 404. Ahora mismo:

1. **Todo su tráfico depende de terceros** — Google Maps, Booksy, Instagram. Si mañana Booksy cambia sus condiciones o Instagram baja el alcance, Luis pierde visibilidad sin tener alternativa.
2. **727 reseñas sin capitalizar** — Tiene una reputación brutal pero no hay ninguna landing propia que la muestre a quien busca "barbería Alcobendas" en Google.
3. **Dos locales, cero estructura web** — Google no entiende bien que son dos locales del mismo negocio. Pueden estar canibalizándose entre sí en el mapa.
4. **La competencia ya se mueve** — Fresh Barbershop (también en Alcobendas) ya tiene web con SEO local y rankea en posiciones 2-6. Cuanto más tarde Luis, más difícil será competir.

---

## La solución: qué hemos construido y por qué

### 1. Web propia con dominio propio
**Qué**: Sitio web en luistijera.es (o el dominio que elija).
**Por qué**: Recuperar el control de la presencia digital. Un activo que es suyo, no de Google ni de Booksy.

### 2. Dos landings independientes por local
**Qué**: `/barberia-alcobendas-la-ermita` y `/peluqueria-alcobendas-centro`
**Por qué**: Google necesita una página por local para posicionar cada uno correctamente en el mapa. Sin esto, los dos locales compiten entre sí. Con esto, cada uno ataca sus propias búsquedas.

### 3. SEO local desde el primer día
**Qué**: Schema JSON-LD (BarberShop + HairSalon), meta tags geo, sitemap, títulos optimizados para "barbería Alcobendas", "peluquería Alcobendas", "barbería La Moraleja", etc.
**Por qué**: El 80% de los clientes de una barbería buscan en Google. Si la web no aparece, no existe. El SEO local es lo que convierte una web bonita en una web que trae clientes.

### 4. CTA de reserva en todas las páginas
**Qué**: Botón "Reservar cita" que lleva a Booksy con parámetros UTM de tracking.
**Por qué**: Podemos medir exactamente cuántas reservas trae la web. Datos, no opiniones. En la reunión de seguimiento podremos decir: "la web ha generado X reservas este mes".

### 5. Teléfono clicable con tracking
**Qué**: Cada número de teléfono es un enlace que registra un evento en Google Analytics.
**Por qué**: Muchos clientes prefieren llamar. Medimos esas llamadas igual que las reservas online.

### 6. CMS para el cliente (Sveltia)
**Qué**: Panel en /admin donde Luis puede subir fotos a la galería y publicar posts de blog sin necesitar a nadie.
**Por qué**: La web que no se actualiza se muere. Con el CMS, Luis mantiene la galería fresca subiendo fotos de trabajos en 2 clics. Cada foto nueva es contenido para Google.

### 7. Blog con SEO
**Qué**: Sección de blog gestionable desde el CMS.
**Por qué**: Cada post es una oportunidad de rankear por nuevas búsquedas ("cortes más pedidos 2026", "cómo mantener un fade", "aceite de barba"). El blog de Fresh Barbershop ya tiene 5 posts y le trae tráfico orgánico.

### 8. Velocidad extrema
**Qué**: Web estática (Astro), sin JavaScript innecesario, imágenes optimizadas.
**Por qué**: Google penaliza las webs lentas. Una barbería la buscan desde el móvil, en la calle, con 4G. Si tarda más de 3 segundos en cargar, se van. Esta web carga en menos de 1 segundo.

### 9. Cumplimiento legal (RGPD)
**Qué**: Aviso legal, política de privacidad, política de cookies, banner de consentimiento.
**Por qué**: Es obligatorio por ley. Google Analytics solo se activa si el usuario acepta. Sin esto, una inspección podría poner una multa.

---

## Lo que falta (reunión con Luis)

Ver `PENDIENTES.md` para la lista completa. Los puntos críticos:

- [ ] Fotos reales (locales + trabajos)
- [ ] Logo vectorial
- [ ] Confirmar precios actualizados
- [ ] Reseñas reales para la web
- [ ] Datos legales (NIF, email)
- [ ] Measurement ID de GA4
- [ ] Dominio comprado

---

## Mantenimiento (propuesta Catafa)

| Servicio | Incluye |
|---|---|
| Hosting | Vercel (gratuito en plan hobby, o Pro si crece) |
| Dominio | ~12 €/año |
| Actualizaciones | Revisar precios, añadir fotos, publicar posts |
| SEO seguimiento | Informe mensual de posiciones y tráfico |
| Google Business | Optimización y sincronización con la web |

---

## Números que importan

- **727** reseñas sumadas entre los dos locales
- **4,9 ★** en Google (579 reseñas) — top de Alcobendas
- **4,8 ★** en Booksy (148 reseñas)
- **0** webs propias hasta hoy
- **10** páginas construidas, cada una optimizada para SEO
- **< 1s** tiempo de carga

---

*Preparado por Catafa — Agencia de presencia digital*
