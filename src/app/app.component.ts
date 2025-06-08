import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

}
