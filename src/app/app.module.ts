import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {ConvertFromGPipe, ConvertToGPipe} from './formulaManager/units.pipe';
import {ScalePipe} from './formulaManager/scale.pipe';
import {AngularMaterialModule} from './material.module';
import {HomeComponent} from './home/home.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FormulaManagerComponent} from './formulaManager/formulaManager.component';
import {NgxElectronModule} from 'ngx-electron';
import {AboutComponent} from './about/about.component';
import {CategoriesComponent} from './store/categories.component';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {LoginComponent} from './login/login.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NewCategoryComponent} from './store/newCategory/newCategory.component';
import {NewProductComponent} from './store/newProduct/newProduct.component';
import {DeleteComponent} from './delete/delete.component';
import {ProductsComponent} from './store/products/products.component';
import {CartComponent} from './store/cart/cart.component';
import {ViewComponents} from './formulaManager/viewComponents/viewComponents.component';
import {NewComponentComponent} from './formulaManager/newComponent/newComponent.component';
import {NewFormulaComponent} from './formulaManager/newFormula/newFormula.component';
import {AppStore} from './app.store';
import {SlideshowModule} from 'ng-simple-slideshow';
import {HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MSDSComponent} from './msds/msds.component';
import {SizePipe} from './size.pipe';
import {CatalogComponent} from "./catalog/catalog.component";

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        CategoriesComponent,
        CartComponent,
        CatalogComponent,
        ConvertFromGPipe,
        ConvertToGPipe,
        DeleteComponent,
        FormulaManagerComponent,
        HomeComponent,
        LoginComponent,
        MSDSComponent,
        NewCategoryComponent,
        NewComponentComponent,
        NewFormulaComponent,
        NewProductComponent,
        ProductsComponent,
        ScalePipe,
        SizePipe,
        ViewComponents
    ],
    imports: [
        AngularMaterialModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxElectronModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: 'about', component: AboutComponent},
            {path: 'cart', component: CartComponent},
            {path: 'catalog', component: CatalogComponent},
            {path: 'formulaManager', component: FormulaManagerComponent},
            {path: 'msds', component: MSDSComponent},
            {path: 'products/:product', component: ProductsComponent},
            {path: 'store/:category', component: CategoriesComponent},
            {path: 'store', component: CategoriesComponent},
            {path: '**', component: HomeComponent}
        ]),
        ScrollingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        SlideshowModule
    ],
    providers: [AppStore],
    entryComponents: [
        DeleteComponent,
        LoginComponent,
        NewCategoryComponent,
        NewComponentComponent,
        NewFormulaComponent,
        NewProductComponent,
        ViewComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private db: AngularFirestore) {
        this.db.firestore.enablePersistence();
    }
}
