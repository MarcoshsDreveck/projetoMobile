import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Juliana Maçaneiro",
    data: "09/10/2017",
    descricao: "Foto para catálogo",
    qtd_likes: 12,
    qtd_comments: 4,
    time_coment: "11h ago"
  }
public nome_usuario: string = "Juliana Maçaneiro";

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }
  ionViewDidEnter() {
    let elem = <HTMLElement>document.querySelector(".tabbar a:nth-child(1)");
    if (elem != null) {
      elem.style.display = 'none';
    }
  }
  logout(){
    this.navCtrl.push(LoginPage);
  }
  
// ionViewDidLoad() {
//   console.log('IonViewDidLoad FeedPage')

//   public somaDoisNumeros(num1:number, num2:number): void{
//  alert(num1+num2);
//   }

//   ionViewDidLoad() {
//     this.somaDoisNumeros(10, 99);
}
