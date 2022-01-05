import * as mongoose from 'mongoose';

export const ExpenseSchema = new mongoose.Schema({
    cash: { type: String},
    category:{ type: String },
    account: {type : String},
    transaction: {type : String},
    date: {type : String},
}

);

export interface Expense extends mongoose.Document {
    cash: string;
    category:string;
    account:string;
    transaction:string
    date:string
}
