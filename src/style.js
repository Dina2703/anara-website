const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1:
    "font-poppins font-semibold xs:text-[28px] text-[20px] text-white xs:leading-[36.8px] leading-[26.8px] w-full",
  heading2:
    "font-poppins font-semibold xs:text-[30px] text-[19.5px] text-white sm:leading-[68.8px] leading-[45.8px] w-full text-center sm:text-left",
  paragraph:
    "font-poppins text-left text-dimWhite text-[14px] sm:text-[16px] leading-[20.8px] ",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-8 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row-reverse flex-col ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-3 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
