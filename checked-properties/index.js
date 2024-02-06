// .checked = property that determines the checked state of an 
//            HTML checkbox or radio button element

// Accessing elements from our web page (index.html)
const mycheckBox = document.getElementById("mycheckBox");

const visaBtn = document.getElementById("visaBtn");

const masterCardBtn= document.getElementById("masterCardBtn");

const payPalBtn = document.getElementById("payPalBtn");

const myBtn = document.getElementById("myBtn");

const refresh = document.getElementById("refresh");

const p1 = document.getElementById("p1");

const p2 = document.getElementById("p2");



const visaBtn1 = document.getElementById("visaBtn1");
const masterCardBtn1 = document.getElementById("masterCardBtn1");
const payPalBtn1 = document.getElementById("payPalBtn1");


// Defining an event handler for the submit button
myBtn.onclick = function(){
    // code to be executed when you click the button
    if (mycheckBox.checked){
        p1.textContent = `You are subscribed!!!`;
    }
    else{
        p1.textContent = `You are not subscribed!!!`;
    }

    if(visaBtn.checked){
        val = visaBtn1.textContent;
        p2.textContent = `You are paying with ${val}`;
    }
    else if(masterCardBtn.checked){
        val = masterCardBtn1.textContent;
        p2.textContent = `You are paying with ${val}`;
    }
    else if(payPalBtn.checked){
        val = payPalBtn1.textContent;
        p2.textContent = `You are paying with ${val}`;
    }
    else{
        p2.textContent = `You must select a payment type...`;
    }
}

// Defining an event handler for the refresh button

refresh.onclick = function(){
    // code to be executed when you click the button
    mycheckBox.checked = false;
    visaBtn.checked = false;
    masterCardBtn.checked = false;
    payPalBtn.checked = false;
    val = p1.textContent = ` `;
    p2.textContent = ` `;
}
