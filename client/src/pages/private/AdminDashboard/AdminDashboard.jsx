import React, { useState } from "react";
import { CoverContainer } from "@/styled-components";
import {
  AdminContainer,
  AdminNav,
  AdminStyledLink,
  CreateProductIcon,
  ProductListIcon,
} from "./styled-components";
import { useTheme } from "styled-components";
import { AdminProductList, CreateProductSection } from "./components";

const AdminDashboard = () => {
  const SECTIONS = {
    CREATE_PRODUCT: "createProduct",
    PRODUCT_LIST: "shoping",
  };

  const theme = useTheme();
  const [section, setSection] = useState(SECTIONS.CREATE_PRODUCT);

  const navigateTo = (section) => {
    setSection(section);
  };

  return (
    <CoverContainer $position='relative' $align='flex-start' $background={theme.colors.extraLight}>
      <AdminContainer>
        <AdminNav>
          <AdminStyledLink
            $active={section == SECTIONS.CREATE_PRODUCT}
            onClick={() => navigateTo(SECTIONS.CREATE_PRODUCT)}>
            <CreateProductIcon /> Create Product
          </AdminStyledLink>
          <AdminStyledLink
            $active={section == SECTIONS.PRODUCT_LIST}
            onClick={() => navigateTo(SECTIONS.PRODUCT_LIST)}>
            <ProductListIcon /> Products
          </AdminStyledLink>
        </AdminNav>
        {section == SECTIONS.CREATE_PRODUCT && <CreateProductSection />}
        {section == SECTIONS.PRODUCT_LIST && <AdminProductList />}
      </AdminContainer>
    </CoverContainer>
  );
};

export default AdminDashboard;
