import { postProduct } from "@/services/productService";
import { addProduct } from "@/store/states/product";
import { FlexContainer, FormContainer, Label, Paragraph, TextInput } from "@/styled-components";
import { useDispatch } from "react-redux";
import {
  CreateProductButton,
  CreateProductTextarea,
  ImageChargeBox,
  ImageChargeBoxCloseIcon,
} from "./styled-components";
import { useState } from "react";
import { useTheme } from "styled-components";
import { useCatch } from "@/hooks";
import { ErrorAlertMessage } from "@/components";

const CreateProductForm = ({ onPreview }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [imageArray, setImageArray] = useState([]);
  const [imageInput, setImageInput] = useState("");
  const [imageError, setImageError] = useState(false);
  const { error, saveError, closeError } = useCatch();
  const { error: message, saveError: saveMessage, closeError: closeMessage } = useCatch();
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    category: "",
    stock: "",
    code: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (imageArray.length == 0) {
      return setError("Please provide image URLs");
    }

    const product = { ...formValues };

    product.presentationImage = imageArray[0];
    product.imageUrls = imageArray;

    try {
      const response = await postProduct(product);
      dispatch(addProduct(response.payload));
      saveMessage("Your product was successfully upload");
    } catch (err) {
      saveError(err);
    }
  };

  const handleImageInput = (e) => {
    imageError && setImageError(false);
    setImageInput(e.target.value);
  };

  const handleImageArray = () => {
    const tempImage = new Image();
    tempImage.src = imageInput;

    tempImage.onload = () => {
      setImageArray([...imageArray, imageInput]);
      setImageInput("");
    };

    tempImage.onerror = () => {
      setImageError("The image URL is not valid.");
    };
  };

  const handleDeleteImage = (index) => {
    const newArray = [...imageArray];
    newArray.splice(index, 1);
    setImageArray(newArray);
  };

  const handleUpdatePreviewInfo = () => {
    const product = { ...formValues };

    product.presentationImage = imageArray[0];
    product.imageUrls = imageArray;

    onPreview(product);
  };

  return (
    <>
      {error && <ErrorAlertMessage error={error} closeError={closeError} errorLevel='error' />}
      {message && (
        <ErrorAlertMessage error={message} closeError={closeMessage} errorLevel='success' />
      )}
      <FormContainer onSubmit={handleSubmit} $width='50%'>
        <FlexContainer $margin='0 0 5px 0' $direction='column'>
          <Label>Title</Label>
          <TextInput
            $width='calc(100% - 26px)'
            $padding='12px'
            $margintop='5px'
            type='text'
            name='title'
            value={formValues.title}
            onChange={handleInputChange}
            required
          />
        </FlexContainer>
        <FlexContainer $margin='5px 0' $width='100%' $justify='space-between'>
          <FlexContainer $width='45px' $margin='0 2.5rem 0 0' $direction='column'>
            <Label>Price</Label>
            <TextInput
              $padding='12px'
              $width='100%'
              $margintop='5px'
              type='number'
              name='price'
              value={formValues.price}
              onChange={handleInputChange}
              required
            />
          </FlexContainer>
          <FlexContainer $flex='1' $direction='column'>
            <Label>Category</Label>
            <TextInput
              $width='calc(100% - 26px)'
              $padding='12px'
              $margintop='5px'
              type='text'
              name='category'
              value={formValues.category}
              onChange={handleInputChange}
              required
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer $margin='5px 0' $width='100%' $justify='space-between'>
          <FlexContainer $width='45px' $margin='0 2.5rem 0 0' $direction='column'>
            <Label>Stock</Label>
            <TextInput
              $padding='12px'
              $width='100%'
              $margintop='5px'
              type='number'
              name='stock'
              value={formValues.stock}
              onChange={handleInputChange}
              required
            />
          </FlexContainer>
          <FlexContainer $flex='1' $direction='column'>
            <Label>Code</Label>
            <TextInput
              $width='calc(100% - 26px)'
              $padding='12px'
              $margintop='5px'
              type='text'
              name='code'
              value={formValues.code}
              onChange={handleInputChange}
              required
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer $margin='5px 0' $width='100%' $justify='space-between'>
          <FlexContainer $flex='1' $direction='column'>
            <FlexContainer $width='100%' $justify='space-betweem'>
              <Label>Images (URL)</Label>
              {imageError && (
                <Paragraph
                  $margin='0 0 0 10px'
                  $weight='600'
                  $fontsize='13px'
                  $color={theme.alert.danger}>
                  {imageError}
                </Paragraph>
              )}
            </FlexContainer>
            <TextInput
              onChange={handleImageInput}
              value={imageInput}
              $width='calc(100% - 26px)'
              $padding='12px'
              $margintop='5px'
              $border={imageError && theme.alert.danger}
              type='text'
            />
          </FlexContainer>
          <CreateProductButton onClick={handleImageArray} $margin='0 0 0 0.8rem' type='button'>
            Set
          </CreateProductButton>
        </FlexContainer>
        {imageArray.length > 0 && (
          <FlexContainer $direction='column'>
            {imageArray.map((image, index) => (
              <ImageChargeBox key={index}>
                {index == 0 && "Presentation image:"} {image}
                <button type='button' onClick={() => handleDeleteImage(index)}>
                  <ImageChargeBoxCloseIcon />
                </button>
              </ImageChargeBox>
            ))}
          </FlexContainer>
        )}
        <FlexContainer $margin='5px 0 0 0' $direction='column'>
          <Label>Description</Label>
          <CreateProductTextarea
            name='description'
            value={formValues.description}
            onChange={handleInputChange}
          />
        </FlexContainer>
        <FlexContainer $justify='space-between'>
          <CreateProductButton
            $disabled={error || message}
            type='submit'
            disabled={error || message}>
            Create Product
          </CreateProductButton>
          <CreateProductButton
            $background={theme.colors.info}
            $backgroundhover={theme.colors.infoLight}
            type='button'
            onClick={handleUpdatePreviewInfo}>
            Update Preview
          </CreateProductButton>
        </FlexContainer>
      </FormContainer>
    </>
  );
};

export default CreateProductForm;
