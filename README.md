# Scope IT - Landing Page

Bienvenido al repositorio de la Landing Page oficial de **Scope IT**.

Scope IT es una herramienta móvil diseñada para freelancers y agencias de desarrollo de software y marketing digital. Permite a los usuarios generar cotizaciones estructuradas y profesionales de forma rápida, automatizando cálculos complejos y exportando los resultados directamente a un documento PDF listo para enviar al cliente.

Este proyecto web está diseñado para promocionar la aplicación, mostrar sus ventajas y facilitar su descarga/acceso a la plataforma.

## 🚀 Tecnologías Principales

Este proyecto ha sido construido utilizando tecnologías web modernas para asegurar un rendimiento óptimo, escalabilidad y un desarrollo ágil y agradable:

- **[React](https://react.dev/)**: Librería para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción (build tool) ultrarrápida para el desarrollo web moderno.
- **[TypeScript](https://www.typescriptlang.org/)**: Lenguaje tipado que se basa en JavaScript, usado en todo el proyecto para añadir seguridad y robustez al código.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first que permite un prototipado y diseño rápido directamente desde el marcado HTML.
- **[shadcn/ui](https://ui.shadcn.com/)**: Componentes de UI bellamente diseñados, construidos con Radix UI y Tailwind CSS.

## 🛠 Instalación y Configuración

Sigue estos pasos para replicar este proyecto en tu entorno local:

1. **Clona el repositorio** (si aplica) o asegúrate de estar en la carpeta del proyecto.
2. **Instala las dependencias**:
   ```sh
   npm install
   ```
   > **Nota**: Si presentas conflictos de dependencias heredadas de dependencias del framework (ej. `lovable-tagger` o diferencias de versiones con `vite 8`), puedes utilizar `npm install --legacy-peer-deps`.

3. **Inicia el servidor de desarrollo**:
   ```sh
   npm run dev
   ```
4. Abre la aplicación en tu navegador accediendo a la URL que se te indique en la consola, típicamente `http://localhost:8080` (o `http://localhost:5173`).

## 📁 Estructura del Proyecto

A continuación se muestra una descripción general de la organización del proyecto:

```text
├── src/
│   ├── assets/       # Imágenes, iconos y otros archivos estáticos
│   ├── components/   # Componentes de React reutilizables (divididos en landing/ y ui/)
│   ├── hooks/        # Custom React hooks (ej. uso de animaciones, vistas móviles, etc.)
│   ├── lib/          # Funciones de utilidad y configuración del proyecto
│   ├── pages/        # Componentes que actúan como "pantallas" o "rutas" principales (Index, Privacy, Policy, etc.)
│   ├── App.tsx       # Componente raíz donde se define la configuración principal y el Router
│   ├── main.tsx      # Punto de entrada de la aplicación en React
│   └── index.css     # Hoja de estilos principal con Tailwind
├── public/           # Archivos públicos de uso estático
├── vite.config.ts    # Archivo de configuración para Vite
├── package.json      # Información de comandos y dependencias del proyecto
└── prd.md            # Documento de Requerimientos y Definición del Producto (PRD) de Scope IT
```

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar las siguientes rutinas a través de `npm`:

- `npm run dev`: Ejecuta la aplicación en el modo de desarrollo. Se recargará automáticamente si realizas ediciones en los archivos.
- `npm run build`: Empaqueta o hace un "build" de la aplicación para producción en la carpeta `/dist`. Contiene tanto los minificados de JavaScript/CSS optimizados listos para su despliegue y uso final.
- `npm run preview`: Previsualiza el contenido que se generó de manera local de la carpeta de salida (después de ejecutar `build`).
- `npm run lint`: Busca y visualiza errores de buenas prácticas de código y tipeado con ESLint.

## ✨ Características de la Página

- **Diseño Responsivo**: Totalmente funcional en dispositivos móviles, tablets y ordenadores de escritorio.
- **Modo Claro / Oscuro**: Colores modernos adaptables por configuraciones de tema que utiliza la librería de componentes.
- **Estética Neobrutalism**: Integrando el concepto estético que presenta la app móvil de "bordes marcados y alto contraste", implementado a través de utilidades CSS personalizadas en la landing.
- **Navegación Intuitiva**: Routing simple enfocado a destacar las características del producto, su funcionamiento, precios, e información legal como Políticas y Privacidad.

## 📄 Licencia

Este proyecto está bajo confidencialidad y autoría completa desarrollada para **Scope IT**.

---
*Hecho para darles a los equipos de IT y marketing una manera confiable de generar cotizaciones.*
