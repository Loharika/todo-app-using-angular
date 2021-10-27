   
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {HttpClientModule} from '@angular/common/http'
import { StoreModule } from '@ngrx/store'; 
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { AppRoutingModule } from './app-routing.module';  
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module'; 

import * as fromApp from './store/app.reducer';

import { AuthEffects } from './auth/store/auth.effects';
import { environment } from '../environments/environment';   
import { InputFieldComponent } from './todo/input-field/input-field.component';
import { TodoModule } from './todo/todo.module';
import { TodoDashboardComponent } from './todo/todo-dashboard/todo-dashboard.component';

@NgModule({declarations: [AppComponent, HeaderComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    TodoModule,
    SharedModule,
    CoreModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({logOnly:environment.production})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }