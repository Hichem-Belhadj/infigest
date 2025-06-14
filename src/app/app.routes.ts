import { Routes } from '@angular/router';
import {LayoutComponent} from '@shared/components/layout/layout.component';
import {HomeComponent} from './page/home/home.component';
import {GroupComponent} from './page/group/group.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'group',
        component: GroupComponent
      }
    ]
  }
];
