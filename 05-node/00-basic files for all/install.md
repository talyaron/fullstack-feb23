create server.ts file

npm init -y

create tsconfig.json file:

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

in the packge.json file add to the scripts:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "dev": "nodemon server.ts",
    "start": "node dist/server.js"
  },

npx tsc

node dist/server.js

npm i -D typescript nodemon ts-node //or// npm install --save-d  

npm run dev


if you get the comment:"'nodemon' is not recognized as an internal or external command" 
you need to write the commend in line 32 again