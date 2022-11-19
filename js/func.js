// Function 

// Method = Built-in Functions!

// Function Declaration Syntax:

// Function provide reusable code


function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("lchlebosz@gmail.com"));

function getUserNameFromEmail1(email, password)  {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail1("aleksandrakrakowiak@gmail.com"))

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("LuCaS"))