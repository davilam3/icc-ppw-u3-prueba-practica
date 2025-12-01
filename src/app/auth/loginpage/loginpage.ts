import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormUtils } from '../../share/utils/formUtils';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './loginpage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Loginpage {
private fb = inject(FormBuilder);
  private router = inject(Router);

  readonly USER = {
    email: 'usuario@ups.edu.ec',
    password: '123456'
  };

  errorMessage = signal<string | null>(null);

  form = this.fb.group({
    email: ['', [FormUtils.email()]],
    password: ['', [FormUtils.minLength(6)]]
  });

  login() {
    console.log(this.form.value);
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.errorMessage.set('Por favor revisa los campos.');
      return;
    }

    const val = this.form.value;
    if (val.email === this.USER.email && val.password === this.USER.password) {
      this.router.navigate(['/home']);
      this.errorMessage.set(null);
    } else {
      this.errorMessage.set('Credenciales incorrectas.');
    }
  }

}
