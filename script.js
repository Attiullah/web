// Hamburger menu open and close fuction
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const customer_name = document.getElementById("name");
const customer_email = document.getElementById("email");
const customer_message = document.getElementById("message");
const customer_subject = document.getElementById("subject");
const form = document.getElementById("form");
const natural_oil = document.getElementById("natural-oil");
const tbody = document.getElementById("tbody");

let customer_products = [];
function SendMail() {
    var params = {
        from_name: customer_name.value,
        email_id: customer_email.value,
        message: customer_message.value,
        subject: customer_subject.value,
    }
    emailjs.send("service_z9h8bpq", "template_mlxzyya", params, "2d23Vt6q2BhkMKC6h").then(function(res) {
        alert("Success" + res.status);
    },function(error) {
        console.log('FAILED...', error);
     });
}

const handleBuy = e => {
    e.preventDefault();
    let parent = e.target.previousElementSibling;
    let price = e.target.previousElementSibling.lastElementChild.innerHTML;
    let name = parent.children[1].innerHTML;
    let img = parent.previousElementSibling.src
    // console.log(parent.previousElementSibling.src);
    customer_products.push({
        name: name,
        price: price,
        img: img,
    });
    db();
}

const db = () => {
    const itemInDb = localStorage.getItem("userProducts");
    console.log(db);
}

const displayProduct = () => {
    for (item in customer_products) {
        console.log(item);
    }
}

console.log(customer_products);

natural_oil.addEventListener("click", handleBuy);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    SendMail();
})

if(bar){
    bar.addEventListener('click', ()=> {
    nav.classList.add('active'); 
    })
}
if(close){
    close.addEventListener('click', ()=> {
    nav.classList.remove('active'); 
    })
}

