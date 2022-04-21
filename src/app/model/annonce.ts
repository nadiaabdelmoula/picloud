import { User } from "./user";


export class Annonce {
    id: number ;
    description: string;
    titre: string;
    disponibilité: boolean;
    localisation: string;
    nbchambre: number;
    prix: number;
    surface: number;
    typeannonce: string
    user: User
}
