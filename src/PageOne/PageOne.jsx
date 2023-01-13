import React from "react";
import * as Styled from "./PageOne.styled";
import PhoneSVG from "../svg/Phone.jsx";
import LinkendinSVG from "../svg/LinkedIn";
import Mail from "../svg/Mail";
import Job from "../svg/Job";
import Education from "../svg/Education";

const PageOne = () => {
  return (
    <Styled.List>
      <Styled.Sidebar>
        <Styled.SidebarPhotoBlock>
          <Styled.SidebarPhotoBorder>
            <Styled.SidebarPhoto />
          </Styled.SidebarPhotoBorder>
        </Styled.SidebarPhotoBlock>
        <Styled.SidebarInfoBlock>
          <Styled.NameProfessionBlockMob>
            <Styled.NameBlockMob>Alexandr Lagodich</Styled.NameBlockMob>
            <Styled.ProfessionBlockMob>
              Frontend developer (React)
            </Styled.ProfessionBlockMob>
          </Styled.NameProfessionBlockMob>
          <Styled.AboutMeBlock>
            <Styled.AboutMeTitle>About me</Styled.AboutMeTitle>
            <Styled.AboutMeText>
              Frontend developer with 1 year of experience in developing at
              various projects in different sphere. Purposeful, persistent, I'm
              not familiar with the word - stress. Multitask. Always looking to
              learn something new.
            </Styled.AboutMeText>
          </Styled.AboutMeBlock>
          <Styled.SkillsBlock>
            <Styled.SkillsTitle>Skills</Styled.SkillsTitle>
            <Styled.SkillsSubTitle>Professional skills</Styled.SkillsSubTitle>
            <Styled.SkillsSubBlock>
              <Styled.SkillsText>
                <Styled.SkillsSubSubBlock>
                  <li>HTML5</li>
                  <li>SCSS/SASS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Redux Toolkit</li>
                  <li>TypeScript</li>
                  <li>Webpack</li>
                </Styled.SkillsSubSubBlock>
                <Styled.SkillsSubSubBlock>
                  <li>Styled Component</li>
                  <li>Material UI</li>
                  <li>Figma</li>
                  <li>Postman</li>
                  <li>Strapi</li>
                  <li>Firebase</li>
                  <li>Git</li>
                  <li>Jira</li>
                </Styled.SkillsSubSubBlock>
              </Styled.SkillsText>
              <Styled.SkillsSubTitle>Personal skills</Styled.SkillsSubTitle>
              <Styled.SkillsText>
                <Styled.SkillsSubSubBlock>
                  <li>Communicative</li>
                  <li>Stress resistant</li>
                  <li>Purposeful</li>
                  <li>Persistent</li>
                </Styled.SkillsSubSubBlock>
              </Styled.SkillsText>
            </Styled.SkillsSubBlock>
          </Styled.SkillsBlock>
          <Styled.ContactsBlock>
            <Styled.ContactsTitle>Contacts</Styled.ContactsTitle>
            <Styled.ContactsText>
              <Styled.ContactsSubBlock href="tel:+375291305307">
                <Styled.ContactsSubSvgBlock>
                  <PhoneSVG />
                </Styled.ContactsSubSvgBlock>
                <Styled.ContactsSubTitle>Phone</Styled.ContactsSubTitle>
                <Styled.ContactsSubText>
                  +375(29)130-53-07
                </Styled.ContactsSubText>
              </Styled.ContactsSubBlock>
              <Styled.ContactsSubBlock href="https://www.linkedin.com/in/alexander-lagodich-aa2726174/">
                <Styled.ContactsSubSvgBlock>
                  <LinkendinSVG />
                </Styled.ContactsSubSvgBlock>
                <Styled.ContactsSubTitle>LinkedIn</Styled.ContactsSubTitle>
                <Styled.ContactsSubText>
                  alexander-lagodich
                </Styled.ContactsSubText>
              </Styled.ContactsSubBlock>
              <Styled.ContactsSubBlock href="mailto:lagodichalexandr@gmail.com">
                <Styled.ContactsSubSvgBlock>
                  <Mail />
                </Styled.ContactsSubSvgBlock>
                <Styled.ContactsSubTitle>Mail</Styled.ContactsSubTitle>
                <Styled.ContactsSubText>
                  lagodichalexandr@gmail.com
                </Styled.ContactsSubText>
              </Styled.ContactsSubBlock>
            </Styled.ContactsText>
          </Styled.ContactsBlock>
          <Styled.LanguageBlock>
            <Styled.LanguageTitle>Language</Styled.LanguageTitle>
            <Styled.LanguageText>
              <li>English – B1 – Intermediate</li>
            </Styled.LanguageText>
          </Styled.LanguageBlock>
        </Styled.SidebarInfoBlock>
      </Styled.Sidebar>
      <Styled.ContentBody>
        <Styled.NameProfessionBlock>
          <Styled.NameBlock>Alexandr Lagodich</Styled.NameBlock>
          <Styled.ProfessionBlock>
            Frontend developer (React)
          </Styled.ProfessionBlock>
        </Styled.NameProfessionBlock>
        <Styled.AboutMeBlockMob>
          <Styled.AboutMeTitle>About me</Styled.AboutMeTitle>
          <Styled.AboutMeText>
            Frontend developer with 1,5 year of experience in developing at
            various projects in different sphere. Purposeful, persistent, I'm
            not familiar with the word - stress. Multitask. Always looking to
            learn something new.
          </Styled.AboutMeText>
        </Styled.AboutMeBlockMob>
        <Styled.SkillsBlockMob>
          <Styled.SkillsTitle>Skills</Styled.SkillsTitle>
          <Styled.SkillsSubTitle>Professional skills</Styled.SkillsSubTitle>
          <Styled.SkillsSubBlock>
            <Styled.SkillsText>
              <Styled.SkillsSubSubBlock>
                <li>HTML5</li>
                <li>SCSS/SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Redux Toolkit</li>
                <li>TypeScript</li>
                <li>Webpack</li>
              </Styled.SkillsSubSubBlock>
              <Styled.SkillsSubSubBlock>
                <li>Styled Component</li>
                <li>Material UI</li>
                <li>Figma</li>
                <li>Postman</li>
                <li>Strapi</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>Jira</li>
              </Styled.SkillsSubSubBlock>
            </Styled.SkillsText>
            <Styled.SkillsSubTitle>Personal skills</Styled.SkillsSubTitle>
            <Styled.SkillsText>
              <Styled.SkillsSubSubBlock>
                <li>Communicative</li>
                <li>Stress resistant</li>
                <li>Purposeful</li>
                <li>Persistent</li>
              </Styled.SkillsSubSubBlock>
            </Styled.SkillsText>
          </Styled.SkillsSubBlock>
        </Styled.SkillsBlockMob>
        <Styled.LanguageBlockMob>
          <Styled.LanguageTitle>Language</Styled.LanguageTitle>
          <Styled.LanguageText>
            <li>English – B1 – Intermediate</li>
          </Styled.LanguageText>
        </Styled.LanguageBlockMob>
        <Styled.JobExperienceBlok>
          <Styled.JobExperienceTitleBlok>
            <Styled.JobExperienceTitleSVG>
              <Job />
            </Styled.JobExperienceTitleSVG>
            <Styled.JobExperienceTitleText>
              Job Experience
            </Styled.JobExperienceTitleText>
          </Styled.JobExperienceTitleBlok>
          <Styled.JobExperienceInfoBlok>
            <Styled.JobExperienceInfoTime>
              01/2022 - to current time
            </Styled.JobExperienceInfoTime>
            <Styled.JobExperienceInfoPlace>
              Fresh Lime Soft
              <Styled.JobExperienceInfoProfession>
                Frontend Developer(React)
              </Styled.JobExperienceInfoProfession>
            </Styled.JobExperienceInfoPlace>
          </Styled.JobExperienceInfoBlok>
          <Styled.JobExperienceInfoBlok>
            <Styled.JobExperienceInfoTime>
              01/2022 - to current time
            </Styled.JobExperienceInfoTime>
            <Styled.JobExperienceInfoPlace>
              Fresh Lime Soft
              <Styled.JobExperienceInfoProfession>
                Frontend Developer(React)
              </Styled.JobExperienceInfoProfession>
            </Styled.JobExperienceInfoPlace>
          </Styled.JobExperienceInfoBlok>
        </Styled.JobExperienceBlok>
        <Styled.JobExperienceBlok>
          <Styled.JobExperienceTitleBlok>
            <Styled.JobExperienceTitleSVG>
              <Job />
            </Styled.JobExperienceTitleSVG>
            <Styled.JobExperienceTitleText>
              Project Experience
            </Styled.JobExperienceTitleText>
          </Styled.JobExperienceTitleBlok>
          <Styled.JobExperienceInfoBlok>
            <Styled.JobExperienceInfoTime>
              08/2022 - 12/2022
            </Styled.JobExperienceInfoTime>
            <Styled.JobExperienceInfoPlace>
              Clothing rental app
              <Styled.JobExperienceInfoProfession>
              Development of a desktop version of a clothing rental application
              </Styled.JobExperienceInfoProfession>
              <Styled.JobExperienceInfoProfession>
                <Styled.SubJobTitle>Tasks performed:</Styled.SubJobTitle>
                 Development of the Front-end part of the desktop version, Code review, Optimize app performance
              </Styled.JobExperienceInfoProfession>
            </Styled.JobExperienceInfoPlace>
          </Styled.JobExperienceInfoBlok>
          <Styled.JobExperienceInfoBlok>
            <Styled.JobExperienceInfoTime>
              02/2022 - 07/2022
            </Styled.JobExperienceInfoTime>
            <Styled.JobExperienceInfoPlace>
              Healthy food delivery website
              <Styled.JobExperienceInfoProfession>
                An application designed to order a healthy food ration for the
                whole day/week/month.{" "}
              </Styled.JobExperienceInfoProfession>
              <Styled.JobExperienceInfoProfession>
                <Styled.SubJobTitle>Tasks performed:</Styled.SubJobTitle>
                Create cross-platform reusable components, Development of the Front-end part,
                Development of SPA from scratch, Code review
              </Styled.JobExperienceInfoProfession>
            </Styled.JobExperienceInfoPlace>
          </Styled.JobExperienceInfoBlok>
          <Styled.JobExperienceInfoBlok>
            <Styled.JobExperienceInfoTime>
              06/2021 - 12/2021
            </Styled.JobExperienceInfoTime>
            <Styled.JobExperienceInfoPlace>
              Comic store
              <Styled.JobExperienceInfoProfession>
                Large online comic book store with about 5,000 comics
              </Styled.JobExperienceInfoProfession>
              <Styled.JobExperienceInfoProfession>
                <Styled.SubJobTitle>Tasks performed:</Styled.SubJobTitle>
                Architecture building, Development of the Front-end part,
                Complete development of a multi-page website from scratch,Create cross-platform reusable components, Code review
              </Styled.JobExperienceInfoProfession>
            </Styled.JobExperienceInfoPlace>
          </Styled.JobExperienceInfoBlok>
        </Styled.JobExperienceBlok>
        <Styled.JobExperienceBlok>
          <Styled.JobExperienceTitleBlok>
            <Styled.JobExperienceTitleSVG>
              <Education />
            </Styled.JobExperienceTitleSVG>
            <Styled.JobExperienceTitleText>
              Education
            </Styled.JobExperienceTitleText>
          </Styled.JobExperienceTitleBlok>
          <Styled.JobExperienceInfoBlok>
            <Styled.JobExperienceInfoTime>
              2016-2020
            </Styled.JobExperienceInfoTime>
            <Styled.JobExperienceInfoPlace>
              Belarusian State Technological University
              <Styled.JobExperienceInfoProfession>
                Economics and management at the enterprise of production of
                building materials
              </Styled.JobExperienceInfoProfession>
            </Styled.JobExperienceInfoPlace>
          </Styled.JobExperienceInfoBlok>
        </Styled.JobExperienceBlok>
      </Styled.ContentBody>
    </Styled.List>
  );
};

export default PageOne;
