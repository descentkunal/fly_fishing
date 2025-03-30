import React from "react";
import "./style.css";
import cardimage1 from "../../assets/card-image-one.png";
import cardimage2 from "../../assets/card-image-two.png";
import cardimage3 from "../../assets/card-image-three.png";
import cardimage4 from "../../assets/card-image-four.png";
import { useMediaQuery, useTheme, Grid, Box } from "@mui/material";

const cardData = [
  {
    heading: "John’s Story",
    description:
      "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
    image: cardimage1,
  },
  {
    heading: "The Journey",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: cardimage2,
  },
  {
    heading: "Catch Day",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    image: cardimage3,
  },
  {
    heading: "Trout Tales",
    description:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    image: cardimage4,
  },
];

const HomeMemberStories: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="member-wrapper">
      <div className="member-title">Member stories</div>

      {isMobile ? (
        <div className="member-grid">
          {cardData.map((card, index) => (
            <div key={index} className="member-card mobile">
              <div className="member-card-heading">{card.heading}</div>

              <div className="member-card-content mobile">
                <img
                  src={card.image}
                  alt="Member"
                  className="member-card-image mobile"
                />
                <div className="member-card-description">
                  {card.description}
                </div>
              </div>

              <button className="member-card-button">Read More</button>
            </div>
          ))}
        </div>
      ) : (
        <Grid container spacing={6}>
          {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Box className="member-card desktop">
                <img
                  src={card.image}
                  alt="Member"
                  className="member-card-image"
                />
                <Box className="member-card-content">
                  <div className="member-card-heading">{card.heading}</div>
                  <div className="member-card-description">
                    {card.description}
                  </div>
                  <button className="member-card-button">Read More</button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomeMemberStories;
