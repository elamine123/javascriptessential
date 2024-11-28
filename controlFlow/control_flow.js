let userRole="Admin";
let accessLevel;

if(userRole==="Admin"){
    accessLevel="Full access granted";
}else if(userRole==="Manager"){
    accessLevel="Limited access garanted";
}else{
    accessLevel="No access garanted";
}

console.log("access Level :",accessLevel)

let isLoggedIn=true;
let userMessage;

if(isLoggedIn){
    if(userRole="Admin"){
        userMessage="Welcome, Admin!";}
    else{
        userMessage="Welcome, User!";
    }
}else{
    userMessage="please log in to access the system.";
}
console.log("User Message : ",userMessage);

let userType="Subscriber";
let userCategory;

switch(userType){
    case "Admin":
    userCategory="Administartion";
    break;
    case "Manager":
    userCategory="Manager";
    break;
    case "Subscriber":
    userCategory="Subscriber";
    break;
    default:
        userCategory="Unknown"
}
console.log("User Category :",userCategory);
let isAuthenticated =true;
let authenticatedStatus= isAuthenticated ? "Authenticated":"Not Authenticated";
console.log("Authentication Status :",authenticatedStatus);