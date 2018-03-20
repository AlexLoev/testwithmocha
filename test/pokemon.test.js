const expect = require('chai').expect;
const Pokemon = require('../pokemon').Pokemon;
const Pokemonlist = require('../pokemon').Pokemonlist;
const log = console.log;

describe('Pokemon class should', () => {
    it('exec show()', () => {
        const pokemon = new Pokemon('Alex', '10');
        let res = pokemon.show(); 
    });
});
describe('Pokemonlist class should', () => {
    let pokemonlist;
    beforeEach( () => {
        pokemonlist = new Pokemonlist();
    });
    it('exec add() without params', () => {
        pokemonlist.add();
        expect(pokemonlist[0]).to.be.an.instanceOf(Pokemon);
    });
    it(`exec add('Alex',10)`, () => {
        pokemonlist.add('Alex',10);
        expect(pokemonlist[0]).to.be.an.instanceOf(Pokemon)
        .that.include.all.keys('name','level');
        expect(pokemonlist[0].name).to.equal('Alex');
        expect(pokemonlist[0].level).to.equal(10);
    });
});