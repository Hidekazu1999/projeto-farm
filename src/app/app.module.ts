import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CadastroModule} from "./components/cadastro/cadastro.module";
import {CadastroClienteComponent} from "./components/cadastro/cadastro-cliente/cadastro-cliente.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CadastroModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
