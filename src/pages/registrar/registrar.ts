import { LoginProvider } from './../../providers/login/login';
import { Credencial } from './../../model/credencial';
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  credencial:Credencial;

  constructor(public navCtrl: NavController,
  public LoginProvider: LoginProvider) {
    this.credencial = new Credencial();
  }



doRegister(){
  this.LoginProvider.registrarUsuario(this.credencial);

}
}
