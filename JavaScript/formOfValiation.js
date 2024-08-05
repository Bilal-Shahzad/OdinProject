// What is form validation?

//  provide feedback when you don't enter your data in the format they are expecting. You'll get messages such as:

// "This field is required" (You can't leave this field blank).
// "Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).
// "Please enter a valid email address" (the data you entered is not in the right format).
// "Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).

// When you enter data, the browser and/or the web server will check to see that the data is in the correct format and within the constraints set by the application

// Validation done in the browser is called client-side validation
// while validation done on the server is called server-side validation


// Different types of client-side validation
// Built-in form validation uses HTML form validation features, which we've discussed in many places throughout this module. This validation generally doesn't require much JavaScript. Built-in form validation has better performance than JavaScript, but it is not as customizable as JavaScript validation.

// JavaScript validation is coded using JavaScript. This validation is completely customizable, but you need to create it all (or use a library)


// Constraint validation

// In HTML, basic constraints are declared in two ways:
// By choosing the most semantically appropriate value for the type attribute of the <input> element, e.g., choosing the email type automatically creates a constraint that checks whether the value is a valid email address.

// By setting values on validation-related attributes, allowing basic constraints to be described in a simple way, without the need for JavaScript.

// Complex constraints using the Constraint Validation API
// Using JavaScript and the Constraint API, it is possible to implement more complex constraints, for example, constraints combining several fields, or constraints involving complex calculations.
// to trigger JavaScript on some form field event (like onchange) to calculate whether the constraint is violated, and then to use the method field.setCustomValidity() to set the result of the validation: an empty string means the constraint is satisfied, and any other string means there is an error and this string is the error message to display to the user.

<form>
  <label for="ZIP">ZIP : </label>
  <input type="text" id="ZIP" />
  <label for="Country">Country : </label>
  <select id="Country">
    <option value="ch">Switzerland</option>
    <option value="fr">France</option>
    <option value="de">Germany</option>
    <option value="nl">The Netherlands</option>
  </select>
  <input type="submit" value="Validate" />
</form>

// First, we write a function checking the constraint itself:
function checkZIP() {
    // For each country, defines the pattern that the ZIP has to follow
    const constraints = {
      ch: [
        "^(CH-)?\\d{4}$",
        "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
      ],
      fr: [
        "^(F-)?\\d{5}$",
        "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
      ],
      de: [
        "^(D-)?\\d{5}$",
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
      ],
      nl: [
        "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
        "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
      ],
    };
  
    // Read the country id
    const country = document.getElementById("Country").value;
  
    // Get the NPA field
    const ZIPField = document.getElementById("ZIP");
  
    // Build the constraint checker
    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
  
    // Check it!
    if (constraint.test(ZIPField.value)) {
      // The ZIP follows the constraint, we use the ConstraintAPI to tell it
      ZIPField.setCustomValidity("");
    } else {
      // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
      // give a message about the format required for this country
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

// Then we link it to the onchange event for the <select> and the oninput event for the <input>:
window.onload = () => {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
  };
  