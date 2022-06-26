Here you will see two main files:
- lit-web-comp-builder
- main_app

Firstly, **lit-web-comp-builder** is where we will build the web components with the help of **lit-element**.
To run the project;
1. Please cd into it
2. `npm i`
3. `npm run serve`
4. On the browser, go to http://localhost:8000/
5. Then, you will be able to see the **my-element** web component example, which counts the times user clicks the btn

To transform the **my-element** to a minified bundle, so that we can move it to Gatsby project; simply follow the steps below:
1. `npm run docs:build`
2. Then, cd into docs folder inside the **lit-web-comp-builder** folder
3. Inside the docs folder, you should see **my-element.bundled.js** file, which you can now move it to Gatsby project and it should work

Secondly, **main_app** is the Gatsby project, which will be our main place where we build the project.
To run the project:
1. Please cd into it
2. `npm i`
3. `npm run develop`
4. On the browser please go to http://localhost:8000/
