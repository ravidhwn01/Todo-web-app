import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUsertodoDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  todoListId: number;
}
