import { Annonce } from "./annonce.model";
import { ImageVideo } from "./ImageVideo";
import { Role } from "./role";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles:Role[];
    telephone:number;
    annonces:Annonce[];
    imageVideo:ImageVideo[];
}