import Expense from '../../models/expense.js';

const create = async (request, reply) => {
    const { name, amount, date } = request.payload;

    try {
        await Expense.create({
            name: name,
            amount: amount,
            date: date
        });

        return reply.response({
            status: 'success',
            message: 'Successfully created expense'
        }).code(201);
    } catch (error) {
        return reply.response({
            status: 'error',
            message: 'Something went wrong'
        }).code(500);
    }
};

export default create;
