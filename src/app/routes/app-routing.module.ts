import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './route';
import { LoginComponent } from '../pages/login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [CommonModule , RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule ],
	declarations: [ LoginComponent ],
	exports: [ RouterModule, LoginComponent ]
})
export class AppRoutingModule {}
