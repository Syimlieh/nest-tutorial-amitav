import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from '../../service/question/question.service';
import { CreateQuestionDto } from '../../dto/question.dto';
import { QuestionEntity } from '../../entity/question.entity';
import { QuizService } from '../../service/quiz/quiz.service';

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
