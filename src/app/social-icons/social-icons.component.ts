import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.css',
})
export class SocialIconsComponent {
  instagramURL = 'https://www.instagram.com';
  facebookURL = 'https://www.facebook.com';
  youtubeURL = 'https://www.youtube.com';
  @Input() height: string = '30px';
  @Input() width: string = '30px';
}
