import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return ` get all messages`;
  }
  @Post()
  createMessages(@Body() createMessageDto: CreateMessageDto): string {
    // return ` Create messages`;
    // console.log(body);
    return `Name:${createMessageDto.name}`;
  }
  @Get('/:id')
  getMessage(@Param() id: string) {
    // return ` Create messages`;
    console.log(id);
  }
}
