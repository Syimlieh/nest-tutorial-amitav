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
import { QuizEntity } from 'src/quiz/entity/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get()
  async findAll(): Promise<{ data: QuizEntity[]; totalCount: number }> {
    const { entities: data, totalCount } =
      await this.quizService.fetchAllQuiz();
    console.log(totalCount);
    return { data, totalCount };
  }

  @Get('/:id')
  async getQuizById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<QuizEntity> {
    console.log(id);
    return await this.quizService.fetchQuizById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createQuiz: createQuizDto) {
    return this.quizService.create(createQuiz);
  }
}
