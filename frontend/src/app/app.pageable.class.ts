export class Pageable {
    constructor(
      public offset : number = 0,
      public pageNumber : number= 0,
      public pageSize : number=20,
    ) { }
}