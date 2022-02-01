import { Component } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kendoThemeNotification';

  constructor(private notificationService: NotificationService) {}

  public show(): void {
    this.notificationService.show({
      content: "Your data has been saved. Time for tea!",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 400 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "warning", icon: true },
      closable: true,
    });
  }
}
