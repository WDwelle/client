import React, {useState} from "react";
import '../App.css';
import Product from "../components/form";

function App() {

    const [newProduct, setNewProduct] = useState("");
    const [products, setProducts] = useState([]);

    //===DELETE===
    const handleProductDelete = (delIdx) => {
    const filteredProducts = products.filter((product, i) => {
        return i !== delIdx;
    });
    setProducts(filteredProducts);
    }

    //===ADD TO ARRAY===
    const handleNewProductSubmit = (event) => {
    event.preventDefault();
    if (newProduct.length === 0){
        return;
    }
    const productItem = {
        text: newProduct,
        text: newProduct,
        text: newProduct
    }
    //===setProducts and adds newProduct to array===
    setProducts([...products, productItem])
    setNewProduct("");
    }

    return (
        <div className="App">
            <form onSubmit={(event) => {
            handleNewProductSubmit(event)
            }}>
            <input onChange={(event) => {
                setNewProduct(event.target.value);
            }} type="text" >Title</input>
            <input onChange={(event) => {
                setNewProduct(event.target.value);
            }} type="text" >Price</input>
            <input onChange={(event) => {
                setNewProduct(event.target.value);
            }} type="text" >Description</input>
            <div>
                <button>Add</button>
            </div>
            </form>
            {products.map((product, i) => {
                return (
                <Product key={i} i={i} product={product} 
                handleProductDelete = {handleProductDelete}
                />
                );
            })}
        </div>
    );
}
    
    export default App;