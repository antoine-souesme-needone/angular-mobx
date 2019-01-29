import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobxAngularModule } from 'mobx-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { NameStore } from './stores/name.store';


@NgModule({
    declarations: [
        AppComponent,
        ComponentAComponent,
        ComponentBComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        MobxAngularModule
    ],
    providers: [
        NameStore
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
