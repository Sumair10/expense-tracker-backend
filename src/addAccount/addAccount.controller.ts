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
 import { AddAccountService } from './addAccount.service';
  

  @Controller('account')
  export class AddAccountController {
    constructor(private readonly addAccountService: AddAccountService) {}
  
    @Post()
    async addAccount(
       
      @Body('accountName') accountName: any,
      @Body('cash') cash: any
    ) : Promise<any>{
      try {
        const res = await this.addAccountService.addAccount(accountName, cash);
        return { result: res };
      } catch (error) {
        return error;
      }
    }

    @Get()
  getAllAccounts(): Promise<any> {
    return this.addAccountService.getAllAccounts();
  }

  @Patch(':id')
  async updateStudent(
    @Param('id') accountID: any,
    @Body('cash') cash: any,
  ): Promise<any> {
    return await this.addAccountService.updateAddAccount(
      accountID,
      cash
    );
  }
  
  @Get(':id')
  async getSingleAccount(
    @Param('id') accountID: string,
  ): Promise<any> {
    return await this.addAccountService.getSingleAccount(accountID);
  }






  }
  