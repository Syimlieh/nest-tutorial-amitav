import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'Add New Question',
    example: 'Question',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  question: string;

  @ApiProperty({
    description: 'quiz id',
    example: '1',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  quizId: number;
}
