import {TestBed} from '@angular/core/testing;
import { MountConfig } from 'cypress/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

describe(NxWelcomeComponent.name, () => {
  const config: MountConfig<NxWelcomeComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     TestBed.overrideComponent(NxWelcomeComponent, {add: { providers: config.providers}});
cy.mount(NxWelcomeComponent, config);
  })
})
