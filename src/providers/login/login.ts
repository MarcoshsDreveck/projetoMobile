
import { Credencial } from "./../../model/credencial";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import firebase from "firebase";
import { EventEmitter, Injectable, NgZone } from "@angular/core";

@Injectable()
export class LoginProvider {

  currentUser:any;
  autenticado:boolean;
  loginSucessoEventEmitter:EventEmitter<any>;
  loginFalhaEventEmitter:EventEmitter<any>;
  loginoutEventEmitter:EventEmitter<any>;

  constructor(public http: Http, public NgZone: NgZone) {
    this.loginSucessoEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.loginoutEventEmitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(usuario => {
      this.callbackStateChange(usuario);
    })
  }
  private callbackStateChange(usuario) {
    this.NgZone.run( () => {
      if (usuario == null) {
        this.currentUser = null;
        this.autenticado = false;
      } else {
        this.currentUser = usuario;
        this.autenticado = true;
      }
    })
  }
loginComFacebook(){
let provider = new firebase.auth.FacebookAuthProvider();

return firebase.auth().signInWithPopup(provider)
.then(resultado => this.callbackSucessoLogin(resultado))
.catch(error => this.callbackFalhaLogin(error))
}

loginComCredencial(credencial: Credencial){
  firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
   .then(resultado => this.callbackSucessoLogin (resultado))
   .catch(error => this.callbackFalhaLogin(error))
}

loginComGoogle(){
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(resultado => this.callbackSucessoLogin (resultado) )
  .catch(error => this.callbackFalhaLogin(error));
}
  registrarUsuario(credencial: Credencial) {
    firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
sair(){
  firebase.auth().signOut()
    .then(() => this.loginoutEventEmitter.emit(true))
      .catch(error => this.callbackFalhaLogin(error))
}


  private callbackSucessoLogin(response) {
    this.loginSucessoEventEmitter.emit(response.user);
  }
  private callbackFalhaLogin(error){
    this.loginFalhaEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial: error.credencial});
  }
}
