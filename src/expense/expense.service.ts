import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model } from 'mongoose';
  import { Expense } from './expense.model';
  

  @Injectable()
  export class ExpenseService {
  
    constructor(
      @InjectModel('Expense') private readonly expenseModel: Model<Expense>,
    ) {}

    async saveExpense(
      signedInUserID:any,
        cash: any,
        category : any,
        account: any,
        transaction:any,
        date:any
    ): Promise<any> {
      try {
          const newExpense = new this.expenseModel({
            signedInUserID,
            cash,
            category,
            account,
            transaction,
            date
          });
  
          const result = await newExpense.save();
          // return {...newGoldenVideo };
          console.log(result);
          return result;
    

      } catch (error) {
        console.log('error', error);
        throw [404, 'something went wrong'];
      }
    }

    async getAllExpense(): Promise<any> {
        
        try {
          const gettingAllExpense = await this.expenseModel.find({}).exec();
          if (gettingAllExpense.length <= 0) {
            throw [404, 'No video found'];
          }
          console.log(gettingAllExpense)
    
          return gettingAllExpense;
        } catch (error) {
          console.log('error', error);
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: 'No video found',
            },
            HttpStatus.NOT_FOUND,
          );
        }
      }
  
  }