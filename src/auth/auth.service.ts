import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model } from 'mongoose';
  import { Auth } from './auth.model';
  
  // const jwt = require('jsonwebtoken');
  const bcrypt = require('bcryptjs');
  
  @Injectable()
  export class AuthService {
    products: Auth[] = [];
    constructor(
      @InjectModel('Auth') private readonly authModel: Model<Auth>
    ) {}
  
    async signin(email:any, password:any) {
      console.log('sign in');
      try {
        console.log('signin body', email, password);
  
        // const getUser = await read.getUserLogin(req)
        try {
          const userExist = await this.authModel.findOne({ email: email });
          if (!userExist) {
            throw new NotFoundException('User does not exist');
          }
  
          console.log(bcrypt.compareSync(password, userExist.password));
          console.log(!bcrypt.compareSync(password, userExist.password));
  
          if (!bcrypt.compareSync(password, userExist.password)) {
            console.log('Wrong password');
            throw new NotFoundException('Wrong Password');
          }

          const user = {
            userExist,
          };
          return { ...user, statusCode: 200 };
        } catch (error) {
          throw [404, error.message];
        }
      } catch (error) {
        console.log(error);
        throw [404, error.message];
      }
    }
  
    
  
    async saveUser(
        userName: any,
      email: any,
      password: any,
    ): Promise<any> {
     
  
      try {
        console.log('save admin new user');
        const uniqueMail = await this.authModel.findOne({ email: email });
        console.log(uniqueMail);
        if (!uniqueMail) {
          const bcryptPass = bcrypt.hashSync(password, 8);
          console.log('bcrypt pass', bcryptPass);
  
          const newAdminUser = new this.authModel({
            userName,
            email,
            password: bcryptPass,
          });
  
          const result = await newAdminUser.save();
          // return {...newGoldenVideo };
          console.log(result);
          return result;
        } else {
          // console.log("inside else")
          return 'User Already Exist';
        }
      } catch (error) {
        console.log('error', error);
        throw [404, 'something went wrong'];
      }
    }

    async getAllSignupAccounts(): Promise<any> {
        
      try {
        const gettingAllSigninUser = await this.authModel.find({}).exec();
        if (gettingAllSigninUser.length <= 0) {

          throw [404, 'No video found'];
        }
        console.log(gettingAllSigninUser)
  
        return gettingAllSigninUser;

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
  