# 🐾 Rustimiau - Taller artesanal sustentable

**Rustimiau** es una marca de muebles artesanales hechos a mano, con materiales reciclados y energía solar. Nace de la pasión por la herrería, la carpintería, la sustentabilidad… y dos gatos curiosos que siempre supervisan el taller 🐱

Este sitio web está desarrollado como una landing estática, moderna y adaptable, pensada para presentar los productos reales de Rustimiau y contar la historia detrás de cada pieza.

---

## 🌱 Características del sitio

- HTML5 + CSS3 + JavaScript puro (sin frameworks)
- Carrusel visual con productos reales (fotos y renders)
- Diseño responsive adaptable a móvil
- Testimonios dinámicos
- Botón flotante de WhatsApp (opcional)
- Formulario de contacto (Formspree-ready)
- Subida y hospedaje en AWS S3
- Listo para versión controlada con Git

---

## 📂 Estructura del proyecto

rustimiau/
│
├── index.html
├── contacto.html
├── sobre.html
├── catalogo.html
├── productos.json
│
├── assets/
│ ├── css/
│ │ └── styles.css
│ ├── js/
│ │ └── main.js
│ └── img/
│ └── [fotos reales + renders]



---

## 🚀 Cómo desplegar

1. Subí todos los archivos al bucket de S3 correspondiente
2. Activá el hosting estático en S3
3. Permití acceso público al bucket (lectura)
4. (Opcional) Conectá el dominio `rustimiau.com.ar` desde Route 53

---

## ✨ Créditos

Creado y diseñado por **Diego Herrero**, desde su taller sustentable en Buenos Aires, Argentina.  
Asistencia técnica: ChatGPT (OpenAI).

---

## 🛠️ Licencia

Uso personal / artesanal. No comercial.  
Si te gusta el proyecto, compartilo y mencioná a Rustimiau 💚
