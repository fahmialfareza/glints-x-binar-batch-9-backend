# Install sequelize-cli
npm install -g sequelize-cli

# Make npm project
npm init

# Install all packages that we need
npm install --save sequelize sequelize-cli mysql2 express nodemon body-parser express-validator multer

# Edit file config/config.json
edit file config.json

# Create db
sequelize db:create

# Make model
sequelize model:generate --name Book --attributes isbn:string,name:string,year:string,author:string,description:text,image:string

# Migrate model
sequelize db:migrate

# Make seed
equelize seed:generate --name add-book-data

# Seed to model
sequelize db:seed:all

# Create index.js

# Modifying index.js
