let products=JSON.parse(localStorage.getItem("products"))||[
{id:1,name:"گوشی سامسونگ",price:12000000},
{id:2,name:"لپ‌تاپ لنوو",price:35000000},
{id:3,name:"هدفون بلوتوث",price:1500000}
];
localStorage.setItem("products",JSON.stringify(products));
