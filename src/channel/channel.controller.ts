import { Controller } from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('v1/channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) { }
}
