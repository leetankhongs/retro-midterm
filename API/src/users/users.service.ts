import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
const bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { };

    async findOne(email: String): Promise<User> {
        return await this.userModel.findOne({email: email}).exec();
    }

    async createNewUser(firstName: String, lastName: String, email: String, password: String, phone: String): Promise<String> {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);

        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = new this.userModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword,
            phone: phone
        });

        const result = await newUser.save();
        return result._id;
    }
}
