import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class loginDto {
  @ApiProperty({
    description: 'Email of the user',
    example: 'john@example.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password of the user',
    example: 'Test@123',
    required: true,
  })
  @IsNotEmpty()
  @Length(8, 30)
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, {
    message:
      'Password must contain at least one letter, one number and one special character',
  })
  password: string;
}
