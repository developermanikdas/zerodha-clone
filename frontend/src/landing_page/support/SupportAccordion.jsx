import { supportSections } from "../data/supportData.js";
import AccordionItem from "../partials/AccordionItem";

function SupportAccordion() {
  return (
    <div className="container">
      {supportSections.map((section) => (
        <AccordionItem
          key={section.id}
          section={section}
        />
      ))}
    </div>
  );
}

export default SupportAccordion;