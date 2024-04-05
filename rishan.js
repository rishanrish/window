 function sendMail(){
   var  params={
    name:document.getElementById("inputName").value,
    place:document.getElementById("inputPlace").value,
    Email:document.getElementById("inputEmail").value,
    mobile:document.getElementById("inputnobr").value,
    comment:document.getElementById("comment").value,
   };
 
 const  serviceId="service_k2s0js5";
const templateID="template_soybdvb"

emailjs.send(serviceId,templateID,params)
.then((res)=>{
         document.getElementById("inputName").value =  ""  ;
         document.getElementById("inputPlace").value =  "" ;
         document.getElementById("inputEmail").value =  "" ;
         document.getElementById("inputnobr").value =  "" ;
         document.getElementById("comment").value =  ""    ;
         console.log(res)
         alert("Your message send succesfully") ;
    }
).catch((err)=> console.log(err)) ;   
}

 
