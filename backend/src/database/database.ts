import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'qqq123',
    database: 'project',
    logging: false
});

export default sequelize;