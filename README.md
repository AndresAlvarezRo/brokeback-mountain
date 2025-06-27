# 🛥️ Sail Boats Initiative

**Sail Boats Initiative** es una aplicación web desarrollada en **React + TypeScript**, diseñada para ser desplegada fácilmente usando **Docker**.  
Este repositorio incluye todo lo necesario para construir y ejecutar la aplicación localmente en cuestión de minutos.

---

## ✅ Requisitos previos

- Una PC con **Windows 10/11**
- Acceso a Internet
- Permisos para instalar software

---

## 🐳 Paso 1: Instalar Docker Desktop en Windows

1. Visita 👉 [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Haz clic en **"Download for Windows"** y descarga el instalador.
3. Ejecuta el archivo `.exe` descargado y sigue los pasos de instalación.
4. Durante la instalación, asegúrate de **habilitar WSL 2** si se solicita (Docker puede instalarlo automáticamente).
5. Reinicia tu PC si es necesario.
6. Abre **Docker Desktop** y espera a que esté en estado **"Running"**.

---

## 🐙 Paso 2: Crear una cuenta en Docker Hub (opcional pero recomendado)

1. Ve a 👉 [https://hub.docker.com/signup](https://hub.docker.com/signup)
2. Registra una cuenta gratuita.
3. Inicia sesión en Docker Desktop con tu cuenta de Docker Hub.

---

## 📦 Paso 3: Clonar este repositorio

Abre **PowerShell**, **Git Bash** o tu terminal favorita, y ejecuta:

```bash
git clone https://github.com/AndresAlvarezRo/brokeback-mountain.git
cd brokeback-mountain
```

---

## 🏗️ Paso 4: Construir la imagen Docker

Dentro del directorio del proyecto, ejecuta:

```bash
docker build -t viento-franco:esp .
```

Este comando construye la imagen Docker local a partir del `Dockerfile` del proyecto.

---

## 🚀 Paso 5: Ejecutar el contenedor

Ejecuta la aplicación con:

```bash
docker run -d -p 48372:80 --name sail-boats-initiative-container viento-franco:esp
```

Esto iniciará el contenedor y expondrá la app en el puerto **48372** de tu máquina.

---

## 🌐 Paso 6: Ver la aplicación en el navegador

Abre tu navegador e ingresa a:

```
http://localhost:48372
```

¡Y listo! Ahora deberías estar viendo la aplicación **Sail Boats Initiative** funcionando localmente. ⚓

---

## 🛑 Comandos útiles

### 📴 Detener la app:

```bash
docker stop sail-boats-initiative-container
```

### 🗑️ Eliminar el contenedor:

```bash
docker rm sail-boats-initiative-container
```

### 🔍 Ver imágenes Docker instaladas:

```bash
docker images
```

---

## 🧼 Limpieza (opcional)

Si deseas eliminar también la imagen Docker local:

```bash
docker rmi sail-boats-initiative
```

---

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License**.  
Consulta el archivo `LICENSE` para más detalles.
