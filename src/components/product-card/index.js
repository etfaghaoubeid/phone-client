import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardPrice,
  CardLink,
  CardCapacity,
  CardSection,
  CardStatus,
} from "./styles";
const ProductCard = ({
  phone: { id, capacity, image, price, name, description, used },
}) => {
  return (
    <CardContainer>
      <CardLink to={`/product-details/${id}`}>
        <CardImage src={image} />
        <CardBody>
          <CardSection>
            <CardTitle>{name}</CardTitle>
          </CardSection>

          <CardSection>
            <CardPrice>Price: {price} MRU</CardPrice>
          </CardSection>
          <CardSection>
            <CardCapacity>Memory: {capacity} GB</CardCapacity>
            <CardStatus> Used: {used ? "Yes" : "No"} </CardStatus>
          </CardSection>
        </CardBody>
      </CardLink>
    </CardContainer>
  );
};
export default ProductCard;
