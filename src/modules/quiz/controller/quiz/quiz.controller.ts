import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createQuizDto } from '../../dto/quiz.dto';
import { QuizService } from '../../service/quiz/quiz.service';
import { QuizEntity } from '../../entity/quiz.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('quiz')
@ApiTags('Quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createQuiz: createQuizDto) {
    return this.quizService.create(createQuiz);
  }

  @Get('')
  async findAllQuiz(): Promise<[QuizEntity[], number]> {
    return await this.quizService.fetchAllQuiz();
  }

  @Get('/:id')
  async getQuizById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<QuizEntity> {
    return await this.quizService.fetchQuizById(id);
  }
}
