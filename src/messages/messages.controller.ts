import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  // messageService: MessagesService;
  constructor(public messageService: MessagesService) {
    // this.messageService = new MessagesService();
  }
  @Get()
  getMessages() {
    return this.messageService.findAll();
  }
  @Post()
  createMessages(@Body() createMessageDto: CreateMessageDto): string {
    // return ` Create messages`;
    // console.log(body);
    return `Name:${createMessageDto.name}`;
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    // return ` Create messages`;
    const message = await this.messageService.findOne(id);
    if (!message) {
      return new NotFoundException('It can not be visible');
    }
    return message;
  }
}
