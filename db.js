// const Pool = require("pg").Pool
// require("dotenv").config()

// console.log("log just to push again")

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT
// }

// const proConfig = { 
//   connectionSting: process.env.DATABASE_URL //heroku addon
// }

// const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig)

// module.exports = pool;

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'gql_library',
    'postgres',
    '123456789aA_',
    {
      dialect: 'postgres',
      host: 'localhost'
    }
);
  
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const Book = sequelize.define('book', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  { tableName: 'book',
    timestamps: false
  }
);

const Author = sequelize.define('author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  { tableName: 'author',
    timestamps: false
  }
);

// Relations
Author.hasMany(Book);
Book.belongsTo(Author);

// sequelize.sync({ force:true })
// console.log("All models are syncronized successfully")

    
module.exports = sequelize;