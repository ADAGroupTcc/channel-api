import { Body, Controller, Post } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelRequestDto } from './dto';

@Controller('v1/channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) { }

  @Post()
  async createChannel(@Body() channel: ChannelRequestDto) {
    return this.channelService.createChannel(channel);
  }
}
