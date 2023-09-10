function toggleMenu() {
    const popup = document.querySelector("#popup") as HTMLDivElement;
    renderpopUpMenu(popup);
  }
  
  function renderpopUpMenu(rootElement: HTMLElement | null) {
    try {
      const menu_button = document.querySelector(
        ".menu-button"
      ) as HTMLImageElement;
  
      let html = "";
  
      if (menu_button.getAttribute("active") == "false") {
        html = `
        <ul dir="rtl" id="popupList">
        <li><a href="../home-page/homepage.html">עמוד הבית</a></li>
        <li> <a href="../home/Income.html">הוצאות</a></li>
        <li> <a href="../home/expenses.html">הכנסות</a></li>
        <li> <a href="../home/profit.html">הרווח שלי</a></li>
        <li> <a href="../home-page/homepage.html#about-us">קצת עלינו</a></li>
        <li> <a href="../home-page/homepage.html#contact">יצירת קשר</a></li>
      </ul>
           `;
        menu_button.setAttribute("active", "true"); //chenge the attribute to "true"
      } else {
        html = "";
        menu_button.setAttribute("active", "false");
      }
  
      if (!rootElement) throw new Error("No root element");
  
      rootElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }