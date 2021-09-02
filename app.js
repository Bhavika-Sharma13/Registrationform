function checkpwdpat(){
    var password= document.getElementById("password").value;
    var pattern= /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_])[\w!@#$%^&*]{6,}$/;
    if (pattern.test(password)==false) {
        document.getElementById("wpwd").style.display="inline-block";
        document.getElementById("password").value="";
    }
    else{
        document.getElementById("wpwd").style.display="none";
    }

}

function reg(){
    if (document.getElementById("uname").value==""||document.getElementById("email").value==""||document.getElementById("password").value=="") {
        document.getElementById("success").style.display="none";  
        
    }
    else{
        document.getElementById("success").style.display="inline-block";
    }
}