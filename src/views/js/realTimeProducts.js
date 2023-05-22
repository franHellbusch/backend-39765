const socket = io();

const form = document.querySelector("#realTimeForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formDataObj = {};

    for (let [key, value] of formData.entries()) {
        formDataObj[key] = value;
    }

    socket.emit("NEW-PRODUCT-TO-SAVE", formDataObj);
});

socket.on("PRODUCT-SAVED", (product) => {
    document.querySelector(
        "#realTimeProductsTable"
    ).innerHTML += `<tr id="${product._id}" class="border-b hover:bg-orange-100 bg-gray-100">
    <td class="p-3 px-5">${product.title}</td>
    <td class="p-3 px-5">${product.description}</td>
    <td class="p-3 px-5">${product.price}</td>
    <td class="p-3 px-5">${product.stock}</td>
    <td class="p-3 px-5">${product.code}</td>
    <td class="p-3 px-5">${product.status}</td>
    <td class="p-3 px-5">${product.category}</td>
    <td class="p-3 px-5 flex justify-end">
      <button
        onclick="deleteProd('${product._id}')"
        type="button"
        class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </td>
  </tr>`;
});

const deleteProd = (id) => {
    socket.emit("DELETE-PRODUCT", id);
};

socket.on("PRODUCT-DELETED", (id) => {
    document.getElementById(`${id}`).remove();
});
