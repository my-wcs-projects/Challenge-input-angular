import { Component } from '@angular/core';
import { Developper } from '../models/developper.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css'],
})
export class DevelopperComponent {
  developper: Developper = new Developper(
    'Aouali',
    'Donia',
    34,
    'femme',
    "Developpeuse d'application",
    [
      new Skill(
        'JavaScript',
        './Javascript-logo.png',
        'https://www.javascript.com/'
      ),
      new Skill('Angular', 'favicon.ico', 'https://angular.io/'),
      new Skill('React', 'React-icon.svg', 'https://reactjs.org/'),
    ]
  );
}
