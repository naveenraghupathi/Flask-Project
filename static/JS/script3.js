// create an array of product objects
const products2 = [{    imgSrc: "static/img/products/p9.jpg",    brand: "adidas",    title: "Mens Casual Shirt",    rating: 5,    price: 50  },  {    imgSrc: "static/img/products/p10.jpg",    brand: "adidas",    title: "Mens Linen Shirt",    rating: 5,    price: 60,  },{    imgSrc: "static/img/products/p11.jpg",    brand: "adidas",    title: "Mens Cotton Shirt",    rating: 5,    price: 70,  },{    imgSrc: "static/img/products/p12.jpg",    brand: "adidas",    title: "Mens Printed Casual Shirt",    rating: 5,    price: 80,  },
                  {    imgSrc: "static/img/products/p14.jpg",    brand: "adidas",    title: "Mens Short",    rating: 5,    price: 90,  },{    imgSrc: "static/img/products/p15.jpg",    brand: "adidas",    title: "Mens Half Sleeves Shirt",    rating: 5,    price: 100,  },{    imgSrc: "static/img/products/p2.jpg",    brand: "adidas",    title: "Mens Floral Shirt",    rating: 5,    price: 110,  },{    imgSrc: "static/img/products/p1.jpg",    brand: "adidas",    title: "Mens Abstarct Shirt",    rating: 5,    price: 120,  },
                  ];

// select the container element for the products
let proContainer2 = document.querySelector('.pro-container2');

// iterate over the products array and dynamically allocate HTML for each product
products2.forEach((product) => {
  const productHTML = `
    <div class="pro" onclick="window.location.href='item';">
      <img src="${product.imgSrc}" alt="">
      <div class="des">
        <span>${product.brand}</span>
        <h5>${product.title}</h5>
        <div class="star">
          ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
          ${'<i class="far fa-star"></i>'.repeat(5 - product.rating)}
        </div>
        <h4>$${product.price}</h4>
      </div>
      <a href=""><i class="fal fa-shopping-cart cart"></i></a>
      <a href=""><i class="fal fa-heart heart"></i></a>
    </div>
  `;
  
  // append the product HTML to the container element
  proContainer2.innerHTML += productHTML;
});
