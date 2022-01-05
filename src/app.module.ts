import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddAccountModule } from './addAccount/addAccount.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExpenseModule } from './expense/expense.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sumair:sumair2468@cluster0.ndyfq.mongodb.net/ExpenseTracker?retryWrites=true&w=majority'),
  AuthModule,
  AddAccountModule,
  ExpenseModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
