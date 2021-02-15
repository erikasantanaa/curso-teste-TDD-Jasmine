
const helloWorld = require('../helloWorld-erika');

describe('Hello World', function() {
  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});