import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { QuestionEntity } from "src/quiz/entity/question.entity";
import { QuizEntity } from "src/quiz/entity/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'quiz',
  entities: [QuizEntity, QuestionEntity],
  synchronize: true, // Set This To false in Production. Might cause data loss
};
