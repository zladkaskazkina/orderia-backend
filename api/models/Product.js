const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Product = sequelize.define('Product', {
  // Model attributes are defined here
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.BLOB 
  },
  available: {
    type:DataTypes.BOOLEAN
  },
  description: {
    type: DataTypes.STRING
  },
  ingredients: {
    type: DataTypes.STRING
  },
  stock: {
    type: DataTypes.INTEGER 
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false 
  },
  weight: {
    type: DataTypes.DECIMAL 
  },
  ean: {
    type: DataTypes.STRING(50)
  }

}, {
  // Other model options go here
});
Product.prototype.toJSON = function () {
//   const values = Object.assign({}, this.get());

//   delete values.password;

//   return values;
};

module.exports = Product;