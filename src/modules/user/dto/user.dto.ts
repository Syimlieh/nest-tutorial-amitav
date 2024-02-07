import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class createUserDto {
  @ApiProperty({
    description: 'Name of the user',
    example: 'John Smith',
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email of the user',
    example: 'john@example.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Mobile number of the user',
    example: '9876543210',
    required: true,
  })
  @IsNotEmpty()
  mobile: string;

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
