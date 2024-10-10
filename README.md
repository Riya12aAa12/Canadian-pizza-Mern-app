# Pizza Shop Web Application

Implemented a full-stack web application focusing on user and admin portals, integrating payment gateway, database, and backend functionalities. Admin features include managing orders, adding, deleting, and editing pizza items, while users can place orders seamlessly. Technologies: React.js, Node.js, Express.js, MongoDB.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token) for user authentication and authorization
- **Payment Gateway:** Stripe for handling online payments

## Features

- **User Registration and Authentication:** Users can register and log in using JWT tokens stored in cookies.
- **Order Management:** Users can place orders for pizzas.
- **Admin Management:** Admins can view all orders, add, delete, and edit pizza items on the website.
- **Payment Integration:** Secure payment gateway integration for handling transactions.
- **Responsive Design:** Ensures a seamless experience across devices.

## Demo

Explore the Pizza Shop Web Application live:

### Frontend

The frontend is built using React.js and provides an intuitive user interface for both users and admins. Key features include:

- **User Registration and Authentication:** Secure login and registration system.
- **Order Placement:** Users can easily place orders for their favorite pizzas.
- **Admin Controls:** Admins can manage pizza items and view all orders.

Explore the frontend live: [Pizza Shop Frontend](https://pizza-virus.netlify.app/)

### Backend

The backend is powered by Node.js and Express.js, providing a robust server-side architecture. MongoDB serves as the database for storing user information, orders, and pizza details. Key backend features include:

- **RESTful APIs:** Implements APIs for user registration, authentication, order management, and pizza item management.
- **Payment Integration:** Securely handles payment transactions.
- **Deployment:** Hosted on Render for reliable server-side execution and scalability.

Explore the backend live: [Pizza Shop Backend](https://pizza-virus.onrender.com/)

## Usage

1. Register or login to access the file upload functionality.
2. Upload a file using the provided interface.
3. Once uploaded, copy the generated link and share it with others.
4. Recipients can download the file using the shared link.

## Postman API Collection

Explore and test the APIs of the Pizza Shop Web Application using the Postman API Collection.

[Pizza Shop Postman API Collection](https://documenter.getpostman.com/view/29969708/2sA3Bj7YcT/)

This collection includes APIs for user registration, authentication, order management, pizza item management, and payment processing.

## How to Run Locally

To run the project locally, follow these steps:

````
2. Navigate to the project directory:
```sh
cd pizza-shop-web-app
````

3. Install dependencies for both frontend and backend:
   ```sh
   cd frontend
    npm install
    cd ../backend
    npm install
   ```
4. Configure MongoDB:

- Ensure MongoDB is installed and running locally or provide a MongoDB URI.
- Update the MongoDB URI in the backend configuration files if necessary.

5. Start the server:
   ```sh
    cd ../backend
    npm start
   ```
6. Start the frontend:
   ```sh
    cd ../frontend
    npm start
   ```
7. Open your browser and visit http://localhost:3000 to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
