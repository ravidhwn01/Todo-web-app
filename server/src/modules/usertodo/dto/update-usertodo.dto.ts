import { PartialType } from '@nestjs/mapped-types';
import { CreateUsertodoDto } from './create-usertodo.dto';

export class UpdateUsertodoDto extends PartialType(CreateUsertodoDto) {}
