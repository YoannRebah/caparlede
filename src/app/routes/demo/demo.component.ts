import { Component } from '@angular/core';
import { LoadingService } from '../../components/loader/loading.service';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderConnectedComponent } from '../../components/header/header-connected/header-connected.component';
import { InputComponent } from '../../components/input/input.component';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../components/input/form.service';

@Component({
  selector: 'app-demo',
  imports: [HeaderConnectedComponent, ReactiveFormsModule, InputComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {

  loading$: Observable<boolean>;
  form!: FormGroup;

  constructor(
    private loadingService: LoadingService,
    private formService: FormService
  ) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
    this.form = this.formService.createForm(['email', 'username', 'password', 'checked']);
  }

  getControl(controlName: string) {
    return this.formService.getFormControl(this.form, controlName);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('formulaire invalide');
    }
  }

}
