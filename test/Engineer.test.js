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

    describe('id property', () => {});
    
    describe('email property', () => {});

    describe('github property', () => {});
    describe('getGithub() method', () => {});

    describe('getRole() method', () => {});
})