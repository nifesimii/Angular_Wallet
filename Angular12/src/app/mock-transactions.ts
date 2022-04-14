
import { Transaction } from './Transaction';

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        category: 'Shopping',
        day: 'May 5th at 2:30pm',
        to: 'Jordi Santiago',
        receipt: true,
        isSucess: true,
        Amount: 50

    },
    {
        id: 2,
        day: 'May 6th at 2:30pm',
        from: 'Abdulhamid Obiesan',
        receipt: false,
        isSucess: true,
        Amount: 70
    },
    {
        id: 3,
        category: 'Schoolfees',
        day: 'May 9th at 3:30pm',
        to: 'Adam Silver',
        receipt: true,
        isSucess: true,
        Amount: 90
    },
];