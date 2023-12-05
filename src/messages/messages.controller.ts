import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return ` get all messages`;
  }
  @Post()
  createMessages() {
    return ` Create messages`;
  }
  @Get('/:id')
  getMessage() {
    return ` Create messages`;
  }
}
