import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { LockKeyhole, LucideAngularModule, Mail } from 'lucide-angular';
import { FormComponent } from '../../../../shared/components/ui/forms/forms.component';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ButtonComponent,
    LucideAngularModule,
    FormComponent
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  
  // Lucide icons
  readonly Email = Mail;
  readonly Password = LockKeyhole;
}
