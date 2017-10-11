describe("A Fixture Filter", function() {
  var testFixtures;
  var filtered;
  var allCountries = 'all';

  beforeEach(function() {
    testFixtures = testFixtureData;
  });

  describe("given undefined country and team", function() {
    it("will return the identity for the given array", function() {
        filter = FixtureFinder.FixtureFilter();

        filtered = filter(testFixtures);

        expect(filtered).toEqual(testFixtures);
    });
  });

  describe("given all countries and a blank team", function() {
    var filter;

    it("will return the identity for the given array", function() {
        filter = FixtureFinder.FixtureFilter(allCountries, "");

        filtered = filter(testFixtures);

        expect(filtered).toEqual(testFixtures);
    });

    it("will return the identity for the given array", function() {
        filter = FixtureFinder.FixtureFilter(allCountries, "   ");

        filtered = filter(testFixtures);

        expect(filtered).toEqual(testFixtures);
    });
  });

  describe("given 'Italy' as country filter and a blank team", function() {
    var filter;

    it("will return the subset with only Italian fixtures", function() {
      filter = FixtureFinder.FixtureFilter("Italy", "");

      filtered = filter(testFixtures);

      expect(filtered).toEqual(testFixtures.slice(3, 5));
    });
  });

  describe("given all countries filter", function() {

    describe("and team Filter is 'zyzz'", function() {
        var filter;

        it("will return an empty array", function() {
            filter = FixtureFinder.FixtureFilter(allCountries, "zyzz");

            filtered = filter(testFixtures);

            var expected = [];
            expect(filtered).toEqual(expected);
        });
    });
  });
});
