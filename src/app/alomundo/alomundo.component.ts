import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alomundo',
  templateUrl: './alomundo.component.html',
  styleUrls: ['./alomundo.component.css']
})
export class AlomundoComponent implements OnInit {

  mensagem = 'Alo Mundo';
  

  constructor() { }

  ngOnInit(): void {

  }

}
