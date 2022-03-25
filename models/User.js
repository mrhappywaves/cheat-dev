const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bycrpt');
const sequelize = require ('../config/connection');
const { Z_DEFAULT_STRATEGY } = require('zlib');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 20],
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bcrypt.hash(user.password, salt);
                return newUser;
            }
        },
        sequelize,
        modelName: 'user'
    }
);

module.exports = User;