export class Album{

	    private title: string;
      private id: number;
      private userId: number;

    constructor(title: string, id:number, userId:number){
      this.id = id;
      this.userId = userId;
      this.title = title;
    }
    
   public getTitle():string{
     return this.title;
   }
   public getId():number{
     return this.id;
   }
   public getUserId():number{
     return this.userId;
   }
   public setTitle(title: string){
     this.title = title;
   }
   public setUserId(userId: number){
     this.userId = userId;
   }
    public setId(id: number){
     this.id = id;
   }


}