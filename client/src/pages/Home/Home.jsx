import { FlexContainer } from "@/styled-components";
import { ProductList } from "./components";

const Home = () => {
  return (
    <FlexContainer $direction='column' $margin='3rem 10%'>
      <ProductList />
    </FlexContainer>
  );
};

export default Home;
