module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define("Friend", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Friend;
};