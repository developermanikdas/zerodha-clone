import {
  latestUpdates,
  quickLinks,
} from "../data/supportData";

function Sidebar() {
  return (
    <div className="conatiner">
      <div className="border-start border-warning border-4 bg-light p-3 mb-4">

        <ul>

          {latestUpdates.map((item) => (
            <li key={item} className="mb-3">
              <a href="/">{item}</a>
            </li>
          ))}

        </ul>

      </div>

      <div className="border">

        <div className="bg-light p-3">
          <strong>Quick links</strong>
        </div>

        <ul className="list-group list-group-flush">

          {quickLinks.map((item) => (
            <li
              key={item}
              className="list-group-item"
            >
              <a href="/">{item}</a>
            </li>
          ))}

        </ul>

      </div>
    </div>
  );
}

export default Sidebar;