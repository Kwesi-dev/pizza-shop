import "./cart.scss"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Add, Close, Remove } from '@mui/icons-material'
import productImg from "../../assets/images/pizzaImg.png"
import productImg1 from "../../assets/images/spizzza.png"

const Cart = () => {
  return (
    <section className="cart">
        <div className="cart-wrapper">
            <header className="cart-header">
                <h1>Shopping Cart</h1>
                <div className="current-page">
                    <h3>Home /</h3>
                    <h3>Shopping Cart</h3>
                </div>
            </header>
            <div className="cart-body">
                <div className="cart-body-left">
                    <table>
                        <thead>
                            <tr className="table-head">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-info">
                                        <img src={productImg} alt="product-img" className="product-img"/>
                                        <span className="product-title">Meat Pizza</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="product-price">$100.00</span>
                                </td>
                                <td>
                                    <div className="amount-container">
                                        <Add className="add"/>
                                        <span>2</span>
                                        <Remove className="remove"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="subtotal">
                                        <span>$200.00</span>
                                        <Close className="delete-icon"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-info">
                                        <img src={productImg} alt="product-img" className="product-img"/>
                                        <span className="product-title">Meat Pizza</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="product-price">$100.00</span>
                                </td>
                                <td>
                                    <div className="amount-container">
                                        <Add className="add"/>
                                        <span>2</span>
                                        <Remove className="remove"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="subtotal">
                                        <span>$200.00</span>
                                        <Close className="delete-icon"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-info">
                                        <img src={productImg} alt="product-img" className="product-img"/>
                                        <span className="product-title">Meat Pizza</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="product-price">$100.00</span>
                                </td>
                                <td>
                                    <div className="amount-container">
                                        <Add className="add"/>
                                        <span>2</span>
                                        <Remove className="remove"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="subtotal">
                                        <span>$200.00</span>
                                        <Close className="delete-icon"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart-body-right">
                    <div className="cart-totals">
                        <h2>Cart Totals</h2>
                        <div className="cart-totals-item">
                            <span>Subtotal</span>
                            <span className="price-tag">$120.00</span>
                        </div>
                        <div className="cart-totals-item">
                            <span>Shipping</span>
                            <div className="shipping-info">
                                <p>Enter your address to view shipping options</p>
                                <p className="mark">calculate shipping</p>
                            </div>
                        </div>
                        <div className="cart-totals-item">
                            <span className="total-label">Total</span>
                            <span className="price-tag">$420.00</span>
                        </div>
                    </div>
                    <button className="checkout-button">
                        <CurrencyExchangeIcon className="checkout-icon"/>
                        <span>proceed to checkout</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart