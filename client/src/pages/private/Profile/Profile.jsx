import { CoverContainer } from "@/styled-components";
import React, { useState } from "react";
import {
  ProfileContainer,
  ProfileNav,
  ProfileShopingIcon,
  ProfileStyledLink,
  ProfileUserIcon,
} from "./styled-components";
import { useTheme } from "styled-components";
import { ProfileSection, ShopingSection } from "./components";

const Profile = () => {
  const SECTIONS = {
    PROFILE: "profile",
    SHOPING: "shoping",
  };

  const theme = useTheme();
  const [section, setSection] = useState(SECTIONS.PROFILE);

  const navigateTo = (section) => {
    setSection(section);
  };

  return (
    <CoverContainer $position='relative' $align='flex-start' $background={theme.colors.extraLight}>
      <ProfileContainer>
        <ProfileNav>
          <ProfileStyledLink
            $active={section == SECTIONS.PROFILE}
            onClick={() => navigateTo(SECTIONS.PROFILE)}>
            <ProfileUserIcon /> Profile
          </ProfileStyledLink>
          <ProfileStyledLink
            $active={section == SECTIONS.SHOPING}
            onClick={() => navigateTo(SECTIONS.SHOPING)}>
            <ProfileShopingIcon /> Shoping
          </ProfileStyledLink>
        </ProfileNav>
        {section == SECTIONS.PROFILE && <ProfileSection />}
        {section == SECTIONS.SHOPING && <ShopingSection />}
      </ProfileContainer>
    </CoverContainer>
  );
};

export default Profile;
