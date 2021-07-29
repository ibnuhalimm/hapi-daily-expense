import pkg from 'mongoose';
const { Schema, model } = pkg;

const ExpenseSchema = new Schema({
    id: Schema.ObjectId,
    date: {
        type: Date
    },
    name: {
        type: String
    },
    amount: {
        type: Number
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    updatedAt: {
        type: Number
    }
});

export default model('Expense', ExpenseSchema);
