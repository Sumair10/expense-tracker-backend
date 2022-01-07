import * as mongoose from 'mongoose';

export const ExpenseSchema = new mongoose.Schema({
    signedInUserID : {type :String},
    cash: { type: String},
    category:{ type: String },
    account: {type : String},
    transaction: {type : String},
    date: {type : String},
}

);

export interface Expense extends mongoose.Document {
    signedInUserID:string,
    cash: string;
    category:string;
    account:string;
    transaction:string
    date:string
}
