const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('existence', () => {
        it('Should instantiate an Intern instance', () => {
            const i = new Intern();
            expect(typeof(i)).toBe('object');
        });
    });

    describe('name property', () => {
        it('Should set the name of the Intern using the constructor', () => {
            const name = 'Garrett Kegel';
            const i = new Intern(name);
            expect(i.name).toBe(name);
        });
    });

    describe('id property', () => {});
    
    describe('email property', () => {});
    describe('school property', () => {});
    describe('getSchool() method', () => {});


    describe('getRole() method', () => {});
})