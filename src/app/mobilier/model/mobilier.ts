import {ImageVideo} from "../../shared/model/imageVideo";
export interface IUser {
  id?:number;
  nom?: string;
  prenom?: string,
  mobiliersVendeur?: User[],
  mobiliersAchteur?: User[]
}

export class User implements IUser {
  constructor(
    public id?:number,
  public nom?: string,
  public prenom?: string,
  public mobiliersVendeur?: User[],
  public mobiliersAchteur?: User[]
  ) {
  }
}
export interface IMobilier{
  id?: number;
  titre?: string;
  description?: string;
  etatMobilier?: string;
  date?: Date;
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
    public achteur?: User,
    public vendeur?: User,
    public status?:boolean,
    public imageVideo?: ImageVideo[],
    public placeholder?: string
  ) {
  }
}
