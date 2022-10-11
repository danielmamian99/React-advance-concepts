# React Advance Concepts

Este proyecto esta creado para implementar técnicas avanzadas sobre el manejo de rutas, y diseño de componentes en react.

Para iniciar usar:

yarn install
yarn start
## Rutas

Las rutas se implementaron con React Router Dom v6
La idea del proyecto es aplicar Lazy Load por componente y por módulo

## Patrones de componentes

### Compound Component Pattern

Los componentes compuestos ayudan a construir APIs más expresivas y flexibles para compartir el estado y la lógica dentro de los componentes mediante el uso del patrón HOC y Context API

### Extensible Styles
git checkout component-extend-styles

Este patron sirve para extender la funcionalidad de nuestro componente añadiendo la posibilidad de interpretar clases de CSS y/o estilos en línea (inline styles)

### Control Props
git checkout component-control-props

Este patron se basa en propiedades de control que le permiten saber a los consumidores de nuestros componentes en que momento cambia, y también posibilita establecer los valores del estado del componente. O visto de otra forma, nos da el poder de decidir si queremos que el componente maneje el estado por defecto o si queremos manejarlo nosotros mismos.