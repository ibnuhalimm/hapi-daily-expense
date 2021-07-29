import Expense from '../../models/expense.js';

const getAll = async (request, reply) => {
    try {
        const expenses = await Expense.find({}).sort({ createdAt: 'desc' });
        const transformedExpenses = expenses.map(expense => {
            return {
                id: expense._id,
                name: expense.name,
                amount: expense.amount,
                date: expense.date
            };
        });

        return reply.response({
            status: 'success',
            data: {
                expenses: transformedExpenses
            }
        }).code(200);
    } catch (error) {
        return reply.response({
            status: 'error',
            message: 'Something went wrong'
        }).code(500);
    }
};

export default getAll;
