import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionItem({ section }) {
  const [open, setOpen] = useState(section.defaultOpen || false);

  const Icon = section.icon;

  return (
    <div className=" border mb-4">

      <div
        className="d-flex justify-content-between align-items-center p-4"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >

        <div className="d-flex align-items-center">

          <Icon
            size={18}
            className="text-primary me-3"
          />

          <h6 className="mb-0">
            {section.title}
          </h6>

        </div>

        {open ? <ChevronUp /> : <ChevronDown />}

      </div>

      {open && (
        <div className="px-5 pb-4">

          <ul>

            {section.links.map((link) => (
              <li className="mb-3" key={link}>
                <a href="/">{link}</a>
              </li>
            ))}

          </ul>

        </div>
      )}

    </div>
  );
}

export default AccordionItem;