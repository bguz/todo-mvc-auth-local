# Introduction

A Simple ToDo App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app 

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

# Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used 

bcrypt - encrypting all passwords, 
connect-mongo - used to connect mongo, 
dotenv - used to use secret environment variables (.env), 
ejs - templating engine, 
express - used to set up our server easily and quickly by adding an abstraction layers to node, 
express-flash - flash is an extension of connect-flash with the ability to define a flash message and render it without redirecting the request, 
express-session - used when we log in, saves information of the user, 
mongodb - used to do stuff with mongodb, 
mongoose - used to create schemas that mongodb use, 
morgan - displays logs nicely, 
nodemon - restarts the server automatically, 
passport - handles authentication for us, 
passport-local - user registers locally, we store in our db just between us and the user no google auth or github auth, 
validator - used to send errors if information is not correct and to sanitize (prevent invalid passwords or sql injections).

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 
 Have fun testing and improving it! 😎


