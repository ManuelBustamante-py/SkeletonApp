import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthDate = '';
  }

  async showInfo() {
    const alert = await this.alertCtrl.create({
      header: 'Información',
      message: `Nombre: ${this.firstName} <br> Apellido: ${this.lastName}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
