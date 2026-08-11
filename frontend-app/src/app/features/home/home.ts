import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
  CommonModule,  
  Button,
  AnimateOnScrollModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private router = inject(Router);

  public redirectLogin() : void{
    this.router.navigate(['/auth/login']);
  }
}
