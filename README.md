# MVC-tech-blog

## Description

The Tech Blog is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts as well. 

## Table of Contents
* [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
* [Built With](#built-with)
* [Installation](#installation)
* [Links](#links)
* [Images](#images)

---
## User Story and Acceptance Criteria


### User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
```
```
WHEN I click on the homepage option
THEN I am taken to the homepage
```
```
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
```
```
WHEN I choose to sign up
THEN I am prompted to create a username and password
```
```
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
```
```
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
```
```
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
```
```
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
```
```
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
```
```
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
```
```
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
```
```
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
```
```
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
```
```
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
```
```
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
```
```
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 
```

---
## Built With
* This application was built using Model View Controller (MVC) paradigm.
* Node
* Express
* MySQL
* Sequelize
* Dotenv
* Handlebars.js
* Bulma (CSS Framework)

---
## Installation
* Both Node.js and MySQL must be installed on your computer
* Clone the repo https://github.com/sgenesi/MVC-tech-blog 
* Add a .env file to the root of your project
```
DB_NAME='tech_blog_db
DB_USER='root
DB_PW='your sequelize password'
```
* Navigate to your root directory and run <code>npm install</code>
* To start server, run <code>npm start</code> in your command line

---
## Links
* Deployed Application: https://stark-headland-66540.herokuapp.com 
* GitHub Repo: https://github.com/sgenesi/MVC-tech-blog

---
## Images

### Desktop View

1440px X 1112px

Login/Sign Up Page:
![image](https://user-images.githubusercontent.com/71858457/111890878-497cd080-89b3-11eb-9106-7f319d9be3af.png)

Homepage:
![image](https://user-images.githubusercontent.com/71858457/111890890-729d6100-89b3-11eb-8ba9-e5c66c01288b.png)

Dashboard:
![image](https://user-images.githubusercontent.com/71858457/111890892-7630e800-89b3-11eb-8f48-c4b3068c5872.png)

Create Post:
![image](https://user-images.githubusercontent.com/71858457/111890894-79c46f00-89b3-11eb-8798-ce8ba07bda99.png)

### iPad View

768px X 1024px

Login/Sign Up Page:
![image](https://user-images.githubusercontent.com/71858457/111890913-ad9f9480-89b3-11eb-8384-63355aa3da46.png)

Homepage:
![image](https://user-images.githubusercontent.com/71858457/111890917-b001ee80-89b3-11eb-8c32-209fe2d98701.png)

Dashboard:
![image](https://user-images.githubusercontent.com/71858457/111890919-b3957580-89b3-11eb-9adf-5ca5de087045.png)

Create Post:
![image](https://user-images.githubusercontent.com/71858457/111890920-b8f2c000-89b3-11eb-91fb-7eb80c95063a.png)

### iPhone 6 View

375px X 667px

Login/Sign Up Page:
![image](https://user-images.githubusercontent.com/71858457/111890936-db84d900-89b3-11eb-9e82-d80963ebff99.png)

Homepage:
![image](https://user-images.githubusercontent.com/71858457/111890939-dde73300-89b3-11eb-9764-a0c1091818cb.png)

Dashboard:
![image](https://user-images.githubusercontent.com/71858457/111890941-dfb0f680-89b3-11eb-9bdf-b6a20e374bd1.png)

Create Post:
![image](https://user-images.githubusercontent.com/71858457/111890942-e2135080-89b3-11eb-9373-8282204589d6.png)

