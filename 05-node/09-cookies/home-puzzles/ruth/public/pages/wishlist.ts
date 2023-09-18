async function getUserFromCookie() {
  const response = await fetch("/API/users/get-user-from-cookie");
  const { userEmail } = await response.json();
  console.log(userEmail);
  return userEmail;
}

function goHomePage() {
  window.location.href = "../index.html";
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
    const response = await fetch("/API/products/get-wishlist-by-email");
    const { productsDB } = await response.json();
    if (!productsDB) throw new Error("No products database found");
    const html = productsDB
      .map((product) => {
        return `
      <div class="storeGallery__productDiv" id = "${product._id}">
          <img src=${product.imgUrl} alt="" />
          <form id ="${product._id}" class="fid__info">
          <label>title:</label>
            <p id="title" name="title">${product.title}</p><br>
            <p id="price" name="price">${product.price}$</p><br>
            <label> description: </label><br>
            <p id="description" name="description">${product.description}</p><br>
            <p>${product.email}</p><br>
          
          <div class="likeAndCart">
          <button type="button" onclick='handleDeleteProdFromWishList(event , "${product._id}")'><span class="material-symbols-sharp"> heart_minus </span></button>
          </form>
          </div>
        </div>`;
      })
      .join(" ");

    const root = document.querySelector(".wishlistDiv") as HTMLDivElement;
    console.log(root);
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

async function handleDeleteProdFromWishList(event, prodId) {
  try {
    if (!prodId) throw new Error("id is required");
    const deleteInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prodId }),
    };
    const response = await fetch(
      "/API/products/delete-wishlist-prod",
      deleteInit,
    );
    const { ok } = await response.json();
    if (!ok)
      throw new Error("something wrong in server side the product not deleted");
    renderWishlist();
  } catch (error) {
    console.error(error);
  }
}
