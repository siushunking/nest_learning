import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signup')
    signUp(@Body() CreateUserDto: CreateUserDto): Promise<User>{
        return this.authService.signUp(CreateUserDto)
    }

    @Post('/signin')
    signIn(@Body() user): Promise<any>{
        return this.authService.signIn(user)
    }
}
