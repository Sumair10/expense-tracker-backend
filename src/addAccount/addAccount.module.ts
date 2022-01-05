import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddAccountController } from './addAccount.controller';
import { AddAccountService } from './addAccount.service';
import { AddAccountSchema } from './addAccount.model';
import { AuthSchema } from 'src/auth/auth.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'AddAccount', schema: AddAccountSchema }
  ])],
  controllers: [AddAccountController],
  providers: [AddAccountService],
})
export class AddAccountModule { }
