import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardPrice,
  CardLink,
  CardCapacity,
} from "./styles";
const ProductCard = ({
  phone: { id, capacity, image, price, name, description, used },
}) => {
  return (
    <CardContainer>
      <CardLink to={`/product-details/${id}`}>
        <CardImage src={image} />
        <CardBody>
          <div>
            <CardDescription>
              {name.toUpperCase()}:{description.substring(0, 34)}...
            </CardDescription>
          </div>
          <div>
            <CardPrice>{price} MRU</CardPrice>
          </div>
          <div>
            <CardCapacity>Memory: {capacity} GB</CardCapacity>
          </div>
          <CardCapacity> Used: {used ? "Yes" : "No"} </CardCapacity>
        </CardBody>
      </CardLink>
    </CardContainer>
  );
};
export default ProductCard;
