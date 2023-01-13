import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;

  width: 850px;
  height: 1200px;
  margin: 100px 0;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 20px 45px #000;
  @media (max-width: 860px) {
    width: 100%;
    margin: 10px 0 50px 0;
    grid-template-columns: none;
    grid-template-rows: 40%;
  }
`;

export const Sidebar = styled.div`
  display: grid;
  grid-template-rows: 25% 75%;
  background: #393e5b;
  border-radius: 15px 0 0 15px;
  @media (max-width: 860px) {
    border-radius: 15px 15px 0 0;
    grid-template-rows: 50% 50%;
  }
`;

export const SidebarPhotoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarPhotoBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #d99453;
  width: 260px;
  height: 260px;
  @media (max-width: 860px) {
    width: 210px;
    height: 210px;
  }
`;

export const SidebarPhoto = styled.div`
  background-image: url("./image/resume2.jpg");
  background-size: contain;
  border-radius: 50%;
  border: 1px solid #d99453;
  width: 250px;
  height: 250px;
  @media (max-width: 860px) {
    width: 200px;
    height: 200px;
  }
`;

export const SidebarInfoBlock = styled.div``;

export const ContentBody = styled.div`
  background: #ffffff;
  border-radius: 0 15px 15px 0;
  @media (max-width: 860px) {
    border-radius: 0 0 15px 15px;
  }
`;

export const NameProfessionBlock = styled.div`
  margin: 120px 50px;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const NameProfessionBlockMob = styled.div`
  display: none;
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NameBlock = styled.div`
  font-size: 45px;
  font-weight: 600;
  text-transform: uppercase;
  color: #393e5b;
`;

export const NameBlockMob = styled.div`
  color: #ffffff;
  font-size: 35px;
`;

export const ProfessionBlock = styled.div`
  color: #393e5b;
  font-size: 25px;
  font-style: italic;
`;

export const ProfessionBlockMob = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-style: italic;
`;

export const AboutMeBlock = styled.div`
  margin: 25px 0;
  padding: 0 20px;
  color: #ffffff;
  @media (max-width: 860px) {
    display: none;
  }
`;
export const AboutMeTitle = styled.div`
  text-transform: uppercase;
  border-bottom: 1px solid #d99453;
  font-size: 30px;
`;

export const AboutMeText = styled.div`
  margin: 15px 0;
  text-align: justify;
`;

export const AboutMeBlockMob = styled.div`
  display: none;
  @media (max-width: 860px) {
    display: block;
    margin: 25px 0 35px 0;
    padding: 0 20px;
    color: #393e5b;
  }
`;

export const ContactsBlock = styled.div`
  margin: 25px 0;
  padding: 0 20px;
  color: #ffffff;
`;

export const ContactsTitle = styled.div`
  text-transform: uppercase;
  border-bottom: 1px solid #d99453;
  font-size: 30px;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const ContactsText = styled.div`
  margin: 15px 0;
  text-align: justify;
  @media (max-width: 860px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 490px) {
    justify-content: space-around;
  }
`;

export const ContactsSubBlock = styled.a`
  grid-template-columns: 35px;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin: 10px 0;
  @media (max-width: 768px) {
    display: grid;
    grid-template-areas: "svg title" "text text";
  }
`;

export const ContactsSubSvgBlock = styled.div`
  width: 30px;
  @media (max-width: 768px) {
    grid-area: svg;
  }
`;

export const ContactsSubTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    grid-area: title;
  }
`;

export const ContactsSubText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    grid-area: text;
  }
  @media (max-width: 490px) {
    display: none;
  }
`;

export const LanguageBlock = styled.div`
  margin: 15px 0;
  padding: 0 20px;
  color: #ffffff;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const LanguageTitle = styled.div`
  text-transform: uppercase;
  border-bottom: 1px solid #d99453;
  font-size: 30px;
`;

export const LanguageText = styled.div`
  margin: 15px 0;
  text-align: justify;
`;

export const LanguageBlockMob = styled.div`
  display: none;
  @media (max-width: 860px) {
    display: block;
    margin: 15px 0;
    padding: 0 20px;
    color: #393e5b;
  }
`;

export const SkillsBlock = styled.div`
  display: block;
  margin: 25px 0 35px 0;
  padding: 0 20px;
  color: #ffffff;
  @media (max-width: 860px) {
    display: none;
  }
`;
export const SkillsTitle = styled.div`
  text-transform: uppercase;
  border-bottom: 1px solid #d99453;
  font-size: 30px;
`;

export const SkillsText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SkillsSubBlock = styled.div`
  margin-bottom: 10px;
`;

export const SkillsSubSubBlock = styled.div``;

export const SkillsSubTitle = styled.div`
  margin: 10px 0;
  font-style: italic;
`;

export const SkillsBlockMob = styled.div`
    display: none;
  @media (max-width: 860px) {
    display: block;
  margin: 25px 0 35px 0;
  padding: 0 20px;
  color: #393e5b;;
  }
`;

export const JobExperienceBlok =styled.div`
      display: block;
     margin: 25px 0 35px 0;
  padding: 0 20px;
  color: #393e5b;
`
export const JobExperienceTitleBlok =styled.div`
  border-bottom: 1px solid #d99453;
  display: flex;
  gap: 10px;

`
export const JobExperienceTitleSVG =styled.div`
width: 30px;

`
export const JobExperienceTitleText =styled.div`
  text-transform: uppercase;
  font-size: 30px;
  display: flex;
  align-items: center;
`

export const JobExperienceInfoBlok =styled.div`
display: grid;
margin: 20px 0;
gap: 10px;
grid-template-columns: 15% 85%;

`

export const JobExperienceInfoTime =styled.div`
margin-top: 5px;
    
`

export const JobExperienceInfoPlace =styled.div`
    font-size: 25px;
    color: #c37865;
`

export const JobExperienceInfoProfession = styled.div`
    font-size: 18px;
    color: #393e5b;;
`

export const ProjectExperienceInfoBlok =styled.div`
margin: 20px 0;
`
export const SubJobTitle =styled.div`
color: #c37865;
margin: 5px 0;
font-style: italic;
`