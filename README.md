# Alfajores Piquillín
## Un proyecto de Salomé Kuitca para el curso de Reactjs para Coderhouse.
Es un e-commerce para un emprendimiento local de venta de alfajores, bombones y delicatessen.

## Links
ACA VA EL LINK DE LA PAGINA SUBIDA

## Organización del código
Los componentes están organizados por carpetas correspondiendo a la parte del programa que responden. En ese sentido, se encuentran divididos en 5 grandes grupos (Cart, Categorías, Checkout, global, Product), cada uno de estos contiene:
* un archivo .css donde están los estilos asignados para sus componentes. Se decidió utilizar un archivo .css por cada grupo de componentes debido a que la mayoría de los estilos son dados con Bootstrap, por lo que el código de CSS es mínimo.
* Los componentes que los conforman. Se tratan de componentes de función y no de clase.

## npm
Para este proyecto es necesario utilizar npm. La versión utilizada es la 12.18.4
Para poder ejecutar el programa se debe utilizar el comando `npm start`.


## React
Se utiliza la versión de Reactjs 17.0.1. 
Se importan los siguientes hooks para el funcionamiento del programa:
    * useState
    * useEffect
    * useContext

## React-router-dom
Para el funcionamiento de las rutas y navegación del programa, se implementó React-router-dom versión 5.2.0. Se importó lo siguiente:
    * Link
    * useHistory
    * useParams
  
## Firebase
Se utiliza Firestore como repositorio para la base de datos. Consta de dos colecciones: productos y ventas.

## Estilos
### Bootstrap
Los estilos de CSS de esta página son principalmente hechos con Bootstrap 4.6.x importado mediante CDN. 
Componentes que se utilizan: 
  * Navbar
  * Cards
  * Forms
  * Inputs
  * Buttons
  * Badge
  * Sistema de Layouts
Guía de colores utilizados: warning (botones principales), success (botón pagar), light (botones carrito), dark (botones cards)
### CSS3
Algunos de los estilos fueron moldeados con CSS3 a través de selectores de clases. Para seguir la coherencia de las clases de bootstrap, las clases son denominadas con dash-case en vez de camelCase. 
  
## camelCase
El programa utiliza mayormente camelCase, a excepción de las clases utilizadas en CSS3 por los motivos ya explicados.

