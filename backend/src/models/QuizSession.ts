import { Model, DataTypes } from "sequelize";
import sequelize from "../database/database.ts";

class QuizSession extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: string;
    public userId!: number;
    public quizId!: number;
    public sessionConfigId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

QuizSession.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id"
            }
        },
        quizId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Quizes",
                key: "id"
            }
        },
        sessionConfigId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "QuizSessionConfig",
                key: "id"
            }
        }
    }, 
    {
        sequelize,
        tableName: "QuizSession"
    }
)

export default QuizSession;