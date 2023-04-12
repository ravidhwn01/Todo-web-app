import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  @IsNotEmpty()
  todoListId: number;

  @IsString()
  @IsNotEmpty()
  taskName: string;

  @IsString()
  @IsNotEmpty()
  taskDescription: string;
}
