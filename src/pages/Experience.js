import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#3e497a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3e497a" }}
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<span className="material-icons">work</span>}
        >
          <h3 className="vertical-timeline-element-title">
            Solar Secure Solutions
          </h3>
          <p className="date">May 2023 - Present · 3 mos</p>
          <p>Internship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#3e497a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3e497a" }}
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<span className="material-icons">work</span>}
        >
          <h3 className="vertical-timeline-element-title">CodeClause</h3>
          <p className="date">Mar 2023 - Apr 2023 · 2 mos</p>
          <p>Internship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#3e497a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3e497a" }}
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<span className="material-icons">work</span>}
        >
          <h3 className="vertical-timeline-element-title">LetsGrowMore</h3>
          <p className="date">Feb 2023 - Mar 2023 · 2 mos</p>
          <p>Internship</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
