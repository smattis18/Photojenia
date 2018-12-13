module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define("Friend", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'beginTime',
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'nextTime',
      defaultValue: sequelize.literal('NOW()')
    }
  });
  return Friend;
};
