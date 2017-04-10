import { Angular2EnvironmentRuntimePage } from './app.po';

describe('angular2-environment-runtime App', () => {
  let page: Angular2EnvironmentRuntimePage;

  beforeEach(() => {
    page = new Angular2EnvironmentRuntimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
