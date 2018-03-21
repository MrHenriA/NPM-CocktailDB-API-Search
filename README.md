
**I created this npm package to communicate to the Open Source Cocktail DB API to help others and automate this task. This was submitted to the Open Source Cocktail API DB Forum and is currently being used by 100's of people.**





***https://www.npmjs.com/package/cocktail-api-search***


**#TheCockTailDB**

***Requires***
* **npm axios**


**API refer to https://www.thecocktaildb.com/api.php**

*<!-- Contact -->*

Email: zag@kodi.tv

**#API Keys**
- You can use the test API key "1" during development of your app or for educational use However you must apply for a key a production API key via email if releasing publicly on an appstore. The test key may be revoked at any time if abused.

**#API Methods**

NPM package gets installed, the param is set to "term" that is equal to the value of s. Which will search by name, this can be changed to how ever you like.

Description | Call
----------- | -------------
Search cocktail by name | <https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita>
Search ingredient by name | <https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka>
Lookup full cocktail details by id | <https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060>
Lookup a random cocktail | <https://www.thecocktaildb.com/api/json/v1/1/random.php>
Search by ingredient | <https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin>
 -| <https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka>
Filter by alcoholic | <https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic>
 -| <https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic>
Filter by Category | <https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink>
-| <https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail>
Filter by Glass | <https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass>
 -| <https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute>
List the categories, glasses, ingredients or alcoholic filters | <https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list>
 -| <https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list>
 -| <https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list>
 -| <https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list>

