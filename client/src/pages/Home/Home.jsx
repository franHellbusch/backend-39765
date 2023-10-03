import { FlexContainer } from "@/styled-components";
import { ProductList, Carrousel } from "./components";

const Home = () => {
  const images = [
    {
      imageUrl:
        "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/7853221/pexels-photo-7853221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <FlexContainer $direction='column'>
      <Carrousel images={images} />
      <ProductList />
    </FlexContainer>
  );
};

export default Home;
