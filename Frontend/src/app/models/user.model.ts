export class User {
  //atributos
  firstName: string;
  secondName: string;
  surName: string;
  secondsurName: string;
  sexo: string;
  FechaNaci: string;
  email: string;
  password: string;
  confirmPassword: string;
  isActive: boolean;
  

  constructor(
    firstName = '',
    secondName = '',
    surName = '',
    secondsurName = '',
    sexo = '',
    FechaNaci = '',
    email = '',
    isActive = true,
    password = '',
    confirmPassword = ''
  ) {
    //inicializacion de losatributos cuando tengan un valor

    this.firstName = firstName;
    this.secondName = secondName;
    this.surName = surName;
    this.secondsurName = secondsurName;
    this.sexo = sexo;
    this.FechaNaci = FechaNaci;
    this.email = email;
    this.isActive = isActive;
    this.password = password;
    this.confirmPassword = confirmPassword;

  }
}
