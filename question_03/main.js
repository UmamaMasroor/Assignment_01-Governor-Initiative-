// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name = "javeria";
// Convert to lowercase
console.log("Lowercase: " + person_name.toLowerCase());
// Convert to uppercase
console.log("Uppercase: " + person_name.toUpperCase());
// Convert to titlecase
console.log("Titlecase: " + person_name.charAt(0, 1).toUpperCase() + person_name.slice(1).toLowerCase());
