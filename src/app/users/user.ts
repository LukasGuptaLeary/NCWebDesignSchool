export class User {
  constructor(
    public email: string,
    public password: string,
    public firstName?: string,
    public lastName?: string,
    public admin?: boolean,
    public student?: boolean,
    public faculty?: boolean,
    public id?: string) {}
}
