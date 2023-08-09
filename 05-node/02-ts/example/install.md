create server.ts

npm init -y

npm i -D typescript nodemon ts-node

create tsconfig.json

{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist"
    },
    "lib": ["es2015"]
  }

in packge.json:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "dev": "nodemon server.ts",
    "start": "node dist/server.js"
  },



