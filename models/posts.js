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

    Post.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });

      Post.hasMany(models.Comment, {
        onDelete: "cascade"
      });
  
    };

    return Post;
  };
  