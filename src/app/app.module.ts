import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//services
import { RecipeService } from './services/recipe.service';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
