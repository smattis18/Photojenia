module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    screen_name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      types: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
