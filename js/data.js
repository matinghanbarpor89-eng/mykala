let products=JSON.parse(localStorage.getItem("products"))||[
{id:1,name:"گوشی",price:1000000,img:"https://picsum.photos/200"}
];
function saveProducts(){localStorage.setItem("products",JSON.stringify(products));}