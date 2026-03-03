import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database.ts';

class Users extends Model {
    public id!: number;
    public name!: string;
    public secondName!: string;
    public login!: string;
    public email!: string;
    public password!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Users.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        secondName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'Users'
    }
)

export default Users;