import { EntityRepository, Repository } from "typeorm";
import { CreateMessageDto } from "./dto/create-message";
import { Message } from "./message.entity";


@EntityRepository(Message)
export class MessagesRepository extends Repository<Message> {

    async getmessage(): Promise<Message[]> {
        const messages = this.find()
        return messages
    }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
        const {title, description} = createMessageDto;
        const message = this.create({
            title: title,
            description: description
        })
        await this.save(message)
        return message
    }
}