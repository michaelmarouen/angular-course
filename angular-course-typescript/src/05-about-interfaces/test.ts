import * as chai from 'chai';
var expect = chai.expect;

describe('about interfaces', () => {
  it('1-describes an object', () => {
    interface Person{
        firstName:string;
    };
    var person : Person = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal('John');
  });

  it('2-should be possible to use it as a type', () => {
    // _
    interface Person{
      firstName:string;
    };
    var person: Person = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal('John');
  });

  it('3-can be extended', () => {
    interface IAnimal {
      gender: string;
    }
    // _
    interface Person extends IAnimal{
      firstName : string;
    }
    var person: Person = {
      gender: 'male',
      firstName: 'John'
    };
    expect(person.gender).to.equal('male');
    expect(person.firstName).to.equal('John');
  });

  it('4-can have optional properties', () => {
    // _
    interface Person{
      firstName:string;
      lastName? : string;
    };
    var person: Person = {
      firstName: 'John'
    };

    expect(person.firstName).to.equal('John');
    expect(person.lastName).to.equal(undefined);
  });

  it('5-can have readonly properties', () => {
    // _
    interface Person{
       firstName:string;     
       readonly lastName? :string; 
    };
    var error: boolean = false;
    var person: Person = {
      firstName: 'John'
    };

    try {
      person.firstName = 'Jane';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.be.false;
    expect(person.firstName).to.equal('Jane');
  });

  it('6-can describe maps', () => {
    interface IPerson {
      readonly firstName: string;
    }

    // _
    interface ContactPersonne extends IPerson{
      johnId : {
        firstName : IPerson
      };
    }

    var contacts : ContactPersonne = {
      johnId: {
        firstName: 'John'
      }
    };

    expect(contacts['johnId'].firstName).to.equal('John');
  });

  it('7-readonly maps', () => {
    interface IPerson {
      readonly firstName: string;
    }

    // _
    interface Contacts extends IPerson{
      johnId:{firstName: string};
    }
    var error: boolean = false;
    var contacts: Contacts = {
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

    expect(error).to.be.false;
    expect(contacts['johnId'].firstName).to.equal('Jane');
  });

  it('8-describes function', () => {
    interface IGreeter {
      (name: string): string;
    }

    var greet : IGreeter = function (name : string){
      return `Hello ${name}`;
    }; // _

    expect(greet('John')).to.equal('Hello John');
  });

  it('9-can have multiple signatures and properties', () => {
    interface IGreeter {
      (firstName: string): string;
      (firstName: string, lastName: string): string;
      foo?: string;
    }

    var greet = function(firstName?: string, lastName?:string){
    };
    // _

    expect(greet('John')).to.equal('Hello John');
    expect(greet('John', 'Doe')).to.equal('Hello John Doe');
    expect(greet.foo).to.equal('bar');
  });

  it('10-describes constructor', () => {
    interface IPerson {
      firstName: string;
    }

    interface IPersonConstructor {
      new (firstName: string): IPerson;
    }

    var Person : IPersonConstructor = {
        
    }; // _

    expect(new Person('John').firstName).to.equal('John');
  });
});
