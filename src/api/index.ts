export type SignUpDto = {
    email: string;
    name: string;
    password: string;
};

export type LoginDto = {
    email: string;
    password: string;
};

type UserDto = {
    id: string;
    email?: string;
    name: string;
    createdOn: Date;
};

export class Auth {
    async signUp(credentials: SignUpDto) {}
    async login(credentials: LoginDto) {}
}

export class User {
    async getCurrent() {}
    async getById(id: string) {}
}
