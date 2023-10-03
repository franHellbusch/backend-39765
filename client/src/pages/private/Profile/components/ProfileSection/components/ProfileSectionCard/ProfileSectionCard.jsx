import { Paragraph } from "@/styled-components";
import { ProfileCardContainer, ProfileCardImage } from "./styled-components";
import { useTheme } from "styled-components";

const ProfileSectionCard = ({ user }) => {
  const theme = useTheme();

  return (
    <ProfileCardContainer>
      <ProfileCardImage>
        <img
          src={
            user.picture ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&usqp=CAU"
          }
          alt='userimage'
        />
      </ProfileCardImage>
      <Paragraph $margin='1rem 0 0 0' $weight='600' $fontsize='17px' $alignself='center'>
        {user.displayName}
      </Paragraph>
      <Paragraph $color={theme.text.grey} $alignself='center' $fontsize='12px'>
        {user.email}
      </Paragraph>
    </ProfileCardContainer>
  );
};

export default ProfileSectionCard;
