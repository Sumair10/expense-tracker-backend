import * as mongoose from 'mongoose';

export const AddAccountSchema = new mongoose.Schema({
  signedInUserID :{type : String},
    accountName:{ type: String },
  cash: { type: String},
});

export interface AddAccount extends mongoose.Document {
  signedInUserID: string ,
    accountName:string;
    cash: string;
}
