const siteNameRoot = document.querySelector('#siteNameHeader') as HTMLElement;

const dataForm = document.getElementById('siteNameForm') as HTMLFormElement;

    dataForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(dataForm);
      const siteName = formData.get('siteName');

      try {
        const response = await fetch('/sendData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: siteName }),
        });

        const responseData = await response.json();
        location.reload();
      } catch (error) {
        console.error('Error sending data to server:', error);
      }
    });





const getSiteName = async () => {
    const response = await fetch('/siteName')
    const data = await response.json()
    siteNameRoot.innerHTML = data.name;

}
getSiteName();