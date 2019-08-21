import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {LoadRequestEvent} from '../../components/entity-list/entity-list.component';
import {ArtistModel} from '../../store/models/artist.model';
import {Router} from '@angular/router';
import {GetArtists} from '../../store/actions/artist.actions';
import {ArtistState} from '../../store/states/artist.state';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public ids: string[];
  public pageSize = 50;
  public selector = ArtistState.artists;

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.store.select(state => state.artists.ids).subscribe((value) => {
      this.ids = value;
    });
  }

  public onLoadRequest(event: LoadRequestEvent): void {
    this.store.dispatch(new GetArtists(this.ids, event.page, event.pageSize));
  }

  public onRowDoubleClick(event: ArtistModel): void {
    this.router.navigate(['artist', event.id]);
  }
}
