import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  mobile: string;
  @IsNotEmpty()
  @Length(8, 30)
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, {
    message:
      'Password must contain at least one letter, one number and one special character',
  })
  password: string;
}
