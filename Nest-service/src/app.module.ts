import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv'
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        'dist/**/**.entity{.ts,.js}'
      ],
      synchronize: true,
    }),
    UsersModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
