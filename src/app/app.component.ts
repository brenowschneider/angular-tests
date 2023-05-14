import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  value1  = signal<number>(0)
  value2  = signal<number>(0)
  sum = computed(() => this.value1() + this.value2())

  log = effect(() => console.log(`### sum changed to ${this.sum()}####`))

  updateValue1(changeEvent: any) {
    this.value1.set(Number.parseInt(changeEvent.target.value));
    const test = this.value1.asReadonly();
    const test2 = computed(() => this.value1());
  }

  updateValue2(changeEvent: any) {
    this.value2.set(Number.parseInt(changeEvent.target.value));
  }
}
