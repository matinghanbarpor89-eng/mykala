const list=document.getElementById("productList");
products.forEach(p=>{
 list.innerHTML+=`
 <div class="card">
  <h4>${p.name}</h4>
  <p>${p.price.toLocaleString()} تومان</p>
  <button onclick="addToCart(${p.id})">افزودن</button>
 </div>`;
});
