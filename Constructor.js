// Declaring a Typescript class
var PersonDetails = /** @class */ (function () {
    //Constructor with two parameters
    function PersonDetails(pName, pAge) {
        //initialising the private variables
        this._personName = pName;
        this._personAge = pAge;
    }
    //member of the class to display the property values
    PersonDetails.prototype.displayDetails = function () {
        //Using Backtick/Backquote for display
        alert("The person name is " + this._personName);
        alert(this._personName + "'s age is " + this._personAge);
    };
    return PersonDetails;
}());
var pDetails = new PersonDetails("Raghavan", 28);
pDetails.displayDetails();
//# sourceMappingURL=Constructor.js.map