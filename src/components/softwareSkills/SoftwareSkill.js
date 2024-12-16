import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {Object.entries(skillsSection.categories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="category-title">{category}</h3>
            <ul className="dev-icons">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skill.skillName}
                >
                  <i className={skill.fontAwesomeClassname}></i>
                  <p>{skill.skillName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

