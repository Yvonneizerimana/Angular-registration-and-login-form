import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent
        },
    {
        path:'products',
        component:ProductsComponent
        },
     {
        path:'registration',
        component: RegistrationComponent
   
     },
     {
        path:'login',
        component: LoginComponent
     }
];
