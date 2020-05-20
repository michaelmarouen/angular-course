"use strict";
exports.__esModule = true;
var chai = require("chai");
var expect = chai.expect;
describe('about interfaces', function () {
    it('1-describes an object', function () {
        ;
        var person = {
            firstName: 'John'
        };
        expect(person.firstName).to.equal('John');
    });
    it('2-should be possible to use it as a type', function () {
        ;
        var person = {
            firstName: 'John'
        };
        expect(person.firstName).to.equal('John');
    });
    it('3-can be extended', function () {
        var person = {
            gender: 'male',
            firstName: 'John'
        };
        expect(person.gender).to.equal('male');
        expect(person.firstName).to.equal('John');
    });
    it('4-can have optional properties', function () {
        ;
        var person = {
            firstName: 'John'
        };
        expect(person.firstName).to.equal('John');
        expect(person.lastName).to.equal(undefined);
    });
    it('5-can have readonly properties', function () {
        ;
        var error = false;
        var person = {
            firstName: 'John'
        };
        try {
            person.firstName = 'Jane';
        }
        catch (e) {
            error = true;
        }
        expect(error).to.be["false"];
        expect(person.firstName).to.equal('Jane');
    });
    it('6-can describe maps', function () {
        var contacts = {
            johnId: {
                firstName: 'John'
            }
        };
        expect(contacts['johnId'].firstName).to.equal('John');
    });
    it('7-readonly maps', function () {
        var error = false;
        var contacts = {
            johnId: {
                firstName: 'John'
            }
        };
        try {
            contacts['johnId'].firstName = 'Jane';
        }
        catch (e) {
            error = true;
        }
        expect(error).to.be["false"];
        expect(contacts['johnId'].firstName).to.equal('Jane');
    });
    it('8-describes function', function () {
        var greet = function (name) {
            return "Hello " + name;
        }; // _
        expect(greet('John')).to.equal('Hello John');
    });
    it('9-can have multiple signatures and properties', function () {
        var greet = function (firstName, lastName) {
        };
        // _
        expect(greet('John')).to.equal('Hello John');
        expect(greet('John', 'Doe')).to.equal('Hello John Doe');
        expect(greet.foo).to.equal('bar');
    });
    it('10-describes constructor', function () {
        var Person = {}; // _
        expect(new Person('John').firstName).to.equal('John');
    });
});
