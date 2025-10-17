import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormComponent {

  @Input() title: string = 'Form';

  @Input() description: string = 'Description'

  @Input() miscDescription: string = 'Additional Description'

  @Input() containerClass: string = ''

}
