import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TuiAvatar, TuiBadge, TuiBadgeNotification, TuiFade} from "@taiga-ui/kit";
import {TuiButton} from "@taiga-ui/core";
import {TuiNavigation} from "@taiga-ui/layout";

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiButton,
    TuiFade,
    TuiNavigation
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected open = false;
  protected switch = false;
}
