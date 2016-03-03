beforeEach(function () {
  jasmine.addMatchers({
    toBePairsOf: function () {
      return {
        compare: function (actualPairs, expectedPairs) {
          return {
            pass: _.differenceWith(actualPairs, expectedPairs, _.isEqual).length === 0
          };
        }
      };
    }
  });
});
