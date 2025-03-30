import React, { useState } from "react";
import "./style.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import image1 from "../../assets/accordian_image_one.png";
import image2 from "../../assets/accordian_image_two.png";
import image3 from "../../assets/accordian_image_three.png";
import ThinChevronIcon from "../ThinChevron";

const accordionData = [
  {
    title: "Explore Fly Fishing",
    image: image1,
    heading: "Explore Fly Fishing",
    description:
      "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.",
  },
  {
    title: "Fly Fishing Experiences",
    image: image2,
    heading: "Explore Fly Fishing",
    description:
      "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.",
  },
  {
    title: "Gear Up and Catch More",
    image: image3,
    heading: "Explore Fly Fishing",
    description:
      "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.",
  },
];

const HomeAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className="accordion-wrapper">
      <div className="accordion-section-title">Featured options</div>
      {!isMobile &&
        accordionData.map((item, index) => (
          <Accordion
            key={index}
            className="accordion"
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary expandIcon={<ThinChevronIcon size={32} />}>
              <Typography className="accordion-title">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="accordion-details">
                {/* Left: Image */}
                <img
                  src={item.image}
                  alt="accordion-img"
                  className="accordion-image"
                />

                {/* Right: Content */}
                <Box className="accordion-text-content">
                  <div className="accordion-heading">{item.heading}</div>
                  <div className="accordion-description">
                    {item.description}
                  </div>
                  <button className="accordion-button">Learn More</button>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}

      {/* Mobile: Stacked Cards */}
      {isMobile && (
        <div className="card-list">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="mobile-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="card-overlay">
                <div className="card-overlay-content">
                  <div className="accordion-heading">{item.heading}</div>
                  <div className="accordion-description">
                    {item.description}
                  </div>
                  <button className="accordion-button">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
};

export default HomeAccordion;
