// // this function is used to load any data to local storage
// // function loadDataToLocalStorage(data, keyName: string) {
// //   if (typeof data === `string`) {
// //     localStorage.setItem(keyName, data);
// //   } else {
// //     const dataString = JSON.stringify(data);
// //     localStorage.setItem(keyName, dataString);
// //   }
// // }
// function loadPage() {
//   try {
//     const incomeRoot = document.querySelector(`.total-number--income`);
//     const expenceRoot = document.querySelector(`.total-number--expence`);
//     const balanceRoot = document.querySelector(`.total-number--balance`);
//     const expencesStringFromLocalStorage = localStorage.getItem(`expences`);
//     const userCategoriesStringFromLocalStorage =
//       localStorage.getItem(`userCategories`);
//     if (expencesStringFromLocalStorage !== null) {
//       const expencesFromLocalStorage: Expence[] = JSON.parse(
//         expencesStringFromLocalStorage
//       );
//       expences.push(...expencesFromLocalStorage);
//     }
//     // const expencesFromLocalStorage: Expence[] = JSON.parse(
//     //   expencesStringFromLocalStorage
//     // );
//     if (!incomeRoot || !expenceRoot || !balanceRoot)
//       throw new Error(`roots is missing`);
//     const incomeFromLocalStorage = localStorage.getItem(`income`);
//     const expenceAmountFromLocalStorage = localStorage.getItem(`totalExpence`);
//     if (userCategoriesStringFromLocalStorage !== null) {
//       const userJsonCategories = JSON.parse(
//         userCategoriesStringFromLocalStorage
//       );
//       userCategories.push(...userJsonCategories);
//     }
//     if (incomeFromLocalStorage != null)
//       incomeRoot.innerHTML = `${incomeFromLocalStorage}&#8362;`;
//     calculateBalance();
//     // getCategoriesFromLocalStorage()
//     if (expenceAmountFromLocalStorage)
//       expenceRoot.innerHTML = `${expenceAmountFromLocalStorage}&#8362;`;
//     calculateBalance();
//     if (expenceAmountFromLocalStorage) calculateBalance();
//     renderExpencesTable(expences, userCategories);
//   } catch (error) {
//     console.error(error);
//   }
// }
// // revoke function when loading page
// loadPage();
// // revoke expence calculator when loading page
// // getCategoriesFromLocalStorage();
// // renderExpenceCalculator();
// // revoke expences table (if such) when loading or refreshing page
// // renderExpencesTable(expences, userCategories);
// // revoke accordion functionality when loading or refreshing page
// // handleAccordionClick();
// // getCategoriesFromLocalStorage()
// //
