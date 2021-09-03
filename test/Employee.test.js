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

    describe('id property', () => {
        it('Should set the id of the Employee using the constructor', () => {
            const id = '2.71828';
            const e = new Employee('Leonard Euler', id);
            expect(e.id).toBe(id);
        })
    });
    
    describe('email property', () => {
        it('Should set the email of the Employee using the constructor', () => {
            const email = 'euler@gmail.com';
            const e = new Employee('Leonard Euler', '2.71828', email);
            expect(e.email).toBe(email);
        })
    });

    describe('getName() method', () => {});

    describe('getId() method', () => {});

    describe('getEmail() method', () => {});

    describe('getRole() method', () => {});
})