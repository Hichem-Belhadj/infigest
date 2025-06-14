import {Component, signal} from '@angular/core';
import {TuiAsideComponent, TuiAsideItemDirective} from "@taiga-ui/layout";
import {TuiFade} from "@taiga-ui/kit";
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [
    TuiAsideComponent,
    TuiAsideItemDirective,
    TuiFade,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  protected expanded = signal(false);

  protected handleToggle(): void {
    this.expanded.update((e) => !e);
  }
}
