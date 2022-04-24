



export interface IReclamation{
  id?: number;
  titre?: string;
  sujet?: string;

  date?: Date;
  reponse?: string;

}

export class Reclamation implements IReclamation{


  constructor(
    public id?: number,
  public   titre?: string,
  public sujet?: string,
  public date?: Date,
  public reponse?: string,
  ) {
  }
}
