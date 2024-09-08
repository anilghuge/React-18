import { useEffect, useState } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cart-slicer";
import store from "./store";


export function Fakestore(){

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:'', description:'', price:0, image:'', category:'', rating:{rate:0, count:0}}]);
    const [toggleTable, setToggleTable] = useState({display:'none'});
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.store.cartItems);
    function LoadCategories(){
        axios.get("http://fakestoreapi.com/products/categories")
        .then(response=> {
            response.data.unshift("all");
            setCategories(response.data);
        })
    }

    function LoadProducts(url){
        axios.get(url)
        .then(response=> {
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
       
    },[]);

    function handleCategoryChange(e){
        if(e.target.value=="all") {
             LoadProducts("http://fakestoreapi.com/products");
        } else {
            LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
   

    function handleAddClick(product){
        alert(`${product.title}\n Added to Cart`);
        dispatch(addToCart(product));
    }

    function handleCartClick(){
        setToggleTable({display: (toggleTable.display==="none")?"block":"none"});
    }

    return(
        <div className="container-fluid">
            <header className="d-flex bg-dark text-white justify-content-between p-3">
                <div className="h3">Fakestore.</div>
                <div className="fs-4">
                    <span className="me-4"><a>Home</a></span>
                    <span className="me-4"><a>Jewelery</a></span>
                    <span className="me-4"><a>Electronics</a></span>
                </div>
                <div className="fs-4">
                    <button onClick={handleCartClick} className="bi btn btn-light bi-cart4 position-relative">
                     <span className="badge position-absolute rounded rounded-circle bg-danger text-white">{store.getState().store.cartCount}</span>
                    </button>
                   
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                  <div className="mt-4">
                    <label className="fw-bold form-label">Select Category</label>
                    <div>
                        <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category=>
                                    <option value={category} key={category}> {category.toUpperCase()} </option>
                                    )
                            }
                        </select>
                    </div>
                  </div>
                  <div>
                    <table style={toggleTable} className="table table-hover caption-top">
                        <caption>Your Cart Items</caption>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item=>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td><img width="50" src={item.image} height="50"/></td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                  </div>
                </nav>
                <main className="col-10 overflow-auto" style={{height:'500px' , display:'flex', flexWrap:'wrap'}}>
                    {
                        products.map(product=>
                             <div className="card p-2 m-2" key={product.id} style={{width:'200px'}}>
                                <img src={product.image} className="card-img-top" height="120" />
                                <div className="card-header" style={{height:'120px'}}>
                                    <p>
                                        {product.title}
                                    </p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            {product.rating.rate} <span className="bi bi-star-fill text-success"></span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button  onClick={()=> handleAddClick(product)} className="btn btn-dark w-100 bi bi-cart3"> Add to Cart</button>
                                </div>
                             </div>
                            )
                    }
                </main>
            </section>
        </div>
    )
}
