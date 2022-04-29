import {ImageVideo} from "../../shared/model/imageVideo";
import {Reclamation} from "../../reclamation/model/reclamation";
export interface IUser {
  id?:number;
  nom?: string;
  prenom?: string;
  mobiliersVendeur?: Mobilier[];
  mobiliersAchteur?: Mobilier[];
  reclamations?: Reclamation[];
  reclamationsAdmin?: Reclamation[];

}

export class User implements IUser {
  constructor(
    public id?:number,
  public nom?: string,
  public prenom?: string,
  public mobiliersVendeur?: Mobilier[],
  public mobiliersAchteur?: Mobilier[],
   public reclamations?: Reclamation[],
  public reclamationsAdmin?: Reclamation[]
  ) {
  }
}
export interface IMobilier{
  id?: number;
  titre?: string;
  description?: string;
  etatMobilier?: string;
  date?: Date;
  dateVendu?: Date;
  prix?: number;
  status?: boolean;

  achteur?: User;
  vendeur?: User;
  imageVideo?: ImageVideo[];
  placeholder?: string;
}

export class Mobilier implements IMobilier {
  constructor(
    public id?: number,
    public   titre?: string,
    public description?: string,
    public etatMobilier?: string,
    public prix?: number,
    public date?: Date,
    public dateVendu?: Date,
    public achteur?: User,
    public vendeur?: User,
    public status?:boolean,
    public imageVideo?: ImageVideo[],
    public placeholder?: string
  ) {
  }
}
