import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  public loginForm : FormGroup;

  constructor(){
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }

  ngOnInit(): void{

  }

  public onSubmit():void{

  }

  public redirectSignup():void{
    this.router.navigate(['/auth/signup']);
  }

  ngOnDestroy(): void{
    
  }

}
