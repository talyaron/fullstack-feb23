function goMyStore() {
  window.location.href = `./pages/myStore.html`;
}

// function getUserEmailByQuery() {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get("email");
// }

export async function getUserFromCookie() {
  const response = await fetch("/API/users/get-user-from-cookie");
  const { userEmail } = await response.json();
  console.log(userEmail);
  return userEmail;
}

async function getFid() {
  const response = await fetch("/API/products/get-all-products");
  const { products } = await response.json();
  const html = products
    .map((product) => {
      return `
    <div class="fid__prodDiv" id='${product._id}'>
          <img
            src='${product.imgUrl}'
            alt="" />
          <div class="fid__info">
            <h4>title: ${product.title}</h4>
            <p>price: ${product.price}$</p>
            <p>${product.description}</p>
            <p>author:  ${product.email}</p>
          </div>
          <div class="likeAndCart">
            <span onclick="handleAddWishList(event)" class="material-symbols-outlined"> heart_plus </span>
            <span onclick="handleAddCart(event)" class="material-symbols-outlined"> shopping_bag </span>
          </div>
        </div>
    `;
    })
    .join(" ");
  const root = document.querySelector(".fid") as HTMLDivElement;
  root.innerHTML = html;
}

async function handleAddCart(event) {
  try {
    const prodId = event.target.parentNode.parentNode.id;
    console.log(prodId);
    if (!prodId) throw new Error("id not found");
    const userEmail = await getUserFromCookie();
    const postInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prodId, userEmail }),
    };

    const response = await fetch("/API/products/add-product-to-cart", postInit);
    const { ok } = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function handleAddWishList(event) {
  try {
    const prodId = event.target.parentNode.parentNode.id;
    console.log(prodId);
    if (!prodId) throw new Error("id not found");
    const userEmail = await getUserFromCookie();
    if (!userEmail) throw new Error("User email not found");
    const postInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prodId, userEmail }),
    };
    const response = await fetch(
      "/API/products/add-product-to-wishlist",
      postInit,
    );
    const { ok } = await response.json();
  } catch (error) {
    console.error(error);
  }
}
