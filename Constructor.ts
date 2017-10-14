// Declaring a Typescript class
class PersonDetails {
    //Private properties of the class
    private _personName : string;
    private _personAge: number;
    //Constructor with two parameters
    constructor(pName: string, pAge: number)
    {
        //initialising the private variables
        this._personName = pName;
        this._personAge = pAge;
    }
    //member of the class to display the property values
    displayDetails():void
    {
        //Using Backtick/Backquote for display
        alert(`The person name is ${this._personName}`);
        alert(`${this._personName}'s age is ${this._personAge}`);
    }
}
let pDetails = new PersonDetails("Raghavan",28);
pDetails.displayDetails();
