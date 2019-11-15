export class UserModel {
  Id: number;
  Document: string;
  Names: string;
  LastName: string;
  SecondLastName: string;
  Birthday: Date;
  Phone: string;
  Address: string;
  Email: string;

  constructor() {
    this.Id = null;
    this.Document = '';
    this.Names = '';
    this.LastName = '';
    this.SecondLastName = '';
    this.Birthday = null;
    this.Phone = '';
    this.Address = '';
    this.Email = '';
  }
}
