import { ProfileInfoContainer, ProfileInfoRow, ProfileInfoText } from "./styled-components";

const ProfileSectionInfo = ({ user }) => {
  return (
    <ProfileInfoContainer>
      <ProfileInfoRow $salient={true}>
        <ProfileInfoText>Display Name</ProfileInfoText>
        <span>:</span>
        <ProfileInfoText $bold={true}>{user.displayName}</ProfileInfoText>
      </ProfileInfoRow>
      <ProfileInfoRow>
        <ProfileInfoText>Name</ProfileInfoText>
        <span>:</span>
        <ProfileInfoText $pending={!user.name} $bold={true}>
          {user.name || "Pending"}
        </ProfileInfoText>
      </ProfileInfoRow>
      <ProfileInfoRow $salient={true}>
        <ProfileInfoText>LastName</ProfileInfoText>
        <span>:</span>
        <ProfileInfoText $pending={!user.lastName} $bold={true}>
          {user.lastName || "Pending"}
        </ProfileInfoText>
      </ProfileInfoRow>
      <ProfileInfoRow>
        <ProfileInfoText>Email</ProfileInfoText>
        <span>:</span>
        <ProfileInfoText $bold={true}>{user.email}</ProfileInfoText>
      </ProfileInfoRow>
      <ProfileInfoRow $salient={true}>
        <ProfileInfoText>Age</ProfileInfoText>
        <span>:</span>
        <ProfileInfoText $pending={!user.age} $bold={true}>
          {user.age || "Pending"}
        </ProfileInfoText>
      </ProfileInfoRow>
      <ProfileInfoRow>
        <ProfileInfoText>Role</ProfileInfoText>
        <span>:</span>
        <ProfileInfoText $bold={true}>{user.role}</ProfileInfoText>
      </ProfileInfoRow>
      <ProfileInfoRow $salient={true}>
        <ProfileInfoText>Cart ID</ProfileInfoText>
        <span>:</span>
        <ProfileInfoText $bold={true}>{user.cart}</ProfileInfoText>
      </ProfileInfoRow>
    </ProfileInfoContainer>
  );
};

export default ProfileSectionInfo;
