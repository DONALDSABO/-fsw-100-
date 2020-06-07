
    //Need Pointed In The Right Direction Not Sure What Is Going On, Or What Is Missing?

var person = {
   firstName: "Peter",
   lastName:  "Pan",
   age: 32,
   friends :"Mike,Sam,Fred",
           
   fullName : function() {
   return this.firstName + " " + this.lastName;
   }
};


var shoppingCart = (function() {
	cart = ["bread,milk,eggs,butter"];
    function item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
	}
 })();
	




