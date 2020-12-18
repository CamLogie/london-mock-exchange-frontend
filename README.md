# London Mock Exchange Frontend
This is a frontend static react webpage application for mock investments made in conjunction with [this backend London Mock Exchange API](https://github.com/arabellaknowles/london-mock-exchange-backend). It provides a user interface for signing up, in and out, for creating porfolios, listing portfolios and deleting portfolios, for creating transactions within these portolfolios and displaying a newsfeed of current financial articles. 

## Set up
1) Ensure you have npm installed
2) Clone this repository.
3) To install required dependencies, in your terminal run:
```
$ npm install
```
4) If you want to run this app locally, in your terminal run:
```
$ npm start
```
then go to localhost:3000 in your brower.
6) Run your backend server for full functionality
5) To run a build of this app and deploy to surge, in your terminal run:
```
$ npm run deploy
```
Then visit: http://londonmockexchange.surge.sh/

## Technologies Used
- React
- Javascript
- HTML
- CSS
- The Market Stack API 
- The Guardian API
- CSS stylesheet from Bootstrap

## Future Improvements
**App:**  

- Making live trades with no closing date input
- Creating a leaderboard comparing portfolio net earnings
- Statistics and graphs generated from the transactions made 

**Code:**   
- Refactoring of code
  - Focussing on encapsulation and SRP
- Testing the code - Jest and cypress
