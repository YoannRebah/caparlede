import { Routes } from '@angular/router';
import { DemoComponent } from './routes/demo/demo.component';
import { Page404Component } from './routes/page404/page404.component';
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { ContactComponent } from './routes/contact/contact.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    data: {
      label: 'Page de démonstration',
      icon: 'fas fa-flask',
      keywords: [
        'démonstration', 'essai', 'test', 'fonctionnalité', 'exemple',
        'présentation', 'prototype', 'interface', 'expérience', 'sandbox'
      ]
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      label: 'Connexion',
      icon: 'fas fa-sign-in-alt',
      keywords: [
        'connexion', 'authentification', 'identifiant', 'mot de passe',
        'se connecter', 'login', 'accès', 'sécurité', 'utilisateur', 'session'
      ]
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      label: 'Accueil',
      icon: 'fas fa-home',
      keywords: [
        'accueil', 'home', 'page principale', 'départ', 'bienvenue',
        'navigation', 'interface', 'vue d\'ensemble', 'landing', 'menu'
      ]
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      label: 'Contact',
      icon: 'fas fa-envelope',
      keywords: [
        'contact', 'formulaire', 'email', 'message', 'support',
        'demande', 'communication', 'réponse', 'assistance', 'coordonnées'
      ]
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      label: 'Tableau de bord',
      icon: 'fas fa-tachometer-alt',
      keywords: [
        'dashboard', 'tableau de bord', 'statistiques', 'admin', 'gestion',
        'données', 'performance', 'indicateurs', 'rapport', 'interface'
      ]
    }
  },
  {
    path: '**',
    component: Page404Component,
    data: {
      label: 'Page introuvable',
      icon: 'fas fa-exclamation-triangle',
      keywords: [
        '404', 'erreur', 'page manquante', 'non trouvé', 'inexistant',
        'route incorrecte', 'introuvable', 'not found', 'erreur page', 'fail'
      ]
    }
  }
];
