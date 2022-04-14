export class Transaction {
    idTransaction:number;
    date:string;
    anDebit:number;
    anCredit:number;
    amount:number;
    transactionType:number;
    accountNumber:number;

    constructor(id: number, date: string, anDebit: number, anCredit: number, amount: number, transType: number, accNumber: number){
        this.idTransaction = id;
        this.date = date;
        this.anDebit = anDebit;
        this.anCredit = anCredit;
        this.amount = amount;
        this.transactionType = transType;
        this.accountNumber = accNumber;
    }
}