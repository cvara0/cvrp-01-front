import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './components/home-comps/home/home.component';

/* se crea una ruta que muestra el ts  */
const APP_ROUTES: Routes=[
    {path:'home/1',component:HomeComponent},
    {path:'home/:id',component:HomeComponent},
    {path:'**',pathMatch:'full',redirectTo:'home/1'}//si no encuentra la ruta ejecuta esta, ruta por defecto
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);