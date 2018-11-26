import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { SobreOBebPage } from '../pages/sobre-obeb/sobre-obeb';
import { DiarioPage } from '../pages/diario/diario';
import { LocalizaOPage } from '../pages/localiza-o/localiza-o';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { EscrevaAlgoPage } from '../pages/escreva-algo/escreva-algo';
import { ComoTrocarFraldaPage } from '../pages/como-trocar-fralda/como-trocar-fralda';
import { ChoroDoBebPage } from '../pages/choro-do-beb/choro-do-beb';
import { CorteDoCabeloPage } from '../pages/corte-do-cabelo/corte-do-cabelo';
import { HigienePage } from '../pages/higiene/higiene';
import { PrimeiroBanhoPage } from '../pages/primeiro-banho/primeiro-banho';
import { EntradaPage } from '../pages/entrada/entrada';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AlunoListService } from '../services/aluno-list.service';
import { HomeModule } from '../pages/home/home.module';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    SobreOBebPage,
    DiarioPage,
    LocalizaOPage,
    TabsControllerPage,
    EscrevaAlgoPage,
    ComoTrocarFraldaPage,
    ChoroDoBebPage,
    CorteDoCabeloPage,
    HigienePage,
    PrimeiroBanhoPage,
    EntradaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    HomeModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SobreOBebPage,
    DiarioPage,
    LocalizaOPage,
    TabsControllerPage,
    EscrevaAlgoPage,
    ComoTrocarFraldaPage,
    ChoroDoBebPage,
    CorteDoCabeloPage,
    HigienePage,
    PrimeiroBanhoPage,
    EntradaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AlunoListService,
    Geolocation
  ]
})
export class AppModule { }
