import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	valForm: FormGroup;
  msg: string = '';
  error:boolean=false;
  success:boolean=false;
	constructor(fb: FormBuilder, public authService: AuthService) {
		this.valForm = fb.group({
			username: [ null, Validators.required ],
			password: [ null, Validators.required ]
		});
	}

	ngOnInit() {}
	submitForm($ev, value: any) {
		$ev.preventDefault();
		for (let c in this.valForm.controls) {
			this.valForm.controls[c].markAsTouched();
		}
		if (this.valForm.valid) {
			let user = {
				username: value.username,
				password: value.password
			};
			console.log('user', user);
			this.authService
				.login(user)
				.then((res) => {
          this.success=true;
          this.msg=res.user_id;
					console.log(res);
				})
				.catch((err) => {
          this.error=true;
					this.msg = err.error;
					console.log(this.msg);
				});
		}
	}
}
