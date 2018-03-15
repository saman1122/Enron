export class Email {
    constructor(
      public messageId : String ='',
      public raw : String ='',
      public mailbox : String ='',
      public user : String ='',
      public from : String ='',
      public to : String[] =[],
      public cc : String[] =[],
      public bcc : String[] =[],
      public subject : String ='',
      public content : String ='',
      public date : String =''
    ) { }
}