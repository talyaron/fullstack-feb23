## followup level

1. create an effect that run once when the component is mounting only. in that effect, change the title to your name only once.
2. create a button, onClick, change the title of the doctument to the amount clicked. make sure the component still gets your name whrn mounting.

## Easy

Create a CountdownTimer component that displays a countdown timer starting from a given initial value, and stops at 0. Use the useEffect hook to update the displayed time every second.

# Expectations

1.  Display the countdown timer, starting from the given initial value.
2.  Update the timer every second using useEffect.
3.  Stop the timer when it reaches 0.
4.  Display the following text as the timer counts down: "Time Remaining: X"
5.  Start the timer when the component mounts.
6.  Stop the timer when the component unmounts.

## medium

Create a WindowSize component that listens to the window's resize event and displays the current window size. Use the useEffect hook to add and remove the event listener on mount and unmount, respectively. This exercise will help you understand how to use the useEffect hook for managing side effects like event listeners and the importance of cleanup functions.

# Expectations

1.  Listen to the window's resize event.
2.  Display the current window size.
3.  Add the event listener when the component mounts.
4.  Remove the event listener when the component unmounts.

# advanced

1. Create a UserCard component that fetches data from JSONPlaceholder API (https://jsonplaceholder.typicode.com/). show the users in app.tsx.

2. create UserPosts component that fetches and displays a list of posts for a given user ID using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/). Add this component to each user card, and only show it after that user card has been clicked. show this component only when the user card is clicked.

# Expactions

1.  Each of the components should only fetch data when it mounts.
