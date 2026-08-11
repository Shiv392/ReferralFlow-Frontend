import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

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
export class Home {}
