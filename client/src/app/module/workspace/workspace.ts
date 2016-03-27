import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterLink, RouterOutlet} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Menu} from '../menu/menu';
import {Table} from '../table/table';
import {Chart} from '../chart/chart';
import {Settings} from '../settings/settings';

declare var module: any

@Component({
  selector: 'workspace',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, RouterOutlet, Menu],
  moduleId: module.id,
  templateUrl: './workspace.html'
})
@RouteConfig([
  { path: '/mychart', component: Chart, as: 'Chart', useAsDefault: true },
  { path: '/table', component: Table, as: 'Table' },
  { path: '/settings', component: Settings, as: 'Settings' }
])
export class Workspace {
  constructor(public router: Router) {
  }
}