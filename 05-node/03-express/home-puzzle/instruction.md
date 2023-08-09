1) create a site with a server. get the title (h1), and description from of the site from the server.
2) use postman to get the data form the server //https://www.postman.com/
3) get title from the user and send it to the server. When the site reloads the title will come from the server


# terminal commands 
create config.json -> NOTE Check "main": "index.js" and change it to the server.ts or the name of your script + ts
1. npm init -y

install typescript dependencies + nodeTS dependencies
2. npm i -D typescript nodemon ts-node

install tsconfig.json
3. npx tsc --init

add express dependencies to package.json (I installed both will need to test again in the next project for now install both [if you install only 4 it will run in node but the import wont work])
4. npm install express
5. npm i --save-dev @types/express

add this manually to your config.json file in the script section -> NOTE your "dev" + "start" needs to be in the right path with the correct file name.
6.   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "dev": "nodemon server.ts",
    "start": "node dist/server.js",
    "update": "npm install -g npm-check-updates && ncu -u && npm install"
  },

run your script - after you write your script.ts
6. npm run dev

