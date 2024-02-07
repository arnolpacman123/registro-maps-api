import { IsNotEmpty, IsString } from "class-validator";

export class RegisterPersonDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}