import { ACBootstrapPage } from './app.po';

describe('ac-bootstrap App', function() {
  let page: ACBootstrapPage;

  beforeEach(() => {
    page = new ACBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
