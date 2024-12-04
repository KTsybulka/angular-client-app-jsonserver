import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiDataComponent } from './components/api-data/api-data.component';
import { FormComponent } from './components/form/form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'api-data',
        component: ApiDataComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];
