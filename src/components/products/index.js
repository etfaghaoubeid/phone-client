import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../../actions/phone-actions";
import ProductCard from "../product-card";
const Products = () => {
  const dispatch = useDispatch();
  const { phones, isLoading } = useSelector((state) => state.phones);
  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        phones.map((item) => <ProductCard key={item.id} phone={item} />)
      )}
    </>
  );
};
export default Products;
