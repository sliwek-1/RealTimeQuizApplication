import Quizes from "./Quizes.ts";
import Users from "./User.ts";
import QuizSession from "./QuizSession.ts";
import QuizSessionConfig from "./QuizSessionConfig.ts";

Users.hasMany(Quizes, {foreignKey: 'userId', as: 'quizes'});
Quizes.belongsTo(Users, {foreignKey: 'userId', as: 'user'});

Users.hasMany(QuizSession, {foreignKey: 'userId', as: 'quizSessions'});
QuizSession.belongsTo(Users, {foreignKey: 'userId', as: 'user'});

QuizSession.belongsTo(Quizes, {foreignKey: 'quizId'});
Quizes.hasMany(QuizSession, {foreignKey: 'quizId'});

Users.hasMany(QuizSessionConfig, {foreignKey: 'userId', as: 'quizSessionConfigs'});
QuizSessionConfig.belongsTo(Users, {foreignKey: 'userId', as: 'users'});

QuizSessionConfig.belongsTo(QuizSession, {foreignKey: 'quizSessionId'});
QuizSession.belongsTo(QuizSessionConfig, {foreignKey: 'sessionConfigId'});

export {Quizes, Users, QuizSession, QuizSessionConfig}