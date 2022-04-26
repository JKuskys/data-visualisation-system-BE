import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsNotEmpty()
  public password: string;
}
