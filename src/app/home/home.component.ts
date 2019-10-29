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
constructor(private data:DataService) { }
public movieItem = {};
  

  ngOnInit() {
    console.log("before subscribe");
this.data.getMovie().subscribe({
  next: movie => this.movieItem = movie

}) ;   
    }

}
