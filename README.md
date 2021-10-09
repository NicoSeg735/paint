# Technical test for Carestino

This project was developed with React JS y Styled Components.
You can run this app online in https://codesandbox.io/s/github/NicoSeg735/paint

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Requirements

La red consiste en pequeñas celdas cuadradas. Debe haber 100 celdas horizontales.

El número de filas no debe exceder los límites de la ventana. Es decir, la pantalla debe estar llena de celdas, pero no deben existir barras de desplazamiento, ya que todas las celdas caben en la ventana.

Cuando una celda sea clickeada, la misma debe “activarse” cambiando de color. Al volver a clickear la celda, la misma debe desactivarse y removerse el color.

Cuando una celda sea clickeada con el botón derecho del mouse, debería aparecer una ventana emergente donde usted pueda elegir un color. Se requiere un mínimo de 5 opciones de colores. El color elegido se convierte en el color por defecto para cada celda activada al dibujar.

● El selector de color aparece (fadeIn) cuando usted presione el botón derecho del mouse en la posición que se encuentre el cursor.
● El menú contextual específico del navegador no aparece al hacer clic con el botón derecho del mouse.
● El selector de color desaparece (fadeOut) cuando el cursor se desplace fuera del mismo, o cuando un color sea seleccionado.

Para facilitar el dibujo de imágenes, debe ser posible hacerlo arrastrando el cursor del mouse. Cuando una celda sea clickeada, se activa dicha función.

Todas las celdas por las que pase el cursor deben seleccionarse. Cuando se suelta el mouse, se desactiva la función de arrastre, y todas las celdas por las que pase el cursor ya no se verán modificadas.

Tener en cuenta que, de todas formas, debe continuar siendo posible clickear cada celda individualmente.
