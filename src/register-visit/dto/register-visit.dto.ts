import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterVisitDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  coordinates: [number, number];

  @IsNotEmpty()
  @IsString()
  personName: string;
}