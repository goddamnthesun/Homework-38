import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css',
})
export class BonusComponent {
  pickcolor: string = '';
}
