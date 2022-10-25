
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserReporitory extends Repository<User>{

    async createUser(CreateUserDto: CreateUserDto) :Promise<User> {

        const {username, password} = CreateUserDto;

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt)

        console.log("salt", salt);
        console.log("hashPassword",hashPassword);
        
        const user = this.create({
            username,
            password: hashPassword
        })

        try {
               await this.save(user)  
        } catch(error) {
            if(error.code === '23505'){ // code is string
                throw new ConflictException('username already exist')
            }else {
                throw new InternalServerErrorException()
            }
        }
   
        return user
    }

}