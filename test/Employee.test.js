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
        });
    });
    
    describe('email property', () => {
        it('Should set the email of the Employee using the constructor', () => {
            const email = 'euler@gmail.com';
            const e = new Employee('Leonard Euler', '2.71828', email);
            expect(e.email).toBe(email);
        });
    });

    describe('getName() method', () => {
        it('Should get the object\'s name using getName()', () => {
            const someName = 'Leonard Euler';
            const e = new Employee(someName);
            expect(e.getName()).toBe(someName);
        });
    });

    describe('getId() method', () => {
        it('Should get the object\'s id using getId()', () => {
            const someId = '2.71828';
            const e = new Employee('Leonard Euler', someId);
            expect(e.getId()).toBe(someId);
        });
    });

    describe('getEmail() method', () => {
        it('Should get the object\'s email using getEmail()', () => {
            const someEmail = 'euler@gmail.com';
            const e = new Employee('Leonard Euler', '2.71828', someEmail);
            expect(e.getEmail()).toBe(someEmail);
        });
    });

    describe('getRole() method', () => {
        it('Should get the object\'s role using getRole()', () => {
            const someRole = 'Employee';
            const e = new Employee('Leonard Euler', '2.71828', 'euler@gmail.com', someRole);
            expect(e.getRole()).toBe(someRole);
        });
    });
})