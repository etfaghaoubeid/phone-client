import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../product-card";
import { getProducts } from "./products-actions";
import { ProjectsWrapper } from "./styles";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
    console.log(products.products, "1111111111111");
  }, [dispatch, getProducts]);
  return (
    <>
      <ProjectsWrapper>
        {products.isLoading ? (
          <h3>Loading...</h3>
        ) : (
          products.products.map((item) => (
            <ProductCard key={item.id} phone={item} />
          ))
        )}
      </ProjectsWrapper>
    </>
  );
};
export default Products;
