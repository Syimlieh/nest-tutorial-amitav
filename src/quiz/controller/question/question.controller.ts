import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from 'src/quiz/dto/question.dto';
import { QuestionEntity } from 'src/quiz/entity/question.entity';
import { QuestionService } from 'src/quiz/service/question/question.service';
import { QuizService } from 'src/quiz/service/quiz/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createQuestion(
    @Body() questionPayload: CreateQuestionDto,
  ): Promise<QuestionEntity> {
    const checkQuiz = await this.quizService.fetchQuizById(
      questionPayload.quizId,
    );
    return this.questionService.createQuestion(questionPayload, checkQuiz);
  }
}
