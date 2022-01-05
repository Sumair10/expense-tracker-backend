import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { ExpenseSchema } from './expense.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Expense', schema: ExpenseSchema }
  ])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule { }
