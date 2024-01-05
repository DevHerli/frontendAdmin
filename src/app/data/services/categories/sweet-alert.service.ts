import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  /**
   *ES: Muestra un mensaje  Sweet Alert con ícono
   *
   *EN: Displays a Sweet Alert Icon Alert
   *
   * @title {string} - Title in alert, bigger size
   * @message {string} - Message in alert, it's placed under the title in smaller font size
   * @icon {"success" | "error" | "warning" | "info" | "question"} - Icon used in alert
   *
   * @author Christian Lira 05/01/2024
   */
  public alertWithIcon(
    title: string,
    message: string,
    icon: "success" | "error" | "warning" | "info" | "question"): void {

    Swal.fire({
      title: title,
      text: message,
      icon: icon
    });
  }


  /**
  *ES: Muestra un mensaje  Sweet Alert con ícono
  *
  *EN: Displays a Sweet Alert Icon Alert
  *
  * @title {string} - Title in alert, bigger size
  * @message {string} - Message in alert, it's placed under the title in smaller font size
  * @icon {"success" | "error" | "warning" | "info" | "question"} - Icon used in alert
  * @footer {string} - footer in alert, it's placed in the lowest place of alert
  *
  * @author Christian Lira 05/01/2024
  */
  public alertWithIconAndFooter(
    title: string,
    message: string,
    icon: "success" | "error" | "warning" | "info" | "question",
    footer: string): void {

    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      footer: footer
    });
  }

  /**
   *ES: Muestra una pantalla de "cargando"
   *
   *EN: Shows a "loading" screen
   *
   * ---
   * @author Christian Lira 05/01/2024
   */
  public showLoading(): void {
    Swal.showLoading();
  }

  /**
     *ES: Oculta la pantalla de carga. Solo funciona si la pantalla de carga de "showLoading" se encuentra activa
     *
     *EN: Hides the loading screen. Only work if "showLoading" method iscreen is active
     *
     * ---
     * @author Christian Lira 05/01/2024
     */
  public hideLoading(): void {
    Swal.hideLoading();
  }


}
