import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";

/**
 * @typedef {import("@prismicio/client").Content.ProgrammsSlice} ProgrammsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProgrammsSlice>} ProgrammsProps
 * @param {ProgrammsProps}
 */
const Programms = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* {isFilled.richText(slice.primary.description) && (
        <div className="es-fullpage-hero__content__intro__headline">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )} */}
    </section>
  );
};

export default Programms;
