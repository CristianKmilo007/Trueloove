export class User {
  //atributos
  firstName: string;
  secondName: string;
  surName: string;
  secondsurName: string;
  hombre: boolean;
  mujer: boolean;
  dia : Number;
  mes : Number;
  age : Number;
  email: string;
  user: String;
  password: string;
  confirmPassword: string;
  isActive: boolean;
  

  constructor(
    firstName = '',
    secondName = '',
    surName = '',
    secondsurName = '',
    hombre = false,
    mujer = false,
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

    this.firstName = firstName;
    this.secondName = secondName;
    this.surName = surName;
    this.secondsurName = secondsurName;
    this.hombre = hombre;
    this.mujer = mujer;
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
