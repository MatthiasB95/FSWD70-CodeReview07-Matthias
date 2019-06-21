import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersPageComponent } from './important-numbers-page/important-numbers-page.component';
import { PhoneBookPageComponent } from './phone-book-page/phone-book-page.component';


const routes: Routes = [
{
	path:"",component: HomePageComponent
},
{
	path:"important-numbers",component:ImportantNumbersPageComponent
},
{
	path:"phone-book",component: PhoneBookPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
