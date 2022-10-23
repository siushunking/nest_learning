import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMessageDto } from './dto/create-message';
import { MessagesRepository } from './message.repository';

@Injectable()
export class MessageService {
    constructor(@InjectRepository(MessagesRepository) private messageRepository: MessagesRepository ){}

    getAllMessage(){
        return this.messageRepository.getmessage()
    }
    
    createMessage(createMessageDto: CreateMessageDto){
        return this.messageRepository.createMessage(createMessageDto)
    }
}
