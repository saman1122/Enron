export class Pageable {
  public offset: number;
  public pageNumber: number;
  public pageSize: number;

  constructor(offset: number = 0, pageNumber: number = 0,  pageSize: number = 20) {
    this.init(offset,pageNumber,pageSize);
   }

   public init(offset: number = 0, pageNumber: number = 0,  pageSize: number = 20) {
    this.offset = offset;
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
   }
}