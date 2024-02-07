import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class createQuizDto {
  @ApiProperty({
    description: 'Add a new quiz',
    example: 'Quiz Name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
