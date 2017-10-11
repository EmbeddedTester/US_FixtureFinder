describe("A Localizer", function() {

  describe("#localizePage to German", function() {
    beforeEach(function() {
      FixtureFinder.localizePage("de");
    });
    
    it("will translate the date to German format", function() {
      expect($('.fixtures .date strong').text()).toEqual("Mo. 9. März 2015");
    });

    it("will translate the word results to German", function() {
      expect($('.fixtures .noOf').text()).toEqual("5 Spiele");
    });

    it("will translate all country names, inc 'All Countries' to German", function() {
       expect($('.all-txt')[0].innerHTML).toEqual('Alle Staaten');
       expect($('.all-txt')[1].innerHTML).toEqual('Alle Staaten');
       expect($('.en-txt').text()).toEqual('England');
       expect($('.de-txt').text()).toEqual('Deutschland');       
    });

    it("will translate the word 'Team' to German", function() {
      expect($('.fixtures .team-filter').attr('placeholder')).toEqual("Mannschaft");
    });

    it("will translate the word 'Filter' to German", function() {
      expect($('.fixtures .navbar-brand').text()).toEqual("Filtern");
    });
  });

describe("#localizePage to English", function() {
    beforeEach(function() {
      FixtureFinder.localizePage("en");
    });

    it("will translate the date to English format", function() {
      expect($('.fixtures .date strong').text()).toEqual("Mon 9th March 2015");
    });

    it("will translate the word results to English", function() {
      expect($('.fixtures .noOf').text()).toEqual("5 fixtures");
    });

    it("will translate all country names, inc 'All Countries' to English", function() {
       expect($('.all-txt')[0].innerHTML).toEqual('All Countries');
       expect($('.all-txt')[1].innerHTML).toEqual('All Countries');
       expect($('.en-txt').text()).toEqual('England');
       expect($('.de-txt').text()).toEqual('Germany');
    });

    it("will translate the word 'Team' to English", function() {
      expect($('.fixtures .team-filter').attr('placeholder')).toEqual("Team");
    });
    
    it("will translate the word 'Filter' to English", function() {
      expect($('.fixtures .navbar-brand').text()).toEqual("Filter");
    });
  });

  describe("#setDateWithCurrentLanguage", function() {
    describe("given locale is set to English", function() {

      beforeEach(function() {
        FixtureFinder.localizePage("en");
      });

      describe("when setDateWithCurrentLanguage with '2015-01-01'", function() {
        it("will set date field to Thu 1st January 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-01-01");

          expect($('.fixtures .date strong').text()).toEqual("Thu 1st January 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-03-03'", function() {
        it("will set date field to Tue 3rd March 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-03-03");

          expect($('.fixtures .date strong').text()).toEqual("Tue 3rd March 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-05-13'", function() {
        it("will set date field to Mon 11th May 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-05-11");

          expect($('.fixtures .date strong').text()).toEqual("Mon 11th May 2015");
        });
      });
    });  
  });   
});
