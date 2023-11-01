const mainDiv=document.getElementById("main");

const h3=document.createElement("h3");
h3.innerText="Signup Form"
mainDiv.appendChild(h3);


function generateElement(placeholder,inputType,btnId,btnText){

const d1=document.createElement("div");
const t1=document.createElement("input");
const b1=document.createElement("button");

d1.setAttribute("class","input-group mb-3");

t1.setAttribute("type",inputType);
t1.setAttribute("class","form-control" );
t1.setAttribute("placeholder",placeholder);
t1.setAttribute("aria-describedby",btnId)

b1.setAttribute("class","btn btn-outline-secondary");
b1.setAttribute("type","button");
b1.setAttribute("id", btnId);
b1.innerText=btnText

d1.appendChild(t1);
d1.appendChild(b1);

mainDiv.appendChild(d1);
}
generateElement("username","text","btn1","OK");
generateElement("Password","password","btn2","Enter");
generateElement("Retype password","password","btn3","Verify");
generateElement("Email Id","email","btn4","@");
generateElement("Mobile","number","btn5","verify");
generateElement("city","text","btn6","submit");
generateElement("Color","color","btn7","Enter color")
