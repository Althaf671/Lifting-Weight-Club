import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
