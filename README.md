1 Relational Database - Sequelize ORM

This is a simple backend for Social Network with User and Post relationship.

2 Database Relationship
- User has many Posts
- Post belongs to User
- Foreign Key: userId
- onDelete: CASCADE

3 Technologies
- Node.js, Express.js
- Sequelize ORM
- MySQL

4 How to Install and Run

1. Clone the repo
   git clone https://github.com/YOUR_USERNAME/Social_network.git

2. Enter folder
   cd Social_network

3. Install packages
   npm install

4. Create .env file
   DB_NAME=social_db
   DB_USER=root
   DB_PASS=password
   DB_HOST=localhost
   PORT=3000

5. Run migrations
   npx sequelize-cli db:migrate

6. Start server
   npm run code

Server will run on http://localhost:3000