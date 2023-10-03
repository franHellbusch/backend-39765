import { getProductById } from "@/services/productService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "./components";
import { FlexContainer } from "@/styled-components";

const ProductDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(productId);
        setProductData(response.payload);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <FlexContainer $justify='center' $position='relative'>
      {!loading && <ProductDetail product={productData} />}
    </FlexContainer>
  );
};

export default ProductDetailContainer;
