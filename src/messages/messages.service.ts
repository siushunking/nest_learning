import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository) {}

    findOne(){
        this.messagesRepo.findOne()
    }
}
