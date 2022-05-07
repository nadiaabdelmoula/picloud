import { ImageVideo } from "../models/ImageVideo";
import { User } from "../models/user";


export class Annonce {
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
  imageVideo:ImageVideo[];
  placeholder:String;

}
