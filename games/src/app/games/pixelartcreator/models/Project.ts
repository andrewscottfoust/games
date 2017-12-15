export interface Project {
    key?:string;
    userID:string;
    userName:string;
    name:string;
    description:string;
    grid:any[];
    boxWidth:number;
    boxHeight:number;
    borderRadius:number;
    boxMargin:number;
    cols:number;
    rows:number;
    lastEditDate:Date;
}