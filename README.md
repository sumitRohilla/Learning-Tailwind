# Learning - Tailwind

<a href="https://sumitrohilla.github.io/Learning-Tailwind/"><img src="https://img.shields.io/badge/-Website%20Link-4285F4?style=for-the-badge&logo=Google-Chrome&logoColor=white"/></a>

## FRONT-END Based Project :

• This is a learning project to improve understanding of Tailwind CSS.\
• This website uses both Grid layout and Flex Layout to create a basic website template. \
• This also uses media query for making website responsive on multiple screens.
• This is created using HTML, CSS, JavaScript and TailwindCSS languages.

## Install Tailwind CSS :

• Install tailwindcss via npm, and create your tailwind.config.js file.

```
npm install -D tailwindcss
npx tailwindcss init
```

## Configure your template paths :

• Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}
```

## Add the Tailwind directives to your CSS :

• Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start the Tailwind CLI build process :

• Run the CLI tool to scan your template files for classes and build your CSS.

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

• OR Create custom script in package.json file

```
"build": "tailwindcss -i ./style.css -o ./css/main.css",
"watch": "tailwindcss -i ./style.css -o ./css/main.css --watch"
```

• Use below COMMOND to start build process

```
npm run build / npm build watch
```

## FRONT-END :

FRONT-END development is the development of those elements of a website that the customer sees and interacts with directly.

## HTML :

• HyperText Markup Language is the standard markup language used to create web pages.\
• It is written in the form of HTML elments consisting of tag enclosed in angles brackets.

## CSS :

• Cascading Style Sheets is a style sheet language used for describing the look and formatting of a document written in a markup language.

## JavaScript :

• JavaScript is a client scripting language which is used for creating web pages.\
• It also allows to make webpage to be dynamic and add special effects.
