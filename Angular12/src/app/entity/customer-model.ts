import { Account } from './account-model'
export class Customer {
    customerNumber: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    customername: string;
    password: string;
    accounts: Account[];

    getCustomerNumber(): number {
        return this.customerNumber;
    }

    setCustomerNumber(customerNumber: number) {
        this.customerNumber = this.customerNumber;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getBirthDate(): string {
        return this.birthDate;
    }

    setBirthDate(birthDate: string): void {
        this.birthDate = birthDate;
    }

    getCustomername(): string {
        return this.customername;
    }

    setCustomername(customername: string): void {
        this.customername = customername;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }





}