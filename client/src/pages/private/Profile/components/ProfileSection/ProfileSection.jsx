import { useSelector } from "react-redux";
import { ProfileSectionContainer } from "./styled-components";
import { ProfileSectionCard, ProfileSectionInfo } from "./components";

const ProfileSection = () => {
  const userState = useSelector((store) => store.user);

  return (
    <ProfileSectionContainer>
      <ProfileSectionCard user={userState} />
      <ProfileSectionInfo user={userState} />
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
