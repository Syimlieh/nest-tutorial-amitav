import { Module } from '@nestjs/common';
import { QuizService } from './service/quiz/quiz.service';
import { QuizController } from './controller/quiz/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controller/question/question.controller';
import { QuestionService } from './service/question/question.service';
import { QuizEntity } from './entity/quiz.entity';
import { QuestionEntity } from './entity/question.entity';
import { OptionController } from './controller/option/option.controller';
import { OptionService } from './service/option/option.service';
import { OptionEntity } from './entity/option.entity';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  providers: [QuizService, QuestionService, OptionService],
  imports: [
    TypeOrmModule.forFeature([QuizEntity, QuestionEntity, OptionEntity]),
  ],
})
export class QuizModule {}
