import React, { useState } from 'react';
import productsData from './products.json';

const ProductsManagement = () => {
  const [products, setProducts] = useState(productsData.products);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.stockQuantity) {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleEditProduct = () => {
    const editedProducts = products.map((product) => {
      if (product.id === editProductId) {
        return { ...product, ...newProduct };
      }
      return product;
    });
    setProducts(editedProducts);
    setIsEditing(false);
    setEditProductId(null);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Products Management</h1>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Name"
          className="mr-2"
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          placeholder="Category"
          className="mr-2"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="mr-2"
        />
        <input
          type="number"
          name="stockQuantity"
          value={newProduct.stockQuantity}
          onChange={handleChange}
          placeholder="Stock Quantity"
          className="mr-2"
        />
        {isEditing ? (
          <button onClick={handleEditProduct}>Save</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.stockQuantity}</td>
              <td className="border px-4 py-2">
                <button onClick={() => { setIsEditing(true); setEditProductId(product.id); }}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsManagement;
