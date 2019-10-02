import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// public srcURL1= '../../assets/images/friends.png';
// public srcURL2= '../../assets/images/Got.jpg';
// public srcURL3= '../../assets/images/Sacredgames.png';

public movieItem = [];
  constructor(private ds:DataService) { }

  ngOnInit() {
this.ds.getMovie().subscribe({
  next: movie => console.log( JSON.stringify(movie))

}) ;   
    }

}
