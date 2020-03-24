import { expect } from 'chai';
import { getDrink, deleteDrink } from '../../src/services/review';
import knex from '../../src/database';



    describe('getDrink', () => {
        it('gets a drink by id', async () => {
            const { drinks_name } = await getDrink(1);
            expect(drinks_name).to.equal('Caramel Latte');
        });
        it('returns null', async() => {
            const drink = await getDrink(20);
            expect(drink).to.be.undefined;
        });
    });

const fakeDrink = {
    drinks_name: 'iced caramel coffee'
};

describe('fake drink test', () => {
    let drink_id;
    beforeEach(async () => {
        drink_id = (await knex('drinks').insert(fakeDrink))[0];
        await knex('drinks_categories')
            .insert({ category_id: 1, drink_id });
    });
    afterEach(async () => {
        await knex('drinks').delete().where({ id: drink_id });
        await knex('drinks_categories')
            .del().where({ drink_id });
    });
    it('deletes drink and record', async () => {
        await deleteDrink(drink_id);
        expect(await knex('drinks').where({ id: drink_id }))
            .to.be.empty;
        expect(await knex('drinks_categories').where({ drink_id }))
            .to.be.empty;
    });
    it('no effect', async () => {
        await deleteDrink(-1);

        expect(await knex('drinks')).to.have.length(3);
        expect(await knex('drinks_categories')).to.have.length(3);
    });
});