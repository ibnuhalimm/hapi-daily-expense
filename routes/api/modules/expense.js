import create from '../../../app/actions/expense/create.js';
import getAll from '../../../app/actions/expense/get-all.js';

const expense = [
    {
        method: 'POST',
        path: '/api/v1/expenses',
        handler: create
    },
    {
        method: 'GET',
        path: '/api/v1/expenses',
        handler: getAll
    }
];

export default expense;
