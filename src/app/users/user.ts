export class Profile {
  constructor(public image?: string,
              public description?: string,
              public phone?: string,
              public link?: string) {}
}

export class User {
  constructor(public email: string,
              public password?: string,
              public firstName?: string,
              public lastName?: string,
              public lastLogin?: Date,
              public profile?: Profile,
              public admin?: boolean,
              public id?: string) {}
}
