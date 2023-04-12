import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
