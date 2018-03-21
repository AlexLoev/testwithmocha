const expect = require('chai').expect;
const sinon = require('sinon');
const Pokemon = require('../../pokemon').Pokemon;
const Pokemonlist = require('../../pokemon').Pokemonlist;
const log = console.log;

/*
let pokemonlist;
pokemonlist = new Pokemonlist();
pokemonlist.add(222,'w100');
pokemonlist.add('11','20');
pokemonlist.add(1,'150');
console.log(pokemonlist.max());
*/

describe('Pokemon class should', () => {
    it('call show()', () => {
        const pokemon = new Pokemon('Alex', '10');
        let stub = sinon.stub(console, 'log');
        pokemon.show()
        stub.restore();
        sinon.assert.calledWith(stub, `Hi! My name is ${pokemon.name}, my level is ${pokemon.level}`);
    });
});
describe('Pokemonlist class should', () => {
    let pokemonlist;
    beforeEach( () => {
        pokemonlist = new Pokemonlist();
    });
    it('call add() without params', () => {
        pokemonlist.add();
        expect(pokemonlist[0]).to.be.an.instanceOf(Pokemon);
    });
    it(`call add('Alex',10)`, () => {
        pokemonlist.add('Alex',10);
        expect(pokemonlist[0]).to.be.an.instanceOf(Pokemon)
        .that.include.all.keys('name','level');
        expect(pokemonlist[0].name).to.equal('Alex');
        expect(pokemonlist[0].level).to.equal(10);
    });
    it('call show() without pokemons', () => {
        let stub = sinon.stub(console, 'log');
        pokemonlist.show()
        stub.restore();
        sinon.assert.calledWith(stub, `There are ${pokemonlist.length} pokemons here.`);
    });    
    it('call show() with 2 pokemons', () => {
        pokemonlist.add('Alex',10);
        pokemonlist.add('Olga',20);
        let stub = sinon.stub(console, 'log');
        pokemonlist.show()
        stub.restore();
        sinon.assert.callCount(stub, pokemonlist.length + 1);
        sinon.assert.calledWith(stub, `There are ${pokemonlist.length} pokemons here.`);
    });    
    it('call max() with 3 pokemons', () => {
        pokemonlist.add('Alex',10);
        pokemonlist.add('Olga',20);
        pokemonlist.add('Valya',1);
        expect(pokemonlist.max().level).to.equal(20);
    });    
});