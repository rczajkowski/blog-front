export class Donator{
    firstName: string;
    lastName: string;
    email: string;
    value: number;
    address: Address = new Address();
}

export class Address {
    zipCode: string;
    city: string;
    street: string;
    buildingNumber: string;
}
