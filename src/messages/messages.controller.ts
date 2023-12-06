import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;
  constructor() {
    this.messageService = new MessagesService();
  }
  @Get()
  getMessages() {
    return this.messageService.findAll();
  }
  @Post()
  createMessages(@Body() createMessageDto: CreateMessageDto) {
    // return ` Create messages`;
    // console.log(body);
    // return `Name:${createMessageDto.name}`;
    return this.messageService.create(createMessageDto.name)
  }
  @Get('/:id')
  getMessage(@Param() id: string) {
    // return ` Create messages`;
    console.log(id);
  }
}
