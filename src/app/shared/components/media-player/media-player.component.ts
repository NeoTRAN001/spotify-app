import { Component } from '@angular/core';

interface Track {
  cover: string,
  album: string,
  name: string
}

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: Track = {
    cover: 'laksjdklas',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)'
  }
}
