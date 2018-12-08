module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return User;
};