import { MountConfig } from 'cypress/angular';
import { NavigationComponent } from './navigation.component';

describe(NavigationComponent.name, () => {
  const config: MountConfig<NavigationComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     cy.mount(NavigationComponent, config);
  })
})
