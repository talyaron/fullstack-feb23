# Big Project Assignment:

This project is meant to summarize React.js and MySQL. You will begin working only on the front end now.

## General Main Requirements:

1. This project should include at least four screens, including login and registration pages. (2 more other than that: fashboard, product page, etc.) with navigatin with react-router-dom

2. This project should include user authentication (login and register).

3. The project should contain user-specific data. Example: user products, user cart with items, user favorites, user saved items, etc.

4. The project should be pleasing to look at. You can use component libraries, but if you do, you must customize them!

### FrontEnd

*Code:*
1. You must write the frontend in React, and it must include at least two pages except for the login and registration page, which must be there (a total of at least four pages). You must maintain an orderly hierarchy in your folder tree (keep views/pages separate from components, as well as features).

2. The application must include navigation using react-router-dom.

3. The application must include at least one global state, (redux, not context) - preferably of the connected user

4. The application must include elements of CRUD - creation, reading, updating and deletion, of one of the schemes, through the client side (for example, in the friends scheme - creation of a new member, reading of all my friends, deletion of the member. An update can be an update of an alias to a member, or adding to favorites...) - it is possible for some changes to exist only in one scheme, and other changes in another scheme (for example, you cannot edit members, but a user can edit his details).

5. Show the user information when nessesry, like password requiremnts, before they make a mistake, and show errors clearly (as a text that appears below the input or using a third-party library like toast)

*Design:*

--- It is not necessary to use BEM, only clear name that can be understood immediately ---

- Be sure to have a uniform and balanced design:

1. Readble font on the background.

2. Do not use a basic design that comes with the HTML (for example: there should be no floating inputs at the top of the screen), or if using a component library, customize it so that it will not appear "factory made"

3. A score will be given for responsiveness in WEB sizes only (there is no need to adapt to a phone or tablet, only that it responds to different computer screen sizes)

4. It is necessary to maintain order in your class names.


### Backend -

A login/register system with password instructions, and validation of what is sent by the user, which sends a JWT-TOKEN (possible in cookies or other local storage). Some paths (at least one) should be protected using middleware (for example, only a logged in user can see their details, or edit them).

2-4 tables
user + login/register
user unique data ("my products")
search by a certain word (for example product search, at the beginning of the word already starts searching)