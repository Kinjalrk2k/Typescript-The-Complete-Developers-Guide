# 09 Design Patterns with TypeScript

## Parcel Bundler

- A tool to help run Typescript in the browser

```sh
npm install -g parcel-bundler
```

- We'll have a single file called `index.html` which will have the HTML code. Inside this HTML file, we'll include a script file, `index.ts` file. Parcel will compile the `.ts` file into Javascript and then replace the script tag (in the build/dist filder)

## Type Defination file

- Whenever we write TypeScript codes, we're free to use JavaScript Libraries as much as we want to
- There's a one little caveat. Typescript checks type in the code. It need to know about the types of all the variables and functions. It Typescript doesn't have this information, then it cannot check our code
- JavaScript code doesn't have any idea of types. And as a result, TypeScript had no idea of the types present in our code.
- To solve this problem, TypeScript has a concept of Type defination files. Type defination files act as an adapter between the Typescript code that we write and the Javascript code in the libraries
- Sometimes type defination files are installed automatically with the libraries we install (example: axios). Or else, we'll need to install the type defination files manually
- Definitely types naming schema: `@types/{library name}`
