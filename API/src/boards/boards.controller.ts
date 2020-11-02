
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    @Post()
    async addBoard(
        @Body('name') prodName: string) {
        const generatedId = await this.boardsService.insertBoard(prodName);
        
        return { id: generatedId };
    }

    @Delete(':id')
    deleteBoard(@Param('id') boardID: string) {
        this.boardsService.deleteBoard(boardID)
    }

    @Get()
    async getAllBoards() {
        return await this.boardsService.getAllBoard();
    }
}
