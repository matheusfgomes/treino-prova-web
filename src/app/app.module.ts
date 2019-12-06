import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AlunoComponent, AlunoDetalheComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
