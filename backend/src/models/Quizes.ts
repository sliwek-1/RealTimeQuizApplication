import { Model, DataTypes } from "sequelize";
import sequelize from "../database/database.ts";

class Quizes extends Model {
    public id!: number;
    public userId!: number;
    public title!: string;
    public description!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Quizes.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id"
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, 
    {
        sequelize,
        tableName: "Quizes"
    }
)

export default Quizes;