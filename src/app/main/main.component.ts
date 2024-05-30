import { Component } from '@angular/core';
import { BonusComponent } from '../bonus/bonus.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BonusComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  displayText: string = '';
  backgroundColor: string = '';
  count: number = 0;

  showText() {
    this.count++;
    this.displayText = `I clicked a button ${this.count} times and now this text is here, and what color was the button again???`;
    this.generateRandomColor();
  }
  generateRandomColor() {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    this.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }
}
