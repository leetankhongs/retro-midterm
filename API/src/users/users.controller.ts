import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service'
import { User} from './user.model'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createNewUser(
        @Body('firstName') prodFirstName: String,
        @Body('lastName') prodLastName: String,
        @Body('email') prodEmail: String,
        @Body('password') prodPassword: String,       
        @Body('phone') prodPhone: String) {

        return {id: await this.usersService.createNewUser(prodFirstName, prodLastName,prodEmail, prodPassword, prodPhone)};
    }

    @Get('/test')
    async test(@Body() user: any) {
        console.log(user)
    }

}
