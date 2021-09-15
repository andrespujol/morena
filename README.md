# Morena
## Indumentaria femenina
![Image text](https://ibb.co/DR6f5Qk)

***
## Descripción 
E-commerce creado en el curso de React de Coderhouse. Se trata de un sitio de venta de indumentaria femenina

### Vista previa
![Image text](https://i.ibb.co/yVrfbb8/captura.jpg)


# Deploy 

![](https://github.com/andrespujol/morena/blob/main/src/assets/visualizaci%C3%B3n.gif)

[https://morena-seven.vercel.app/](https://morena-seven.vercel.app/)

***
## Construido con 🛠️

* [React](https://es.reactjs.org/) - Biblioteca de JavaScript utilizada.

* [Node Js](https://nodejs.org/es/) - Entorno de desarrollo.

* [NPM](https://www.npmjs.com/) - Sistema de gestión de paquetes.
***

## Dependencias utilizadas 

* [React-bootstrap](https://react-bootstrap.netlify.app/) 

* [Firebase](https://console.firebase.google.com/u/0/project/morena-4f461/firestore/data/~2FProductos~2FkvQXfm1HDTo7fyYuhGEI)

* [react-router-dom](https://reactrouter.com/) 
***

## Versionado 📌

Usé [GitHub](https://github.com/) para el versionado. 
***

## Instalación 

git clone https://github.com/andrespujol/morena.git
cd morena
npm install 
npm start

## Estructura de la tienda 

# Header 

El header es fijo para facilitar la navegación, contiene:
* Logo: se muestra fijo en el header y su vinculo lleva al home(route:'/')
Un navBar con los siguientes vínculos: 
* Productos: muestra las diferentes categorías de los productos. 
* Sobre nosotros: contiene la información del emprendimiento. 
* Contacto: contiene accesos directos a instagram de la tienda y a whatsapp. Además muestra la ubicación de la tienda e información con los días y horarios de atención.

# Body 

Es el lugar donde se despliega el contenido de las diferentes secciones. Su ruta es ' / ' y muestra el catálogo completo de la tienda.

# Footer

Al igual que el header, es persistente a lo largo de toda la navegación a través de las diferentes secciones. Muestra las redes sociales y un acceso directo a mi linkedin.

# Navegación 

El contenido que se muestra por default es la tienda con el catálogo completo (al cual también se puede acceder por los métodos mencionados anteriormente).

# Menú de categorías

El catálogo muestra en su parte superior, un menú de navegación para filtrar los productos (ítems) por categorías.

# Ítem

Cada producto se presenta en un bloque que contiene: título, imagen y precio. Se puede acceder al detalle del ítem al clickear el título o la imagen.

# Detalle del ítem

En esta sección se filtra el catálogo por el id del producto que se desea ver. Se muestra: imagen en un mayor tamaño, título, descripción, precio, stock disponible, botones para seleccionar cantidad y botón para agregar al carrito.
Una vez presionado el botón "confirmar", es reemplazado por otro botón que dice: "terminar compra".

# Carrito

Esta sección esta dividida en 2 bloques: el detalle y el total con los botones para finalizar compra.

El detalle incluye: título, precio, cantidad, subtotal y un botón "borrar" para eliminar el ítem del carrito.
El otro bloque muestra el total de la compra, junto con 2 botones: "Confirmar compra" y "Vaciar carrito".

# Formulario de compra y modal de compra realizada

En el formulario se presentan los campos para que el usuario ingrese sus datos personales. Si el ingreso de todos los datos es correcto, se muestra un modal "Gracias por tu compra!" con el Número de orden y al aceptar te llevara al home. Si faltan campos por completar, un modal lo notificara.

## Autor ✒️


* **Andrés Pujol** - [Linkedin](https://www.linkedin.com/in/andrespujol/)
