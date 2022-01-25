const Product = (props) => {
    const productsClasses =[];

    return(
        <div>
            <span className={productClasses.join(" ")}>
                {props.product.text}
            </span>
        </div>
    )
}

export default Product;