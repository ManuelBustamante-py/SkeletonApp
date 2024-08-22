import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  async login() {
    if (this.username.length < 3 || this.username.length > 8) {
      this.showToast('El usuario debe tener entre 3 y 8 caracteres.');
      return;
    }
    if (this.password.length !== 4 || !/^\d+$/.test(this.password)) {
      this.showToast('La contraseña debe ser numérica de 4 dígitos.');
      return;
    }

    this.navCtrl.navigateForward('/home', {
      queryParams: { username: this.username }
    });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
