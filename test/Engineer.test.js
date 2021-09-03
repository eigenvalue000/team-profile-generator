const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('existence', () => {
        it('Should instantiate an Engineer instance', () => {
            const e = new Engineer();
            expect(typeof(e)).toBe('object');
        });
    });

    describe('name property', () => {
        it('Should set the name of the Engineer using the constructor', () => {
            const name = 'Henri Lebesgue';
            const e = new Engineer(name);
            expect(e.name).toBe(name);
        });
    });

    describe('id property', () => {
        it('Should set the id of the Engineer using the constructor', () => {
            const id = '3.14159';
            const e = new Engineer('Henri Lebesgue', id);
            expect(e.id).toBe(id);
        });
    });
    
    describe('email property', () => {
        it('Should set the email of the Engineer using the constructor', () => {
            const email = 'lebesgue@gmail.com';
            const e = new Engineer('Henri Lebesgue', '3.14159', email);
            expect(e.email).toBe(email);
        });
    });

    describe('github property', () => {
        it('Should set the github of the Engineer using the constructor', () => {
            const github = 'lebesgue000';
            const e = new Engineer('Henri Lebesgue', '3.14159', 'lebesgue@gmail.com', github);
            expect(e.github).toBe(github);
        });
    });
    describe('getGithub() method', () => {
        it('Should get the Engineer\'s github using getGithub()', () => {
            const github = 'lebesgue000';
            const e = new Engineer('Leonard Euler', '2.71828', 'euler@gmail.com', github);
            expect(e.getGithub()).toBe(github);
        });
    });

    describe('getRole() method', () => {
        it('Should get the Engineer\'s role using getRole()', () => {
            const someRole = 'Engineer';
            const e = new Engineer('Leonard Euler', '2.71828', 'euler@gmail.com', 'lebesgue000');
            expect(e.getRole()).toBe(someRole);
        });
    });
})