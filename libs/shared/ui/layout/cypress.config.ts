import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nrwl/angular/plugins/component-testing';

const preset = nxComponentTestingPreset(__filename);

console.log(JSON.stringify(preset));

export default defineConfig({
  component: nxComponentTestingPreset(__filename),
});
