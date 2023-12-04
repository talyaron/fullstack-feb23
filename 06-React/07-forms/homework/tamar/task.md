## homework task
# please follow these instructions as best as you can.

1. create a login component. it should look as similar as possible as this (right screen only):
https://dribbble.com/shots/4562327-Login-App-Mindfulness
## instead of email, use username

**please note:**
make sure it looks as similar as possible. even if there are buttons that don't do anything, make sure they exist and does not break your code.
-->done
-------------------
2. a user may enter his username and password and with a POST request check if that user can log in.
https://dummyjson.com/docs/auth
-- if a user has successfully logged in, save the user to a state in the App.tsx component, and the token to the session storage.
<!-- localStorage.setItem("userID", ID)
sessionStorage.setItem("userID", ID) -->
-->done

--------------------
3. using conditional rendering, if the user state is filled, render a diffrent component that is called UserPosts. the component should, on Mount, get all the users posts via the user Id.
https://dummyjson.com/docs/posts
(find the correct request)

the posts should be mapped into UserPost component, and it should look as similar as posibble to the lower right image here:
https://dribbble.com/shots/18578872-Talentswide-Homepage
**note there is no image in the API, so your post should not contain an image.**
It does contain: tags, reactions (likes) and user information.

**only the lower right component is nessesery!**
**(Alan Patterson's post)**

as before, make sure it is as similar as possible, and if there are icons and buttons that are not doing anything, add them anyway and make sure they do not break your code.

# notes:
1. handle the errors from the login. (if there is an error, print it to the dom)
2. handle the possibility there are no user's posts.
3. Functionality over design - if you are short on time, i prefer you foucs on functionality over the design.
4. you may use any library that you wish to add to your project.

--------------
## Extra:
1. add the relevant comments that are associated to the post (using the appropriate GET request from the docs).
2. add an image to your posts using 
https://picsum.photos/
make sure it fits the design proportions.
**The image is random**
