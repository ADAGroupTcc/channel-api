import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ValidationError } from 'class-validator';
import { Channel } from 'diagnostics_channel';
import { Model } from 'mongoose';
import { ChannelDocument } from 'src/schemas/channel.model';
import { ChannelRequestDto } from './dto';

@Injectable()
export class ChannelService {
  constructor(@InjectModel(Channel.name) private channelModel: Model<ChannelDocument>) { }

  async createChannel(channel: ChannelRequestDto) {
    try {
      var response = await this.channelModel.create(channel);
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error._message);
      }
    }

    return response;
  }
}
