import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-all',
  templateUrl: './match-all.component.html',
  styleUrls: ['./match-all.component.css']
})
export class MatchAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  like(){

    let like:any = document.querySelector(".like")

    like = like.style.backgroundColor = "#8bb2eb"

  }

}
