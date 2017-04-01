import { NCWebDesignSchoolPage } from './app.po';

describe('ncweb-design-school App', () => {
  let page: NCWebDesignSchoolPage;

  beforeEach(() => {
    page = new NCWebDesignSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
