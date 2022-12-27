//we will use global pipeline to transform our data way we needed from stringify json to the way we want it

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//using global pipeline validation (class-validator)
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  hash: string;
}
