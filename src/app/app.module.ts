import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesListComponent } from './heroes/list/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
