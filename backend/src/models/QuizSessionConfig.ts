import { Model, DataTypes } from "sequelize";
import sequelize from "../database/database.ts";

class QuizSessionConfig extends Model {
    public id!: number;
    public userId!: number;
    public quizSessionId!: number;
    public possibleWarnings!: number;
    public punishmentType!: string;
    public isAccountRequired!: boolean;
    public answerTime!: string;
    public examTime!: string;
    public passRate!: number;
    public examEndCondition!: string;
}

QuizSessionConfig.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id"
            }
        },
        quizSessionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "QuizSession",
                key: "id"
            }
        },
        possibleWarnings: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        punishmentType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAccountRequired: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        answerTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        examTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        passRate: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        examEndCondition: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "QuizSessionConfig"
    }
)

export default QuizSessionConfig;