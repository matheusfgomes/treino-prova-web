import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  constructor() { }

  @Input() aluno: Aluno;

  ngOnInit() {
  }

}