
import { Controller, Get, Post, Body, Delete, Param,Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    async addTask(
        @Body('type') prodName: Number,
        @Body('description') prodDesc: string,
        @Body('board') prodBoard: string) {
        const generatedId = await this.tasksService.insertTask(
            prodName,
            prodDesc,
            prodBoard
            );
        return { id: generatedId };
    }

    @Delete(':id')
    deleteTask(@Param('id') taskID: string) {
        this.tasksService.deleteTask(taskID)
    }

    @Get()
    async getAllTasks() {
        return await this.tasksService.getAllTask();
    }

    @Get('/board')
    async getTaskOfBoardID(@Query('id') boardID: string) {
        return await this.tasksService.getTaskOfBoardID(boardID);
    }
}
