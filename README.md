# CryptoChain

Simple react web to display cryptocurrencies prices in realtime.
* FrontEnd : React.js
* Backend : Node.js/Javascript
* API used :[CoinGecko](https://www.coingecko.com/en)

## Installation

```sh
git clone https://github.com/Abdellatif-E/crypto.git
```

```sh
npm install
```

## Note
Sometimes the website fail to execute 'send' on 'XMLHttpRequest it's a browser or api problem.

## Questionnaire

### Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?

There is no sub-optimal choices taken.

### Is any part of it over-designed?

In cryptocurrencies website customers or users care the most about the numbers and their validity, also the design is important but in this case CryptoChain is not over-designed. 

### If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

I would try to minimize http request from the api, also it's possible through merging files instead creating so many and importing them which cost download and load time (Minify and combine files ).

Choose a right hosting service !

### What are some other enhancements you would have made, if you had more time to do this implementation

I would work on the realtime chart viewer for a better view of price changes over time.

Also I would work on auto refreshing the page to keep the prices uptodate

## Live Demo

https://cryptochainn.netlify.app
