import {
    Controller,
    Post,
    Body,
    Req,
    Get,
    Patch,
    Query,
    Delete,
    Param,
  } from '@nestjs/common';
import { ExpenseService } from './expense.service';  

  @Controller('expense')
  export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService) {}
  
    @Post()
    async saveExpense(
       
      @Body('cash') cash: any,
      @Body('category') category: any,
      @Body('account') account: any,
      @Body('transaction') transaction: any,
      @Body('date') date:any
    ) : Promise<any>{
      try {
        const res = await this.expenseService.saveExpense(cash, category ,account,transaction , date);
        return { result: res };
      } catch (error) {
        return error;
      }
    }

    @Get()
    getAllExpense(): Promise<any> {
      return this.expenseService.getAllExpense();
    }
  

  
   
  }
  