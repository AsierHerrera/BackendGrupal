## Descripción
Este proyecto es un juego temático basado en "El Señor de los Anillos". Los usuarios pueden elegir entre uno de los 5 héroes existentes o crear su propio personaje utilizando un menú desplegable de parámetros. Hay dos roles de usuario: Usuario y Administrador. Los usuarios pueden jugar, crear y modificar sus datos de registro. Los administradores tienen más privilegios, como ver todos los usuarios, buscar por nombre y eliminar usuarios.

## Características
- **Usuarios:**
  - Jugar el juego.
  - Crear y modificar su personaje.
  - Actualizar sus datos de registro.
- **Administradores:**
  - Ver todos los usuarios.
  - Buscar usuarios por nombre.
  - Eliminar usuarios.

## Tecnologías Utilizadas
- Node.js
- Express
- Pug (como motor de plantillas)
- Docker (para la contenedorización)
- Base de Datos (configurada en el archivo `.env`)

## Configuración del Proyecto

### Pre-requisitos
- Node.js
- Docker
- Base de Datos (PostgreSQL, MySQL, etc.)

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-proyecto>

2. Instalar las dependencias:
    npm install
    Configurar las variables de entorno:
    Crear un archivo .env en la raíz del proyecto con el siguiente contenido (actualizar con sus propios valores):

3. Crear en raiz .env 
    APP_PORT=3000
    APP_USERNAME= nombre_de_usuario
    MYSQL_HOST=localhost
    MYSQL_ROOT_PASSWORD=tu_contraseña
    MYSQL_DATABASE=nombre_de_tu_base_de_datos
    MYSQL_USER=tu_usuario
    MYSQL_PASSWORD=tu_contraseña
    MYSQL_PORT=3308
    JWT_SECRET=secretoiberico
    SESSION_SECRET=session

4.  Iniciar el contenedor de Docker:
    docker-compose up

5.  Iniciar el servidor:
    npm start
    Uso
    Navegador Web:
    Abre tu navegador web y ve a http://localhost:3000 para interactuar con la aplicación.

    Rutas principales:

    /user/login: Página de inicio de sesión.
    /user/signup: Página de registro.
    /character: Página principal del juego.
    Estructura del Proyecto
    src/
    controllers/: Controladores de la aplicación.
    models/: Modelos de la base de datos.
    routers/: Rutas de la aplicación.
    views/: Vistas de la aplicación (archivos Pug).
    public/: Archivos estáticos (imágenes, CSS, JS).
    .env: Archivo de configuración de variables de entorno.
    Dockerfile: Configuración de Docker.
    docker-compose.yml: Configuración de Docker Compose.
