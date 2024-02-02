import { IsNotEmpty, IsString } from 'class-validator';

export class createQuizDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
