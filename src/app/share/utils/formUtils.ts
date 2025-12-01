// FormUtils: helpers para marcar errores y construir validaciones
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class FormUtils {
    static markAll(control: AbstractControl) {
        control.markAllAsTouched();
    }


    static hasError(control: AbstractControl | null, error: string) {
        return !!control && control.touched && control.hasError(error);
    }

    static minLength(min: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value == null) return null;
            return (control.value as string).length < min ? { minlength: { requiredLength: min, actualLength: (control.value as string).length } } : null;
        };
    }

    // Validador simple de email (regex básico)
    static email(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const v = control.value as string;
            if (!v) return null;
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(v) ? null : { email: true };
        };
    }
}
