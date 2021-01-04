// Integration test for electron for spectron
// ****** use "npm run test-mocha" to run these tests ******

// import other tests
const appOpensTests = require("./subSuites/appOpens");
const reqInputTests = require("./subSuites/reqInputTests");
const httpTest = require("./subSuites/httpTest");
const websocketTest = require("./subSuites/websocketTest");
const grpcTest = require("./subSuites/grpcTest");
const graphqlTest = require("./subSuites/graphqlTest");

const httpTestingTest = require("./subSuites/httpTestingTest");
const grpcTestingTest = require("./subSuites/grpcTestingTest");

const app = require("./testApp");

describe("Electron Tests", function () {
  this.timeout(60000);
  before(function () {
    return app.start();
  });

  after(function () {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  // these are are test suites within this broader suite
  appOpensTests();

  // execute differnt types of test here
  describe("CRUD functionality", function () {
    // reqInputTests();
    // httpTest();
    // graphqlTest();
    // websocketTest();
    // grpcTest();
  });

  describe("Swell Testing functionality", function () {
    // httpTestingTest();
    grpcTestingTest();
  });
});
