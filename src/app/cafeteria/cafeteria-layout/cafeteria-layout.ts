import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CafeteriaNavbar } from '../cafeteria-navbar/cafeteria-navbar';

@Component({
  selector: 'app-cafeteria-layout',
  standalone: true,
  imports: [RouterModule, CafeteriaNavbar],
  templateUrl: './cafeteria-layout.html',
  styleUrls: ['./cafeteria-layout.css']
})
export class CafeteriaLayout { }
