class FormStep {
    constructor(title, description, stepNumber) {
        this.title = title;
        this.description = description;
        this.stepNumber = stepNumber;
    }
}

// Step Class Initiate
const stepOne = new FormStep("Personal info", "Please provide your name, email address, and phone number.", 1);
const stepTwo = new FormStep("Select your plan", "You have the option of monthly or yearly billing.", 2);
const stepThree = new FormStep("Pick add-ons", "Add-ons help enhance your gaming experience.", 3);
const stepFour = new FormStep("Finishing up", "Double-check everything looks OK before confirming.", 4);

const stepList = [stepOne, stepTwo, stepThree, stepFour];

// Form Radios
class FormOptions {
    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
}

const planArcade = new FormOptions("Arcade", 9, "radio");
const planAdvanced = new FormOptions("Advanced", 12, "radio");
const planPro = new FormOptions("Pro", 15, "radio");

const addonOnline = new FormOptions("Online service", 1, "checkbox");
const addonStorage = new FormOptions("Larger storage", 2, "checkbox");
const addonCustom = new FormOptions("Customizable profile", 2, "checkbox");