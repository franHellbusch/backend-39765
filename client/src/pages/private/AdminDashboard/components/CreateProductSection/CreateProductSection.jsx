import { FlexContainer } from "@/styled-components";
import { CreateProductForm, CreateProductPreview } from "./components";
import { CreateProductContainer } from "./styled-components";
import { useState } from "react";

const CreateProductSection = () => {
  const [preview, setPreview] = useState();

  const handleUpdatePreview = (product) => {
    setPreview(product);
  };

  return (
    <CreateProductContainer>
      <CreateProductForm onPreview={handleUpdatePreview} />
      <FlexContainer $margin='1rem 0 0 0' $width='50%' $direction='column' $align='center'>
        <CreateProductPreview product={preview} />
      </FlexContainer>
    </CreateProductContainer>
  );
};

export default CreateProductSection;
