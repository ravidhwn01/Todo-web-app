import { Module } from '@nestjs/common';
import { UsertodoService } from './usertodo.service';
import { UsertodoController } from './usertodo.controller';

@Module({
  controllers: [UsertodoController],
  providers: [UsertodoService]
})
export class UsertodoModule {}
