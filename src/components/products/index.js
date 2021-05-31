import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../product-card";
import Spinner from "../spinner";
import { getProducts } from "./products-actions";
import { ProjectsWrapper } from "./styles";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      {products.isLoading ? (
        <Spinner />
      ) : (
        <ProjectsWrapper>
          {products.products.map((item) => (
            <ProductCard key={item.id} phone={item} />
          ))}
        </ProjectsWrapper>
      )}
    </>
  );
};
export default Products;
