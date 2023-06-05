const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.list-karunia-restaurants');

});

Scenario('liking one restaurant', async ({ I }) => {

  I.amOnPage('/');
  I.waitForElement('.karunia-item')
  I.seeElement('.karunia-item ');

  const firstfilm = locate('.karunia-item a').first();
  const firsfilmtittle = await I.grabTextFrom(firstfilm);
  I.click(firstfilm);

  I.amOnPage('/#/detail');
  I.seeElement(".fa-heart-o");
  I.seeElement('#likeButton');
  I.click('#likeButton');



  I.amOnPage('/#/favorite');
  const firstRestaurantskaruniacheck = locate(".karunia-item a").first();
  const firsrestauranttittlecheck = await I.grabTextFrom(firstRestaurantskaruniacheck);
  assert.strictEqual(firsfilmtittle, firsrestauranttittlecheck);
});

Scenario('Unliking Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.karunia-item')

  const Restaurantsfirskarunia = locate('.karunia-item a').first();
  const RestaurantsfirskaruniaName = await I.grabTextFrom(Restaurantsfirskarunia);
  I.click(Restaurantsfirskarunia);

  I.amOnPage("/#/detail");
  I.seeElement(".fa-heart-o");
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.seeElement(".fa-heart");

  I.amOnPage('/#/favorite');

  const firstresturantcheck = locate(".karunia-item a").first();
  const likedRestaurancnkcheck = await I.grabTextFrom(firstresturantcheck);
  assert.strictEqual(RestaurantsfirskaruniaName, likedRestaurancnkcheck);

  I.click(Restaurantsfirskarunia);
  I.amOnPage("/#/detail");
  I.seeElement(".fa-heart");
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.seeElement(".fa-heart-o");

  I.amOnPage("/#/favorite");
  I.dontSeeElement(".karunia-item");


});