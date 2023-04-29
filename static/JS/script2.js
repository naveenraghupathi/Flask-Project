// create an array of product objects
const products1 = [{    imgSrc: "static/img/products/p1.jpg",    brand: "adidas",    title: "Abstract Shirt",    rating: 5,    price: 50  },  {    imgSrc: "static/img/products/p2.jpg",    brand: "adidas",    title: "Graphic Shirt",    rating: 5,    price: 60,  },{    imgSrc: "static/img/products/p3.jpg",    brand: "adidas",    title: "Mens Printed Shirt",    rating: 5,    price: 70,  },{    imgSrc: "static/img/products/p4.jpg",    brand: "adidas",    title: "Mens Floral Shirt",    rating: 5,    price: 80,  },
                  {    imgSrc: "static/img/products/p5.jpg",    brand: "adidas",    title: "Mens Floral Shirt",    rating: 5,    price: 90,  },{    imgSrc: "static/img/products/p6.jpg",    brand: "adidas",    title: "Mens Pullover",    rating: 5,    price: 100,  },{    imgSrc: "static/img/products/p7.jpg",    brand: "adidas",    title: "Womens Palazzo",    rating: 5,    price: 110,  },{    imgSrc: "static/img/products/p8.jpg",    brand: "adidas",    title: "Womens Printed Top",    rating: 5,    price: 120,  },
                ];

// select the container element for the products
const proContainer1 = document.querySelector('.pro-container1');
// iterate over the products array and dynamically allocate HTML for each product
products1.forEach((product) => {
  console.log(product)
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
  proContainer1.innerHTML += productHTML;
});
