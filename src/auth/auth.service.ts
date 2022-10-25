import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserReporitory } from './user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (@InjectRepository(UserReporitory) 
    private userReporitory: UserReporitory,
    private jwtService: JwtService
    ){}

    async signUp(CreateUserDto: CreateUserDto): Promise<User> {
       return this.userReporitory.createUser(CreateUserDto)
    }

    async signIn(auth) : Promise<{accessToken: string}> {
        const {username, password} = auth;
        const user = await this.userReporitory.findOne({username})

        if(user && (bcrypt.compare(password, user.password))){
            const payload = {username};
            const accessToken: string = await this.jwtService.sign(payload)
            return {accessToken}
        }else {
            throw new UnauthorizedException("username or password is not correct") 
        }
    }


}
