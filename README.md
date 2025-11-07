# 🚀 Node.js REST API Project (Build a simple shop API)

I've built a simple REST API in Node.js with a MVC software architecture simulating a basic shop API by following the [Building a RESTful API Academind Course](https://academind.com/tutorials/building-a-restful-api-with-nodejs) course.                                                           
It was an optional side course suggested in the main course I was taking at the time - [Vue - The Complete Guide (incl. Router & Composition API)](https://www.udemy.com/course/vuejs-2-the-complete-guide/) Udemy course. 

## Diagram
<img src="images/project-details/diagram.png" style="width:75%;">

## Routes
<img src="images/project-details/routes.png" style="width:75%;">

<br>

## Project Specifics:
- <u>Core Runtime</u>: `Node.js` (v20.19.5 for modern ES modules and async/await support).
- <u>API Framework</u>: `Express.js` for routing and middleware handling with endpoints for CRUD operations (Create, Read, Update, Delete) on items such as users, products or orders, emphasizing API design principles like statelessness, resource-based routing, and HTTP methods (GET, POST, PUT, DELETE).
- <u>Tools</u>: `Nodemon` - automatically restarting the Node.js application when file changes in the directory are detected.
- <u>Database</u>: `MongoDB Atlas` together with `Mongoose` for the object modeling in the MVC software architecture of the API project.
- <u>APIs</u>: `Postman` for testing the API project by providing a user-friendly interface for making requests, viewing responses, and debugging issues.
- <u>Middlewares</u>: 
    - `Multer` is the Node.js middleware for handling multipart/form-data in this API project, which is primarily used for uploading files for products. 
    - `express-async-handler` - for handling exceptions inside of async express routes and passing them to the express error handlers. 
    - `Mongan` - HTTP request logger middleware for Node.js
- <u>Authentication</u>: `JSON Web Token (JWT)` together with `bcrypt` for hashing passwords.    
- <u>Other</u>: The project is using `body-parser` package to parse the body of an incoming requests, because it's not nicely formatted and easily readable by default in Node.js. As a result we can then use the formatted data of the body of an incoming requests. The package doesnt support files, but it supports URL encoded bodies and json data.

## Main Features:
- Authentication of users.
- Endpoints for signin and logging for users:
    - /signup, 
    - /login.
- Endpoints for managing shop inventory and orders:
    - /products for listing items, 
    - /products/:id for individual product details, 
    - /orders for listing orders, 
    - /orders/:id for individual order details.
- Basic error handling and response formatting.

## 📸 Screenshots

<details>
<summary>🔐🔑 Operations that need Authentication</summary>

### Sign Up:                                                                                                                                  

<img src="images/user-signup/signup-authorization.png" style="width:75%;">
<img src="images/user-signup/signup-headers.png" style="width:75%;">
<img src="images/user-signup/signup-body-and-response.png" style="width:75%;">

### Log in:                                                                                                                                   

<img src="images/user-login/login-authorization.png" style="width:75%;">
<img src="images/user-login/login-headers.png" style="width:75%;">
<img src="images/user-login/login-body-and-response.png" style="width:75%;">

### Post Product:

<img src="images/post-product/post-product-authorization.png" style="width:75%;">
<img src="images/post-product/post-product-headers.png" style="width:75%;">
<img src="images/post-product/post-product-body-and-response.png" style="width:75%;">

### Post Orders:

<img src="images/post-order/post-order-authorization.png" style="width:75%;">
<img src="images/post-order/post-order-headers.png" style="width:75%;">
<img src="images/post-order/post-order-body-and-response.png" style="width:75%;">

### Get New Order:

<img src="images/get-new-order/get-new-order-authorization.png" style="width:75%;">
<img src="images/get-new-order/get-new-order.png" style="width:75%;">

### Get All Orders:

<img src="images/get-all-orders/get-all-orders-authorization.png" style="width:75%;">
<img src="images/get-all-orders/get-all-orders-headers.png" style="width:75%;">
<img src="images/get-all-orders/get-all-orders.png" style="width:75%;">

### Update Product:

<img src="images/update-product/update-product-authorization.png" style="width:75%;">
<img src="images/update-product/update-product-headers.png" style="width:75%;">
<img src="images/update-product/update-product-body-and-response.png" style="width:75%;">
<img src="images/update-product/get-updated-product.png" style="width:75%;">

### Delete Product:

<img src="images/delete-product/delete-product-authorization.png" style="width:75%;">
<img src="images/delete-product/delete-product-headers-and-response.png" style="width:75%;">

### Delete Order:

<img src="images/delete-order/delete-order-authorization.png" style="width:75%;">
<img src="images/delete-order/delete-order-headers-and-response.png" style="width:75%;">

</details>

<details>
<summary>🔓 Operations that DO NOT need Authentication</summary>

### Get New Product:

<img src="images/get-new-product/get-new-product.png" style="width:75%;">

### Get New Product Image:

<img src="images/get-new-product/get-new-product-image.png" style="width:75%;">

### GET All Products:

<img src="images/get-all-products.png" style="width:75%;">

</details>


## Setup
Make sure to install the dependencies:
```bash
$ npm i
```

## Development Server
Start the development server:
```bash
$ npm run start
```

## 🌟 Inspiration & Credits:            
▶️ [Vue - The Complete Guide (incl. Router & Composition API)](https://www.udemy.com/course/vuejs-2-the-complete-guide/)      
📂 [Building a RESTful API Academind Course](https://academind.com/tutorials/building-a-restful-api-with-nodejs)    
🎞️ [Building a RESTful API with Node.js Academind [Youtube]](https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)          
🪁 [JWT Debugger](https://www.jwt.io/)                                                                                                                     
:bar_chart: [GitDiagram](https://gitdiagram.com/) 

---
  
🙌 Thanks for checking out my project! More coming 🔜.                                                                                           
Stay tuned 🚀 and don't forget to give the project a star!                                                                                       
⭐ Made with lots of 💗, ☕, and a sprinkle of ✨ by Ralitsa Voronevska!      