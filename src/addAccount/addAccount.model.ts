import * as mongoose from 'mongoose';

export const AddAccountSchema = new mongoose.Schema({

    accountName:{ type: String },
  cash: { type: String},
});

export interface AddAccount extends mongoose.Document {

    accountName:string;
    cash: string;
}
