import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ActorsListComponent } from "./components/actors-list/actors-list.component";
import { AppRoutingModule } from "./app.routes";
import { ActorDetailComponent } from "./components/actor-detail/actor-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    ActorsListComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
