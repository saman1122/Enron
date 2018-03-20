import { Email } from "./app.email.class";

export class Searchresult {
    constructor(
      public email  : Email,
      public occurencesNumber : number,
    ) { }
}