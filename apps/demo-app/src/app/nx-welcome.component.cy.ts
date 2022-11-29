import { MountConfig } from 'cypress/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

describe(NxWelcomeComponent.name, () => {
  const config: MountConfig<NxWelcomeComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     cy.mount(NxWelcomeComponent, config);
  })
})
