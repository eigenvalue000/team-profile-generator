const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('existence', () => {
        it('Should instantiate an Employee instance', () => {
            const e = new Employee();
            expect(typeof(e)).toBe('object');
        });
    });

    describe('name property', () => {
        it('Should set the name of the Employee using the constructor', () => {
            const name = 'Leonard Euler';
            const e = new Employee(name);
            expect(e.name).toBe(name);
        });
    });

    describe('id property', () => {});
    
    describe('email property', () => {});

    describe('getName() method', () => {});

    describe('getId() method', () => {});

    describe('getEmail() method', () => {});

    describe('getRole() method', () => {});
})