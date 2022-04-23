import { User } from "./user";

export class AnnonceFetch {
    id: number ;
    description: string;
    titre: string;
    disponibilité: boolean;
    localisation: string;
    nbchambre: number;
    prix: number;
    surface: number;
    typeannonce: string
    latitude: number;
    longitude:number;
    user: User
}
