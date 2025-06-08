import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

}
