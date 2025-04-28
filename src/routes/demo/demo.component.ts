import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { HeaderConnectedComponent } from '../../components/header/header-connected/header-connected.component';
import { FormService } from '../../components/input/form.service';
import { InputComponent } from '../../components/input/input.component';
import { LoadingService } from '../../components/loader/loading.service';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-demo',
  imports: [HeaderConnectedComponent, ReactiveFormsModule, InputComponent, ButtonComponent],
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

  test() {
    console.log('test');
  }

}
