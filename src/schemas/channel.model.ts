import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose";

export type ChannelDocument = mongoose.HydratedDocument<Channel>;

@Schema({
  autoCreate: true,
  _id: true
})
export class Channel {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
  members: string[];

  @Prop({ required: true, type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
  admins: string[];

  @Prop({})
  imageUrl: string;

  @Prop({
    default: new Date()
  })
  createdAt: Date

  @Prop({
    default: new Date()
  })
  updatedAt: Date
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);