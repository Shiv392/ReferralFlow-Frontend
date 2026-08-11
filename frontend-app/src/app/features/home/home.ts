import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-home',
  imports: [
  CommonModule,  
  Button
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
