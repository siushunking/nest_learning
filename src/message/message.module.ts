import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageController } from './message.controller';
import { MessagesRepository } from './message.repository';
import { MessageService } from './message.service';

@Module({
    imports: [TypeOrmModule.forFeature([MessagesRepository])],
    controllers: [MessageController],
    providers:[MessageService]
})
export class MessageModule {}
