const productsTable = document.getElementById('productsTable');
const submitButton = document.getElementById('submitButton');

// fetch function
const fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/products/0');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const removeAllChilds = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const deleteProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/products/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);
    renderProducts();
  } catch (error) {
    console.log(error);
  }
};

const renderProducts = async () => {
  try {
    removeAllChilds(productsTable);
    const products = await fetchProducts();
    if (products.message) {
      productsTable.innerHTML = '<h4>no hay productos</h4>';
      return;
    }
    products.forEach((product) => {
      const row = document.createElement('tr');

      row.innerHTML = `<th scope="row">${product.id}</th>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.thumbnail}</td>
            <td><button onclick="createEditForm('${product.title}', ${product.price}, '${product.thumbnail}', ${product.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">E</button></td>
            <td><button onclick="deleteProduct(${product.id})" type="button" class="btn btn-danger">X</button></td>`;

      productsTable.appendChild(row);
    });
  } catch (error) {
    console.error(error);
  }
};

const createEditForm = (title, price, thumbnail, id) => {
  const modalBody = document.getElementById('modalBody');
  removeAllChilds(modalBody);
  const form = document.createElement('form');

  form.innerHTML = `<div class="input-group input-group-lg my-3">
    <span class="input-group-text" id="basic-addon1">${title}</span>
    <input id='titleInput' name="title" type="text" class="form-control" placeholder="New name"
        aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group input-group-lg my-3">
        <span class="input-group-text">$${price}</span>
        <input id='priceInput' name="price" type="text" class="form-control"
            aria-label="Amount (to the nearest dollar)" placeholder="New price">
    </div>
    <div class="input-group input-group-lg my-3">
        <span class="input-group-text" id="basic-addon3">${thumbnail}</span>
        <input name="thumbnail" type="text" class="form-control" id="thumbnailInput"
            aria-describedby="basic-addon3" placeholder="New thumbnail">
    </div>
    <div class="modal-footer w-100 mt-4">
        <button type="button" class="btn btn-secondary fs-5" data-bs-dismiss="modal">Close</button>
        <button onclick="editProduct(${id}, '${title}', ${price}, '${thumbnail}')" type="submit" class="btn btn-primary fs-5">Save changes</button>
    </div>`;

  modalBody.appendChild(form);
};

const editProduct = async (ID, oldTitle, oldPrice, oldThumbnail) => {
  try {
    let { value: title } = document.getElementById('titleInput');
    let { value: price } = document.getElementById('priceInput');
    let { value: thumbnail } = document.getElementById('thumbnailInput');

    console.log(ID);
    const newProduct = {
      title: title === '' ? oldTitle : title,
      price: price === '' ? oldPrice : parseInt(price),
      thumbnail: thumbnail === '' ? oldThumbnail : thumbnail,
    };

    const res = await fetch(`http://localhost:8080/api/products/${ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
  } catch (error) {
    console.error(error);
  }
};

submitButton.onclick = renderProducts;

renderProducts();
