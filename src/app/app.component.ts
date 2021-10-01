import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIDxwdAmGrJFbXa7HT0iXFA8fMXpIEFYs",
  authDomain: "angular-recipe-book-01.firebaseapp.com",
  databaseURL: "https://angular-recipe-book-01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-recipe-book-01",
  storageBucket: "angular-recipe-book-01.appspot.com",
  messagingSenderId: "287796847468",
  appId: "1:287796847468:web:c426630c5e50e8be164949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book';

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}