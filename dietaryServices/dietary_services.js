let userRole="Non-Subscriber";
let accessLevel;
let isSubscribed=true;
let subscribtionStatus= isSubscribed? " subscribed":"Not Subscribed"
if(subscribtionStatus==="subscribed"){
    if(userRole="Empolyee"){
        accessLevel="authorized to have access to -Dietary Services-"; 
    }else if(userRole="Enrolled Member"){
        accessLevel="authorized to have access to -Dietary Services- and one-on-one interaction with a dietician";
    }else{
        accessLevel="authorized to have partial access to facilitate -Dietary Services- only";
    }

}else{
    accessLevel="you need to enroll or at least subscribe first to avail this facility"
}

console.log("User role :",userRole );
console.log("Access level :",accessLevel)