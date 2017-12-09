import { TarefasListPage } from './../tarefas-list/tarefas-list';
import { LoginProvider } from './../../providers/login/login';
import { Credencial } from './../../model/credencial';
import { RegistrarPage } from "./../registrar/registrar";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";



@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

credencial: Credencial;


  constructor(
    public navCtrl: NavController,
    public LoginProvider: LoginProvider) {
      this.credencial = new Credencial();
    }

  ionViewDidLoad() {
    this.credencial = new Credencial();
    this.LoginProvider.loginSucessoEventEmitter.subscribe(
      user => this.navCtrl.setRoot(TarefasListPage)
    )
    this.LoginProvider.loginFalhaEventEmitter.subscribe(error =>
      console.log(error)
    )
  }
  loginComFacebook(){
this.LoginProvider.loginComFacebook();
  }

  loginComCredencial(){
    this.LoginProvider.loginComCredencial(this.credencial);
  }
  loginComGoogle(){
    this.LoginProvider.loginComGoogle();
  }

  doRegister() {
    this.navCtrl.push(RegistrarPage);
  }
}
