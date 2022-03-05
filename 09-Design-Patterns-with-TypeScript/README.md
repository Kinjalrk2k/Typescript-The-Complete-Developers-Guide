# 09 Design Patterns with TypeScript

## Parcel Bundler

- A tool to help run Typescript in the browser

```sh
npm install -g parcel-bundler
```

- We'll have a single file called `index.html` which will have the HTML code. Inside this HTML file, we'll include a script file, `index.ts` file. Parcel will compile the `.ts` file into Javascript and then replace the script tag (in the build/dist filder)
