import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message';
import { Message } from './message.entity';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService) {}

    @Post()
    createMessage(@Body() createMessage: CreateMessageDto): Promise<Message>{
        return this.messageService.createMessage(createMessage)
    }

    @Get()
    getAllmessage(): Promise<Message[]> {
        return this.messageService.getAllMessage()
    }

}
