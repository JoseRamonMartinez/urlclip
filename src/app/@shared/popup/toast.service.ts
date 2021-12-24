import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(msg: string, duration?: number, color?: string) {
    duration ||= 1800;
    color ||= 'primary';
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
      animated: true,
      color: color,
    });
    toast.present();
  }
}
