import { postProduct } from "@/services/productService";
import { addProduct } from "@/store/states/product";
import React from "react";
import { useDispatch } from "react-redux";

const ProductForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData);

    const response = await postProduct(user);
    dispatch(addProduct(response.payload));
  };

  return (
    <>
      <h2>Product form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type='text' name='title' placeholder='Title' required />
        </div>
        <div>
          <label>Description</label>
          <input type='text' name='description' placeholder='Description' required />
        </div>
        <div>
          <label>Price</label>
          <input type='number' name='price' required />
        </div>
        <div>
          <label>Stock</label>
          <input type='number' name='stock' required />
        </div>
        <div>
          <label>Code</label>
          <input type='text' name='code' required />
        </div>
        <div>
          <label>Status</label>
          <select name='status'>
            <option value='active'>Active</option>
            <option value='none'>None</option>
          </select>
        </div>
        <div>
          <label>Category</label>
          <input type='text' name='category' required />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ProductForm;
