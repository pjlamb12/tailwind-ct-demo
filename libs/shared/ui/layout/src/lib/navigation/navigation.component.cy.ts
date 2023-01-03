import { TestBed } from '@angular/core/testing';
import { MountConfig } from 'cypress/angular';
import { NavigationComponent } from './navigation.component';

describe(NavigationComponent.name, () => {
  const config: MountConfig<NavigationComponent> = {
    declarations: [],
    imports: [],
    providers: [],
  };

  it('renders', () => {
    TestBed.overrideComponent(NavigationComponent, {
      add: { providers: config.providers },
    });
    cy.mount(NavigationComponent, config);
  });
});
