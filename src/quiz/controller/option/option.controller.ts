import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from 'src/quiz/dto/option.dto';
import { OptionService } from 'src/quiz/service/option/option.service';
import { QuestionService } from 'src/quiz/service/question/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}
  @Post('')
  @UsePipes(new ValidationPipe())
  async createOption(@Body() option: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      option.questionId,
    );
    if (!question) {
      throw new Error('Question not found');
    }
    return await this.optionService.createOption(option, question);
  }
}
