import { User } from "./user";

export class AnnonceFetch {
    id: number ;
    description: string;
    titre: string;
    disponibilite: boolean;
    localisation: string;
    nbchambre: number;
    prix: number;
    surface: number;
    typeAnnonce: string;
    user: User;
}
