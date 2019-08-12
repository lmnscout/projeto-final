import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { ConversorComponent } from './components';
import { ConversorService, MoedaService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';
import {ConversorRoutingModule} from './conversor-routing.module';
import {ConversorRoutingComponent} from './conversor-routing.component';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConversorRoutingModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
