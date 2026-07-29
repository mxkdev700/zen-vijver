import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieBanner } from '../../shared/components/cookie-banner/cookie-banner';
import { Footer } from '../../shared/components/footer/footer';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'zen-main-layout',
  imports: [RouterOutlet, Header, Footer, CookieBanner],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
