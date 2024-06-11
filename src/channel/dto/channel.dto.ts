import { Expose } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, IsUrl, Length, MinLength } from "class-validator";

export class ChannelRequestDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  description: string;

  @IsString({ message: 'Image URL must be a string' })
  @IsUrl({}, { message: 'Image URL must be a valid URL' })
  @Expose({ name: 'image_url' })
  @IsOptional()
  imageUrl: string;

  @IsArray()
  @IsNotEmpty({ message: 'Members are required' })
  @ArrayMinSize(4, { message: 'Members must have at least 4 members' })
  members: string[];

  @IsArray()
  @IsNotEmpty({ message: 'Admins are required' })
  @ArrayMinSize(4, { message: 'Admins must have at least 4 admin' })
  admins: string[];
}