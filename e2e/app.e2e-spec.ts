import { ObsDataServiceSamplePage } from './app.po';

describe('obs-data-service-sample App', () => {
  let page: ObsDataServiceSamplePage;

  beforeEach(() => {
    page = new ObsDataServiceSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
