import { Container } from "../components/Container";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
export default Layout;
