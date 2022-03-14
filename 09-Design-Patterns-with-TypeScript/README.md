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
- Type defination files have an extension as: `.d.ts`
- The type definations file will only contain the type declaration of objects, functions etc and not actual code
- It can be used as a part of documentation

## Notes

```ts
location: {
  lat: number;
  lng: number;
}
```

- This is a type defination. It doesn'te create the object automatically. `location` is still `undefined`
- When we just `export` we get it as an object in other files where we import. `export default` exports just a specific variable. In TypeScript we mostly don't use `export default`
- We can use type definations for not only npm packages, but also for the libraries through `script` tags

```ts
addMarkar(mappable: User | Company): void {
```

- Here you can use only the properties which are common between `User` and `Company` objects. We are not allowed to use other properties
- To set up direcr dependency or in other works make sure if a class satisfies all the required properties of the interface, simply implement the interface

```ts
export class User implements Mappable {
```
