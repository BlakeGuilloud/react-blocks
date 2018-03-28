## react-blocks

### Usage
```bash
$ git clone https://github.com/BlakeGuilloud/react-blocks.git
$ yarn dev # Installs dependencies and starts development server on port 1337.
$ yarn build # Bundles production build into /dist directory.
```


### Flashcards
A React project gogo travis go

#### Known Issues:
1. Very difficult to reproduce, but occasionally "Card 3" will completely disappear during it's transition.. but only on the first toggle. Every subsequent click displays intended behavior.
2. ~~The disclaimer message on "Card 1" will persist upon being flipped.~~ Resolved by setting `backface-visibility: hidden;` on the disclaimer element as well.
