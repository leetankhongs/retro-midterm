import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BoardDocument, Board } from './board.model'

@Injectable()
export class BoardsService {
    constructor(@InjectModel(Board.name) private readonly boardModel: Model<BoardDocument>) {}

    async getAllBoard(){
        const result = await this.boardModel.find().exec();
        return result;
    }

    async insertBoard(name: string){
        const newBoard = new this.boardModel({
            name,
            date: new Date(),
            url: "null"
        });
        const result = await newBoard.save();
        return result._id;
    }

    async deleteBoard(boardID: string){
        try {
            const result = await this.boardModel.deleteOne({_id: boardID}).exec();
        } catch (error) {
            console.log(error)
        }
    }
}
