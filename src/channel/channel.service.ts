import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Channel } from 'diagnostics_channel';
import { Model } from 'mongoose';
import { ChannelDocument } from 'src/schemas/channel.model';

@Injectable()
export class ChannelService {
  constructor(@InjectModel(Channel.name) private channelModel: Model<ChannelDocument>) { }
}
