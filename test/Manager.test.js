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

    describe('id property', () => {
        it('Should set the id of the Manager using the constructor', () => {
            const id = '2.71828';
            const m = new Manager('Leonard Euler', id);
            expect(m.id).toBe(id);
        });
    });
    
    describe('email property', () => {
        it('Should set the email of the Manager using the constructor', () => {
            const email = 'euler@gmail.com';
            const m = new Manager('Leonard Euler', '2.71828', email);
            expect(m.email).toBe(email);
        });
    });

    describe('officeNumber property', () => {
        it('Should set the officeNumber of the Manager using the constructor', () => {
            const officeNumber = '12';
            const m = new Manager('Leonard Euler', '2.71828', 'euler@gmail.com', officeNumber);
            expect(m.officeNumber).toBe(officeNumber);
        });
    });

    describe('getRole() method', () => {
        it('Should get the object\'s role using getRole()', () => {
            const someRole = 'Manager';
            const m = new Manager('Leonard Euler', '2.71828', 'euler@gmail.com', someRole);
            expect(m.getRole()).toBe(someRole);
        });
    });
})