// Write your solution in this file!

var customerName = 'bob'; // Declaring customerName in global scope using the var keyword

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Accessing and modifying the global customerName variable
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring bestCustomer in global scope
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Accessing and modifying the global bestCustomer variable
}

const leastFavoriteCustomer = 'someone'; // Declaring leastFavoriteCustomer as a constant in global scope

function changeLeastFavoriteCustomer() {
    // Attempting to change the constant leastFavoriteCustomer
    // This will result in an error being thrown as you cannot reassign a constant
    leastFavoriteCustomer = 'someone else';
}

module.exports = { 
    customerName, 
    upperCaseCustomerName, 
    setBestCustomer, 
    overwriteBestCustomer, 
    leastFavoriteCustomer, 
    changeLeastFavoriteCustomer 
};

