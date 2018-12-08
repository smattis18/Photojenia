module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
      post_header: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
    });
    return Post;
  };
  