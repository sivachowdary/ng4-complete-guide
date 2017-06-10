import { Ng4ComplateGuidePage } from './app.po';

describe('ng4-complate-guide App', () => {
  let page: Ng4ComplateGuidePage;

  beforeEach(() => {
    page = new Ng4ComplateGuidePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
