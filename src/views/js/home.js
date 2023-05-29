const addProductToCart = async (cartId, prod_id) => {
    const productButton = document.getElementById("productButton");
    productButton.disabled = true;

    const response = await fetch(
        `http://localhost:8080/api/carts/${cartId}/product/${prod_id}`,
        {
            method: "POST",
        }
    );

    const responseData = await response.json();

    if (responseData.success) {
        alert("product added to cart");
    } else {
        console.log(responseData);
    }

    productButton.disabled = false;
};
