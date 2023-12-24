export function formatDate(date:Date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    // let year = date.getFullYear().toString().slice(-2);
    let year 
    if(date.getFullYear().toString().slice(-2) === new Date().getFullYear().toString().slice(-2)){
         year = ""
        }
        else{ year=date.getFullYear().toString().slice(-2)}
    const hour = date.getHours();
    const minute = date.getMinutes();
  
    const formattedDate = `${day} ${month} ${year}, ${hour}:${minute < 10 ? '0' : ''}${minute}`;
  
    return formattedDate;
  }