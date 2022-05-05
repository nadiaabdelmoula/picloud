import { Annonce } from "./annonce.model";
import { User } from "./user";

export class RDV{
    id:number;
    date:Date;
    user:User;
    annonce:Annonce;
}