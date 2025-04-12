import { SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { authorType } from "./author";

import { categoryType } from "./category";

import { videoType } from "./videoType";
import { formType } from "./formType";
import { heroType } from "./heroType";

import { promotionType } from "./promotionType";
import { projectType } from "./projectType";
import { expertisesType } from "./expertiseType";
import { sectionImageOverlay } from "./sectionImageOverlay";
import { textWithIllustrationType } from "./textWithIllu";
import { pageType } from "./pageType";
import { blockContentType } from "./blockContent";
import { imageGalleryType } from "./imageGallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    authorType,
    imageGalleryType,
    categoryType,
    blockContentType,
    pageType,
    sectionImageOverlay,
    textWithIllustrationType,
    videoType,
    formType,
    heroType,
    expertisesType,
    promotionType,
    projectType,
  ],
};
