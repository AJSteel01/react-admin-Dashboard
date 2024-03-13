import { useState } from 'react';
import productsData from './products.json';

// const ProductsManagement = () => {
//   const [products, setProducts] = useState(productsData.products);
//   const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const handleAddProduct = () => {
//     if (newProduct.name && newProduct.category && newProduct.price && newProduct.stockQuantity) {
//       setProducts([...products, { ...newProduct, id: Date.now() }]);
//       setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   const handleEditProduct = () => {
//     const editedProducts = products.map((product) => {
//       if (product.id === editProductId) {
//         return { ...product, ...newProduct };
//       }
//       return product;
//     });
//     setProducts(editedProducts);
//     setIsEditing(false);
//     setEditProductId(null);
//     setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
//   };

//   const handleDeleteProduct = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//   };
const ProductsManagement = () => {
  const [products, setProducts] = useState(productsData.products);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const isFormValid = () => {
    return newProduct.name && newProduct.category && newProduct.price && newProduct.stockQuantity;
  };

  const handleAddProduct = () => {
    if (isFormValid()) {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleEditProduct = () => {
    if (isFormValid()) {
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
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (

    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300 text-white">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Products Management</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a href='/'>Dashboard</a></li>
          <li><a href='/orders'>Order Management</a></li>
          <li><a href='/ordersCalendar'>Orders Calendar</a></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <div className="container mx-auto px-4 bg-gradient-to-r from-slate-900 to-slate-700">
      <h1 className="text-3xl font-bold mt-4 mb-4 text-center text-white">Products Management</h1>
      <div className="mb-4 text-center">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Name"
          className="mr-2 input input-bordered w-full max-w-xs bg-slate-200"
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          placeholder="Category"
          className="mr-2 input input-bordered w-full max-w-xs bg-slate-200"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="mr-2 input input-bordered w-full max-w-xs bg-slate-200"
        />
        <input
          type="number"
          name="stockQuantity"
          value={newProduct.stockQuantity}
          onChange={handleChange}
          placeholder="Stock Quantity"
          className="mr-2 input input-bordered w-full max-w-xs bg-slate-200"
        />
        {isEditing ? (
          <button className='btn btn-primary text-white' onClick={handleEditProduct} disabled={!isFormValid()}>Save</button>
        ) : (
          <button className='btn btn-primary text-white' onClick={handleAddProduct} disabled={!isFormValid()}>Add Product</button>
        )}
      </div>
      <table className="table-auto w-full container bg-slate-200 rounded-3xl border-hidden border border-collapse p-8 overflow-hidden">
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
              <td className="border px-4 py-2 flex items-center justify-around gap-2 flex-wrap md:flex-nowrap">
                <button className="btn btn-info text-white" onClick={() => { setIsEditing(true); setEditProductId(product.id); }}>Edit</button>
                <button className="btn btn-error text-white" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div> 
  <div className="drawer-side text-white">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><a href='/orders'>Order Management</a></li>
      <li><a href='/products'>Product Management</a></li>
      <li><a href='/ordersCalendar'>Orders Calendar</a></li>
    </ul>
  </div>
</div>
    
  );
};

export default ProductsManagement;
