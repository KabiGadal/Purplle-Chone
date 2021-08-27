let product = JSON.parse(localStorage.getItem('product'));
let index = JSON.parse(localStorage.getItem('index'));

// console.log(product);
// console.log(index)

function showDesc() {
  let desc_1 = document.getElementById("c1-slider_1");
  let div = document.createElement("div");

  let name = document.createElement("p");
  name.innerHTML = product[index].desc;

// //   let detail = document.createElement("p");
// //   detail.innerHTML = product[index].desc;

  let price = document.createElement("h3");
  price.innerHTML = product[index].price;



//   let actualPrice = document.createElement("h2");
//   actualPrice.innerHTML = product[index].price_1;

  // let innerDiv = document.createElement("div");

  let rating = document.createElement("button");
  rating.innerText = product[index].rating;
  rating.setAttribute('class','rating')
  
  let span = document.createElement('span');
  span.innerText = product[index].span;

  let off = document.createElement('span');
  off.innerHTML = `MRP 205`;
  off.setAttribute('class', 'off');

  let percetage = document.createElement('div')
  percetage.innerText = `Save ₹41 (20%) off`
  percetage.setAttribute('class', 'perct');

  let price_div = document.createElement('div');
  price_div.append(price, off,percetage)
  price_div.setAttribute('class','prc')

  let seller_tag = document.createElement('img');
  seller_tag.src='data:image/jpeg;base64,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'
  seller_tag.setAttribute('width', '117px')
  seller_tag.setAttribute('height', '50px')
  
  let off_img = document.createElement('img');
  off_img.src = 'https://www.vhv.rs/dpng/d/409-4091047_price-tag-label-png-download-blank-price-tag.png';
  off_img.setAttribute('class', 'off_image')
  

  let off_div = document.createElement('div')
  off_div.innerHTML = `Choose your free gift worth Rs. 249 on cart orders above <br> Rs. 249 across Good Vibes.Offers is not
  valid on Sheet Masks & Selected products. `
  off_div.setAttribute('class','off_div')

  let offer_div = document.createElement('div')
  offer_div.setAttribute('class', 'offer_div')
  offer_div.append(off_img,off_div)
  

   let off_img1 = document.createElement('img');
  off_img1.src = 'https://www.vhv.rs/dpng/d/409-4091047_price-tag-label-png-download-blank-price-tag.png';
  off_img1.setAttribute('class', 'off_image')
  

  let off_div1 = document.createElement('div')
  off_div1.innerHTML = `For Elite - Choose Your FREE Liquid Lipstick worth Rs. 449 on cart orders
  above Rs. 1199 across Good Vibes, Goodness, NY Bae, Stay Quirky, Purplle, DermDoc, Asfa Halal & Vayam
  Ayurveda.`
  off_div1.setAttribute('class','off_div')

  let offer_div1 = document.createElement('div')
  offer_div1.setAttribute('class', 'offer_div')
  offer_div1.append(off_img1, off_div1)
  
  let one_more = document.createElement('div');
  one_more.innerHTML = ` +1 more offers`;
  one_more.setAttribute('class', 'one_more');

  let quan_btn1 = document.createElement('button')
  quan_btn1.innerHTML = `200ml <span style='color:grey'>₹216</span>`;
  quan_btn1.setAttribute('class', 'quan');

  let quan_btn2 = document.createElement('button')
  quan_btn2.innerHTML = `120ml<span style='color:grey'>₹164</span>`;
  quan_btn2.setAttribute('class', 'quan');

  let quan_btn3 = document.createElement('button')
  quan_btn3.innerHTML = `120ml <span style='color:grey'>₹164</span>`;
  quan_btn3.setAttribute('class', 'quan');

  let quantity_div = document.createElement('div');
  quantity_div.setAttribute('class', 'quantity_div')
  quantity_div.append(quan_btn1,quan_btn2,quan_btn3)
  // let color_div = document.getElementById("colorbox");

//   let img_6 = document.createElement("img");
//   img_6.src = product[index].img_5;
//   color_div.append(img_6);

  div.append(name,rating,span,price_div,seller_tag,offer_div,offer_div1,one_more,quantity_div);

  desc_1.append(div);
}
showDesc();
// console.log(product[index].desc)

function productDescc() {
    let img_1 = document.getElementById("img_1");
    console.log(img_1)
  let img_2 = document.getElementById("img_2");
  let img_3 = document.getElementById("img_3");
  let img_4 = document.getElementById("img_4");
  let img_5 = document.getElementById("img_5");

  img_1.src = product[index].img_1;
  img_2.src = product[index].img_2;
  img_3.src = product[index].img_3;
  img_4.src = product[index].img_4;
  img_5.src = product[index].img_5;

  let main_1 = document.getElementById("main_1");
  let main_2 = document.getElementById("main_2");
  let main_3 = document.getElementById("main_3");
  let main_4 = document.getElementById("main_4");
  let main_5 = document.getElementById("main_5");

  main_1.src = product[index].img_1;
  main_2.src = product[index].img_2;
  main_3.src = product[index].img_3;
  main_4.src = product[index].img_4;
  main_5.src = product[index].img_5;
}

productDescc();

function addToCart() {
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  cart.push(product[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
