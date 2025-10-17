import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../../../shared/components/ui/forms/forms.component';
import { 
  LockKeyhole,
  LucideAngularModule, 
  Mail 
} from 'lucide-angular';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ButtonComponent,
    LucideAngularModule,
    FormComponent
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

    // Lucide icons
    readonly Email = Mail;
    readonly Password = LockKeyhole;
}
