import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOptionDto {
  @IsNumber()
  @IsNotEmpty()
  questionId: number;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsBoolean()
  @IsNotEmpty()
  isCorrect: boolean;
}
