import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from './board.model'
import { BoardsService } from './boards.service'
import { BoardsController } from './boards.controller';
@Module({
    imports: [MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }])],
    controllers: [BoardsController],
    providers: [BoardsService],
})
export class BoardsModule { }



