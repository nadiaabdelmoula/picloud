import { Role } from "./role";
import {Reclamation} from "../reclamation/model/reclamation";
import {Mobilier} from "../mobilier/model/mobilier";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles:Role[];
    telephone:number;
    mobiliersVendeur?: Mobilier[];
    mobiliersAchteur?: Mobilier[];
    reclamations?: Reclamation[];
    reclamationsAdmin?: Reclamation[]
}
