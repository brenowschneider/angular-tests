import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {SumSignalsComponent} from "./sum/sum-signals/sum-signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, FormsModule, InputComponent, SumSignalsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
