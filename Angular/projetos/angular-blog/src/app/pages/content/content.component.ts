import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://www.fortressofsolitude.co.za/wp-content/uploads/2020/01/Tony-Stark-Iron-Man.jpg"
  contentTitle:string = "NOTÍCIA EXEMPLO"
  contentDescription:string = "bla blalal"

  constructor() { }

  ngOnInit(): void {
  }

}
