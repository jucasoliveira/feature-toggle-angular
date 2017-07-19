import { Angular2PrijectPage } from './app.po';

describe('angular2-priject App', () => {
  let page: Angular2PrijectPage;

  beforeEach(() => {
    page = new Angular2PrijectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
