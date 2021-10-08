'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    location: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
    bookId: {
      type: DataTypes.INTEGER
    },
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.hasMany(models.Review, { foreignKey: "spotId" })
  };
  return Spot;
};
