import {Component, Input} from '@angular/core';
import {ArtistModel} from '../../store/entities/artist.model';

@Component({
  selector: 'app-artist-names',
  templateUrl: './artist-names.component.html',
  styleUrls: ['./artist-names.component.scss']
})
export class ArtistNamesComponent {
  @Input() artists: ArtistModel[];
}
