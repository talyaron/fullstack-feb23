async function getUserFromCookie() {
  const response = await fetch("/API/users/get-user-from-cookie");
  const { userEmail } = await response.json();
  console.log(userEmail);
  return userEmail;
}

async function checkLogin() {
  try {
    const userEmail = await getUserFromCookie();
    console.log(userEmail);

    if (!userEmail || userEmail === null || userEmail === undefined) {
      await alert("you need to login first");
      window.location.href = "./login.html";
      throw new Error("you need to login first");
    }
  } catch (error) {
    console.error(error);
  }
}

async function renderWishlist() {
  try {
    const response = await fetch("/API/products/get-Wishlist-by-email");
    const  { productsDB }  = await response.json();
    if (!productsDB) throw new Error("No products database found");
    console.log(productsDB);
  } catch (error) {
    console.error(error);
  }
}
