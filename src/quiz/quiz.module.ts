import { Module } from '@nestjs/common';
import { QuizService } from './service/quiz/quiz.service';
import { QuizController } from './controller/quiz/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controller/question/question.controller';
import { QuestionService } from './service/question/question.service';
import { QuizEntity } from './entity/quiz.entity';
import { QuestionEntity } from './entity/question.entity';

@Module({
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
  imports: [TypeOrmModule.forFeature([QuizEntity, QuestionEntity])],
})
export class QuizModule {}
