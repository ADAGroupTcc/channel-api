import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health/health.controller';
import { localDbOptions, serverDbOptions } from './utils/option.connect';
import { ChannelModule } from './channel/channel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, process.env.IS_LOCAL_DATABASE ? localDbOptions : serverDbOptions),
    ChannelModule,
  ],
  controllers: [HealthController],
})
export class AppModule { }
