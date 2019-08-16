/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - the default binding for this, this in this case refers to the entire window.
* 2. implicit binding - when you call the function, "this" refers to what is to the left of the dot.
* 3. new binding - when we use a constructor, the "this" refers to the specific instance of that object.
* 4. explicit binding - We can set this to refer to what we want by using .call, .apply, and .bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function lotsoCode(test) {
    console.log(this);
    return test;
}
lotsoCode("Hello World");

// Principle 2
const hal= {
    afraid: "I'm afraid I can't do that.",
    greeting: function(name) {
        console.log(`Good morning, ${name}`);
    },
    apologize: function(name) {
        console.log(`I'm sorry ${name}. ${this.afraid}`);
    }
}
hal.greeting("Dave");
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function knight(name) {
    this.title = "Sir ";
    this.name = name;
    this.speak = function() {
        console.log(this.title + this.name);
    };
}

const bedevere = new knight("Bedevere the Wise");
const lancelot = new knight("Lancelot the Brave");
const gallahad = new knight("Gallahad the Pure");
const robin = new knight("Robin the not quite as brave");
const notapp = new knight("Not Appearing in this film");

bedevere.speak();
lancelot.speak();
gallahad.speak();
robin.speak();
notapp.speak();

// Principle 4

// code example for Explicit Binding

knight.call(robin, "Lancelot");
robin.speak();