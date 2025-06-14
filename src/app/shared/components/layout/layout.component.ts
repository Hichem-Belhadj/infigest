import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {tuiAsPortal, TuiPortals} from '@taiga-ui/cdk';
import {TuiDropdownService, TuiLink,} from '@taiga-ui/core';
import {TuiBreadcrumbs, TuiFade, TuiTabs,} from '@taiga-ui/kit';
import {TuiNavigation} from '@taiga-ui/layout';
import {SidebarComponent} from '@shared/components/sidebar/sidebar.component';
import {HeaderComponent} from '@shared/components/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [
    FormsModule,
    TuiBreadcrumbs,
    TuiFade,
    TuiLink,
    TuiNavigation,
    TuiTabs,
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [TuiDropdownService, tuiAsPortal(TuiDropdownService)],
})
export class LayoutComponent extends TuiPortals {
  protected readonly breadcrumbs = ['Home', 'Angular', 'Repositories', 'Taiga UI'];
}
