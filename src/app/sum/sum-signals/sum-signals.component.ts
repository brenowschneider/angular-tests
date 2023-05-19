import {Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {InputComponent} from "../../input/input.component";

@Component({
    selector: 'app-sum-signals',
    standalone: true,
    imports: [CommonModule, FormsModule, InputComponent],
    templateUrl: './sum-signals.component.html',
    styleUrls: ['./sum-signals.component.scss']
})
export class SumSignalsComponent {
    value1 = signal<number>(0)
    value2 = signal<number>(0)
    sum = computed(() => this.value1() + this.value2())

    constructor() {
        // effect(() => console.log(`### sum changed to ${this.sum()}####`))
    }

    updateValue1(changeEvent: any) {
        this.value1.set(Number.parseInt(changeEvent.target.value));
    }

    updateValue2(changeEvent: any) {
        this.value2.set(Number.parseInt(changeEvent.target.value));
    }
}
