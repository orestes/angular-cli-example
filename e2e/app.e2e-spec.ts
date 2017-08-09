import { CliappPage } from './app.po';

describe('cliapp App', () => {
  let page: CliappPage;

  beforeEach(() => {
    page = new CliappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
