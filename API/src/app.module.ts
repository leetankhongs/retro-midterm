import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module'
import { ColumnsModule } from './columns/columns.module'
import {BoardsModule} from './boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BoardsModule,
    TasksModule,
    ColumnsModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.sb77c.mongodb.net/retrospective?retryWrites=true&w=majority'),
    AuthModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
