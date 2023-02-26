import {bioEnglish, bioFrench} from "./bio";
// import {statementEnglish, statementFrench} from "./statement";
import {pressFrench, pressEnglish} from "./press";
import {projectsFrench, projectsEnglish} from "./projects";
import {bookingEnglish, bookingFrench} from "./booking";
import {
  pageCategoriesEnglish as english,
  pageCategoriesFrench as french
} from "../../pages/constants";

export const contentFrench = [
  {category: french.BIO, bio: bioFrench},
  {
    category: french.PRESSKIT_CONTACT,
    press: pressFrench, 
    booking: bookingFrench,
  },
  {category: french.PROJECTS, projects: projectsFrench},
];

export const contentEnglish = [
  {category: english.BIO, bio: bioEnglish},
  {
    category: english.PRESSKIT_CONTACT,
    press: pressEnglish,
    booking: bookingEnglish,
  },
  {category: 'Projects', projects: projectsEnglish},
];
