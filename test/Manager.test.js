const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('existence', () => {
        it('Should instantiate an Manager instance', () => {
            const m = new Manager();
            expect(typeof(m)).toBe('object');
        });
    });

    describe('name property', () => {
        it('Should set the name of the Manager using the constructor', () => {
            const name = 'Leonard Euler';
            const m = new Manager(name);
            expect(m.name).toBe(name);
        });
    });

    describe('id property', () => {});
    
    describe('email property', () => {});

    describe('officeNumber property', () => {});

    describe('getRole() method', () => {});
})