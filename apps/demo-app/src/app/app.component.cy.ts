import {TestBed} from '@angular/core/testing;
import { MountConfig } from 'cypress/angular';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  const config: MountConfig<AppComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     TestBed.overrideComponent(AppComponent, {add: { providers: config.providers}});
cy.mount(AppComponent, config);
  })
})
