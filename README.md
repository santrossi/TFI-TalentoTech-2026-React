
# Barro Studio

E-commerce ficticio de una tienda de piezas de cerámica, desarrollado como proyecto final de cursada de React en Talento Tech 2026.

La aplicación permite explorar un catálogo de productos, gestionar un carrito de compras y administrar el inventario desde un panel de administrador oculto. Cuenta con dos vistas: un layout público para clientela y un dashboard de administración para la gestión del inventario.

##  Ejecución

Deploy en Netlify: https://tt-tfi-react-barrostudio.netlify.app/


## Tecnologías utilizadas

- **React + Vite** — Componentes y desarrollo de la interfaz
- **JavaScript** — Lógica de la aplicación
- **Firebase Auth.** — Autenticación de usuarios
- **Cloud Firestore** — Base de datos NoSQL para almacenar y gestionar productos
- **React Router DOM** — Navegación y gestión de rutas
- **React Toastify** — Notificaciones in-app y alertas
- **CSS** — Estilos y diseño


##  Funcionalidades

###  Vista pública
- Visualización de un catálogo de piezas de cerámica, cargado en Firestore
- Vista de detalle de producto
- Gestión del carrito de compras (agregar y eliminar productos del carrito)

###  Panel de administrador
- Acceso oculto a pantalla de login (agregando "/admin" a la URL)
- Autenticación de Firebase 
- Dashboard con acciones CRUD para gestión de inventario (NOV26: únicamente alta de nuevos productos)

###  Autenticación y base de datos
- Inicio de sesión mediante Firebase Authentication
- Persistencia de datos utilizando Cloud Firestore
- Comunicación con la base de datos para consultar y gestionar productos

###  Notificaciones In-App
- Alertas mediante React Toastify, dando confirmación y feedback visual al usuario de sus acciones, y eventos de la aplicación.


##  Instalación

1. Clonar el repositorio:

   ```bash
   git clone URL_DEL_REPOSITORIO
   ```

2. Ingresar al directorio del proyecto:

   ```bash
   cd NOMBRE_DEL_PROYECTO
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```
   

##  Contexto académico

Proyecto final integrador de la cursada de React, módulo de la certificación Full-Stack Web Developer dictada por Talento Tech, 2026.

El objetivo fue desarrollar una aplicación e-commerce aplicando los conceptos y herramientas trabajados durante la cursada, integrando componentes reutilizables, manejo de estados y efectos, navegación, autenticación y persistencia de datos mediante consumo de servicios externos
