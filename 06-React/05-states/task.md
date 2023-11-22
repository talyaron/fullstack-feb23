## Task 1.
 create new project named after your name. Inside off the src directory create a new directory components to store your new components. Create file src/components/User.tsx and update the src/App.tsx.

## Task 2.
pass a user object to User.tsx. user must have a name, lastname and a counter (number). create at leat 3 users and render them.

## Task 3.
for each user render a counter. the counter should have a + button and a - button, and add 1 or substract 1 from the user's counter.

## Task 4.
Create a new functional component Navbar.tsx. whenever you click on one of the users car, the navbar header will change to the current user name. 

## Task 5
after clicking 5 times per user counter, the background of the card should change to a random color.

## Task 6
add an emoji to the user objects (click winki + . on microsoft)
only show the emoji if the user's counter is dvideble by 10. the emjo shouldn't be mandatory, so make at least 1 user that doesn't have one, and make sure to deal with a user without an emoji.

## task 7
create a blog post component. it should have a nice card design, a title and a body. both should be strings.
on button click from App.tsx , add a new blog post. user should be prompt for a body, and the title should be "title". create a uniqe key. in the post add 2 buttons: Edit and Delete.
Edit should prompt the user for a new body. delete should delete the post.

## task 8 
add to the blog post which user "written" it. use the name of the user that appears on the navbar.