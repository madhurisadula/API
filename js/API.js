let API = 'https://dummyjson.com/products';
let div = document.getElementById('container');

async function ADDTOCART(){
    let data = await fetch(API);
    let product = await data.json();
console.log(product)
    product.products.forEach((Element)=>{
        let NewElement = document.createElement('div');
        NewElement.classList.add('card');
        NewElement.innerHTML = `    <img src="${Element.images}" alt='myimage'>
                                    <h2>${Element.title}</h2>
                                    <p>${Element.description}</p>
                                    <div class="ski">
                                        <h4>$${Element.price}</h4>
                                        <button onclick="views(${Element.id})">View</button>
                                        <button onclick="addToCart(${Element.id})">Add to Cart</button>
                                    </div>
                                `;
        div.appendChild(NewElement); 
    }) 
}
ADDTOCART()

function addToCart(id){
    console.log(id)
}

async function views(id){
    let data = await fetch(API);
    let Ndata = await data.json();
    let Output = Ndata.products.filter((e)=>e.id === id);
    console.log(Output)
    localStorage.setItem("Luci",JSON.stringify(Output))
    window.location.href="Next-Page.html"

}
// views()