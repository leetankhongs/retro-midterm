import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDocument, Task } from './task.model'

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {}

    async getAllTask(){
        const result = await this.taskModel.find().exec();
        return result;
    }

    async insertTask(type: Number, description: String, board: String){
        const newTask = new this.taskModel({
            type,
            description,
            board
        });
        const result = await newTask.save();
        return result._id;
    }

    async deleteTask(taskID: String){
        try {
            const result = await this.taskModel.deleteOne({_id: taskID}).exec();
        } catch (error) {
            console.log(error)
        }
    }

    async getTaskOfBoardID(boardID: String){
        const result = await this.taskModel.find({board: boardID}).exec();
        return result;
    }

    async getTaskOfBoardIDAndColumnType(boardID: String, columnType: Number){
        const result = await this.taskModel.find({board: boardID, type: columnType}).exec();
        return result;
    }

    
}
