function submitFeedback(){
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const email=document.getElementById("email").value;
    const job=document.getElementById("job").value;
    const designation=document.getElementById("designation").value;
    const feedback=document.getElementById("feedback").value;
    const productType=document.getElementById("productType").value;
    const experience=document.getElementById("experience").value
    alert('Thank you for your valuable feedback');
    document.getElementById("userName").innerHTML=name;
    document.getElementById("userAge").innerHTML=age;
    document.getElementById("userJob").innerHTML=job;
    document.getElementById("userEmail").innerHTML=email;
    document.getElementById("userDesignation").innerHTML=designation;
    document.getElementById("userfeedback").innerHTML=feedback;
    document.getElementById("userExperience").innerHTML=experience;
    document.getElementById("userProductChoice").innerHTML=productType;
    document.getElementById("userInfo").style.display='block';
}

const submitButton=document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        submitFeedback();
    }
});