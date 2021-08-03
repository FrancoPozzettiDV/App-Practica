# App-Practica [es]
Primeros ejercicios realizados en React Native. 

Son un conjunto de funcionalidades con el objetivo de practicar la creación de componentes de una aplicación.

### Proyecto para fines educativos
**Instituto** : [Escuela Da Vinci](https://www.davinci.edu.ar)
**Profesor** : [Christian Dario Nievas](https://www.github.com/CDNievas)

## Requisitos

Para utilizar y verificar el funcionamiento de la App se necesita: [Expo](https://expo.io/) y [NodeJS](https://nodejs.org/es/)

## Librerías

Utilizando el Node Package Manager (npm), instalar las siguientes librerías o dependencias:
 - Expo 
 - Native-Base
 - React Navigation

## Uso

1. Abrir la consola de comandos (CMD) e instalar Expo: 
```bash
npm install -g expo-cli
```
2. Crear un nuevo proyecto expo y elegir blank como template:
```bash
cd desktop
expo init ejemplo
```
3. Entrar a la carpeta del proyecto e instalar el resto de librerias: 
```bash
cd ejemplo
npm install native-base --save
expo install expo-font 
expo install expo-app-loading
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo install @react-navigation/native @react-navigation/stack
```

4. Copiar los archivos y pegarlos en la carpeta del proyecto. Una vez listo, ejecutar el proyecto:
```bash
npm start
```

## Ejercicios

La aplicación incluye las siguientes funcionalidades:

1. **Saludador**: El usuario ingresa su nombre y, al presionar un botón, devuelve una respuesta junto con el valor ingresado.
2. **Calculadora**: El usuario ingresa el primer numero, el segundo numero, y luego elige que operación quiere realizar presionando un botón y la App devuelve el resultado.
3. **Agenda**: La App muestra datos provenientes de un .JSON
4. **Frases**: El usuario presiona un botón, la App se comunica con una API de frases y devuelve al usuario la frase junto al autor.
5. **Giphy**: El usuario escribe el gif que quiere buscar, la App se comunica con la API de giphy y devuelve los primeros 10 resultados.

Para ingresar al ejercicio 4 y 5, se debe ingresar un nombre en la pantalla principal. De esta forma, se puede observar como se lleva un dato desde una sección a otra.


# App-Practice [en]
First exercices made in React Native. 

They are a set of functionalities with the objective of practicing the creation of components of an app.

### Project made for educational purposes
**Institute** : [Da Vinci School](https://www.davinci.edu.ar)
**Professor** : [Christian Dario Nievas](https://www.github.com/CDNievas)

## Requirements

To use and verify the functionality of the App you need: [Expo](https://expo.io/) and [NodeJS](https://nodejs.org/en/)

## Libraries

Using the Node Package Manager (npm), install the following libraries or dependencies:
 - Expo 
 - Native-Base
 - React Navigation

## Usage

1. Open the console command (CMD) and install Expo: 
```bash
npm install -g expo-cli
```
2. Create a new expo project and choose blank as template:
```bash
cd desktop
expo init ejemplo
```
3. Enter the project folder and install the rest of the libraries: 
```bash
cd ejemplo
npm install native-base --save
expo install expo-font 
expo install expo-app-loading
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo install @react-navigation/native @react-navigation/stack
```

4. Copy the files and paste them into the project folder. Once ready, run the project:
```bash
npm start
```

## Exercises

The application includes the following functionalities:

1. **Greeter**: The user enters their name and, upon pressing a button, a response is returned along with the value entered.
2. **Calculator**: The user enters the first number, the second number, and then chooses which operation to perform by pressing a button and the App returns the result.
3. **Contact list**: The App displays data from a .JSON
4. **Quotes**: The user presses a button, the App communicates with a quote API and returns the quote along with the author to the user.
5. **Giphy**: The user types the gif they want to search for, the App communicates with the giphy API and returns the first 10 results. 

To enter exercise 4 and 5, a name must be entered in the main screen. Doing this, you can see how data is carried from one section to another.
