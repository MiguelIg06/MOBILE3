import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  constructor() {}
 
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });
      return image;
    } catch (error) {
      console.error('Erro ao capturar imagem:', error);
      throw error;
    }
  }
}