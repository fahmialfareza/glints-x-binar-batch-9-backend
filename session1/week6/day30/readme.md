# instal global mocha
npm install -g mocha
or
sudo npm install -g mocha

# Install devPackage
npm install --save-dev mocha chai chai-http

# edit package.json
"scripts": {
  "test": "mocha ./tests/*.js --exit",
  "dev": "nodemon -r ./index.js"
}

# Use development (Postman)
npm run dev

# Use testing (Mocha)
npm test
