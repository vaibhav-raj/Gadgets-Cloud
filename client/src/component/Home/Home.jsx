import React, { useEffect } from 'react'
import styles from "./Home.module.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(state => state.products)



    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (<>
        {loading ? <Loader /> : <>
            <MetaData title="Gadgets Cloud" />
            <div className={styles.banner}>
                <p>Welcome to Gadgets Cloud</p>
                <h1>Feel the magic of Gadgets</h1>
            </div>
            <h2 className={styles.homeHeading}>Discover Our Appealing Gadgets</h2>

            <div className={styles.container}>
                {products &&
                    products.map((product) => (
                        <ProductCard product={product} />
                    ))}
            </div>
        </>}
    </>
    )
}

export default Home
