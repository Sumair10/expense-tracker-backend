import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model } from 'mongoose';
  import { AddAccount } from './addAccount.model';
  import { Auth } from 'src/auth/auth.model';
  

  @Injectable()
  export class AddAccountService {
  
    constructor(
      @InjectModel('AddAccount') private readonly addAccountModel: Model<AddAccount>,
    ) {}

    async addAccount(
      
        accountName: any,
      cash: any,
    ): Promise<any> {
      try {
          const newAccount = new this.addAccountModel({
       
            accountName,
            cash,
          });
  
          const result = await newAccount.save();
          // return {...newGoldenVideo };
          console.log(result);
          return result;
    

      } catch (error) {
        console.log('error', error);
        throw [404, 'something went wrong'];
      }
    }


    async getAllAccounts(): Promise<any> {
        
        try {
          const gettingAllAccounts = await this.addAccountModel.find({}).exec();
          if (gettingAllAccounts.length <= 0) {

            throw [404, 'No video found'];
          }
          console.log(gettingAllAccounts)
    
          return gettingAllAccounts;

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



        async updateAddAccount(
          accountID: any,
        cash: any,
        ): Promise<any> {
         
          try {
            const updatedAccount = await this.findAccount(accountID);
      
            if (cash) {
              updatedAccount.cash = cash;
            }
              updatedAccount.save();
            // return gettingSingleGoldenVideo
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



        async getSingleAccount(accountID: string): Promise<any> {
         
          try {
            const gettingSingleAccount = await this.findAccount(accountID);
      
            // return gettingSingleGoldenVideo
            return {
              id: gettingSingleAccount.id,
              accountName : gettingSingleAccount.accountName,
              cash: gettingSingleAccount.cash,
            };
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
      
        private async findAccount(id: string): Promise<any> {
          const account = await this.addAccountModel.findById(id);
      
          if (!account) {
            throw new NotFoundException('could not find video.');
          }
          return account;
        }
  }