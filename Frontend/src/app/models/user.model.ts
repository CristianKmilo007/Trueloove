export class User {
  //atributos
  _id: string;
  firstName: string;
  secondName: string;
  surName: string;
  secondsurName: string;
  sexo: string;
  dia : Number;
  mes : Number;
  age : Number;
  email: string;
  user: String;
  password: string;
  confirmPassword: string;
  isActive: boolean;
  

  constructor(
    _id = "",
    firstName = '',
    secondName = '',
    surName = '',
    secondsurName = '',
    sexo = "",
    dia = 0,
    mes = 0,
    age = 0,
    email = '',
    user = "",
    isActive = true,
    password = '',
    confirmPassword = ''
  ) {
    //inicializacion de losatributos cuando tengan un valor

    this._id = _id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.surName = surName;
    this.secondsurName = secondsurName;
    this.sexo = sexo;
    this.dia = dia;
    this.mes = mes;
    this.age = age;
    this.email = email;
    this.user = user;
    this.isActive = isActive;
    this.password = password;
    this.confirmPassword = confirmPassword;

  }
}
