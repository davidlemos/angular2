import { Component } from '@angular/core'
import { AlbumsPage } from '../albums/albums';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

	 tab0Root = AlbumsPage;

}
