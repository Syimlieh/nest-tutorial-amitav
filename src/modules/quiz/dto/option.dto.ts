import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOptionDto {
  @ApiProperty({
    description: 'Id of the question',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  questionId: number;

  @ApiProperty({
    description: 'Text of the option',
    example: 'Option 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    description: 'Is the option correct',
    example: true,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isCorrect: boolean;
}
