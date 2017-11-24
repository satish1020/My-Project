import { UBOUIPage } from './app.po';

describe('uboui App', function() {
  let page: UBOUIPage;

  beforeEach(() => {
    page = new UBOUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
