import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "./product-details-actions";
import { DetailsContainer, DetailsImage } from "./styles";
const ProductDetails = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const details = useSelector((state) => state.productDetails);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);
  console.log(details.isLoading);
  return (
    <>
      {details.isLoading ? (
        <h2>Loading ...</h2>
      ) : (
        <DetailsContainer>
          <div>
            <Link to="/">Back</Link>
          </div>
          <DetailsImage src={details.product.image} />
          <div>{details.product.name}</div>
          <div></div>
          <div></div>
        </DetailsContainer>
      )}
    </>
  );
};
export default ProductDetails;
