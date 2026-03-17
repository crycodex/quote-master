# PRD — Scope IT

## Visión del Producto

Scope IT es una herramienta móvil para freelancers y agencias de desarrollo de software y marketing digital. Permite generar cotizaciones estructuradas y profesionales en minutos, sin cálculos manuales, y exportarlas como PDF listo para el cliente.

**Plataforma:** Android (primario), iOS
**Stack:** Flutter + SQLite (local-first, sin backend)

---

## Usuarios Objetivo

- Freelancers de desarrollo de software
- Pequeñas agencias de desarrollo y marketing digital
- Consultores de tecnología que necesitan presentar propuestas económicas rápidas

---

## Flujo Principal

### Creación de Cotización (7 pasos)

| Paso | Pantalla | Descripción |
|------|----------|-------------|
| 1 | Tipo de Servicio | Selección entre Web, App Móvil, Backend/API, IA, Marketing Digital o Personalizado |
| 2 | Configuración Base | Tier de plataforma (Basic/Professional/Enterprise), ciclo de facturación (mensual/anual), plataforma móvil (si aplica) |
| 3 | Funcionalidades | Selección múltiple de features opcionales |
| 4 | Usuarios | Tier de usuarios esperados (0-100 hasta 100K+) |
| 5 | Extras | Add-ons opcionales (chat, diseño UX/UI, migraciones, etc.) |
| 6 | Soporte | Plan de soporte post-entrega (None / Basic / Professional / Enterprise) |
| 7 | Marketing | Configuración opcional de servicios de marketing digital |

### Gestión de Proyectos

- Lista de proyectos con búsqueda por nombre o cliente
- Estados de proyecto (activo, cerrado, etc.)
- Vista detalle con desglose completo de costos
- Generación y compartición de PDF desde la vista detalle

---

## Módulos Funcionales

### Calculadora de Desarrollo

**Tipos de servicio y costo base:**
- Web: $250
- App Móvil: $400
- Backend/API: $200
- Automatización IA: $500
- Marketing Digital: $0 (se configura en paso 7)
- Personalizado: $0 (precio libre)

**Multiplicadores de plataforma:**
| Tier | Multiplicador | Hosting mensual |
|------|--------------|-----------------|
| Basic | 1.0x | $29/mes |
| Professional | 1.8x | $79/mes |
| Enterprise | 3.0x | $199/mes |

**Facturación:**
- Mensual: sin descuento
- Anual: 20% de descuento (0.8x)

**Plataforma móvil (solo App Móvil):**
- Play Store: 1.0x
- App Store: 1.1x
- Ambas: 1.5x
- APK / Bundle: 0.85x

**Features opcionales:** $75–$250 c/u
Autenticación, Roles/Permisos, Pagos, Analytics, Notificaciones, Multi-idioma

**Extras opcionales:** $175–$400 c/u
Chat en tiempo real, Push Notifications, Panel Admin, UX/UI Design, Migración de datos, Integraciones, Testing/QA

**Usuarios (costo recurrente mensual):**
- 0–100: $0 | 100–1K: $15 | 1K–10K: $45 | 10K–100K: $120 | 100K+: $300

**Soporte (costo recurrente mensual):**
- None: $0 | Basic: $49 | Professional: $129 | Enterprise: $299

**Multiplicador por tamaño de empresa** (configurado en Settings):
Startup / Small / Medium / Large / Enterprise → ajusta el precio total

### Módulo de Marketing Digital

5 tipos de servicio configurables independientemente:

**Redes Sociales**
- Plataformas: Instagram, Facebook, TikTok, X, LinkedIn, YouTube
- Base por plataforma: $100–$250/mes
- Frecuencia: Diaria (2.5x), 3x/semana (1.5x), Semanal (1.0x), Quincenal (0.6x)

**Cobertura de Eventos**
- Tipos: Corporativo ($300), Social ($200), Lanzamiento ($500), Conferencia ($400)
- Duración: 2h (1.0x), 4h (1.8x), 8h (3.0x), Día completo (4.0x)

**Anuncios Digitales**
- Setup: Google Ads ($200), Meta ($150), TikTok ($180)
- Gestión: 15% del presupuesto mensual de ads

**Creación de Contenido**
- $25 por post (configurable)

**Email Marketing**
- ≤1K contactos: $80/mes
- 1K–10K: $200/mes
- 10K+: $400/mes

### Generación de PDF

La "Nota de Venta" incluye:
- Datos del negocio (nombre, email, teléfono, dirección, web)
- Resumen de servicios seleccionados
- Desglose de costos de desarrollo (único)
- Costos de marketing (si aplica)
- Costos recurrentes (hosting, soporte, usuarios)
- Cálculo de IVA
- Total final

Exportable vía `printing` (imprimir o guardar PDF) y `url_launcher` (compartir).

---

## Persistencia

Local-first con SQLite. Sin autenticación ni sincronización en la nube.

**Esquema (v5):**
- `settings` — preferencias de app y datos del negocio
- `categories` / `services` — catálogo de servicios configurable
- `projects` / `project_lines` — proyectos y sus líneas de servicio
- `marketing_config` — configuración de marketing por proyecto

---

## Configuración de la App (Settings)

- Toggle dark/light mode
- Información del negocio: nombre, email, teléfono, dirección, sitio web, % IVA
- Tamaño de empresa cliente (multiplica precios): Startup → Enterprise
- Catálogo de servicios personalizados

---

## Diseño

Sistema visual **Neobrutalism** (`neubrutalism_ui`):
- Bordes gruesos (2.5px), sombras con offset
- Tipografía: Space Grotesk (Google Fonts)
- Paleta: azul primario, amarillo de acento, grises neutros
- Soporte completo de tema claro y oscuro
