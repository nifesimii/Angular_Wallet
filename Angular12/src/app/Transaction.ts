   
export interface Transaction {
    id?: number,
    category?: string,
    day: string,
    to?: string,
    from?: string,
    receipt: boolean,
    isSucess: boolean,
    Amount: number
  }