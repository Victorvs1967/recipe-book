import { Component } from '@angular/core';
import { DataStoreService } from './services/data-store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book';

  loadedFeature = 'recipe';

  constructor(private dataStoreService: DataStoreService) {
    this.dataStoreService.fetchRecipes();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}