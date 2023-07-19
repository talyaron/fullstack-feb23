const startingPage = document.querySelector('.wrapper') as HTMLElement;

function hideStartingPage() {
    if (startingPage)
      startingPage.style.display = 'none';
      redirect()
  }

  // Set the time (in milliseconds) for the starting page to disappear
  var timeToDisappear = 2000; // Adjust the duration as needed

  // Hide the starting page after the specified time
  setTimeout(hideStartingPage, timeToDisappear);
  function redirect(){
    window.location.href = "main.html"
  }