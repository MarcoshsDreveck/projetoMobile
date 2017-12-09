import { FeedPage } from "./../feed/feed";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";


@IonicPage()
@Component({
  selector: "page-intro",
  templateUrl: "intro.html"
})
export class IntroPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad IntroPage");
  }
  goToTabsPages() {
    this.navCtrl.push(FeedPage);
  }
}
