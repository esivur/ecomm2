const Product = (props) => {
    const {name, description, price, image} = props.product;
    const productNumber = props.productNumber;
    return(
        <div className={'flexbox_item flexbox_item_${productNumber}'}> 
        <img src={image} width="200vw" height="215vw" alt={name} />
        <h1 className="product_header">{name}</h1>
        <p className="product_description"> {description}</p>
        <section className="price_cart_box">
        <p className="price">${price}</p>
        </section>
        <section className="price_cart_box">
        <button className="add_to_cart"> Impulse Buy</button>
        </section>
            </div>
    );
}

export default Product;