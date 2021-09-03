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

    describe('id property', () => {
        it('Should set the id of the Intern using the constructor', () => {
            const id = '24';
            const i = new Intern('Garrett Kegel', id);
            expect(i.id).toBe(id);
        });
    });
    
    describe('email property', () => {
        it('Should set the email of the Intern using the constructor', () => {
            const email = 'gkegel@gmail.com';
            const i = new Intern('Garrett Kegel', '24', email);
            expect(i.email).toBe(email);
        });
    });
    describe('school property', () => {
        it('Should set the school of the Intern using the constructor', () => {
            const school = 'UC Davis';
            const i = new Intern('Garrett Kegel', '24', 'gkegel@gmail.com', school);
            expect(i.school).toBe(school);
        });
    });
    describe('getSchool() method', () => {
        it('Should get the Intern\'s school using getSchool()', () => {
            const school = 'UC Davis';
            const i = new Intern('Garrett Kegel', '24', 'gkegel@gmail.com', 'UC Davis');
            expect(i.getSchool()).toBe(school);
        });
    });


    describe('getRole() method', () => {
        it('Should get the Intern\'s role using getRole()', () => {
            const someRole = 'Intern';
            const i = new Intern('Garrett Kegel', '24', 'gkegel@gmail.com', 'UC Davis');
            expect(i.getRole()).toBe(someRole);
        });
    });
})