module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
      comment_body: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });

    Comment.associate = function(models) {
      
      Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      });

    };

    return Comment;
  };
  