# followup

1. create a custom hook that has a counter function to add 2. it should also contain the counter state.
2. create two components, one should count clicks on a button, one should count clicks on hover.
3. use the use Hook function to add logic to your components.

# task

## only submit one of the following:

# easy

1. create a custom hook that is called useDocumentTitle - it should return the document title. create two components that shows the title, using this hook.

# medium

2. create a custom hook that is called useTimer: and it provides a timer logic. the timer should be able to be started, stoped, and reset, and have minutes, seconds and miliseconds.
   create two components that use the timer logic: one should be started on mount, the other should not.

# advanced

3. create a custom hook called useDebouncing. the debouncing custom hook takes in the search term and the time the user wants it to be deleyed in miliseconds, and only allow a command to run if the debouncing time ends.
   **notice: do not pass a the command into the hook, it should return only a string**
