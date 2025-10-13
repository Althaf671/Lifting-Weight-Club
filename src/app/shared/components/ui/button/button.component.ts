// Button.ts

import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: "app-btn",
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.scss",
    imports: [CommonModule]
})
export class ButtonComponent {

    @Input() label: string = 'Button';

    @Input() type: 'primary' | 'secondary' | 'default' | 'danger' = 'primary'; 

    @Input() disabled: boolean = false;

    @Output() clicked = new EventEmitter<void>();

    onClick() {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}