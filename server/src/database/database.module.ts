import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'src/schemas/user-schema';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 6000,
      models: [UserModel],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
