import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Popover,
} from "@mui/material";
import { Done, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { styled } from "@mui/system";

// Styled card component
const StyledCard = styled(Card)`
  display: flex;
  margin-bottom: 16px;
`;

// Styled card media (image) component
const StyledCardMedia = styled(CardMedia)`
  width: 200px;
`;

// Styled card content component
const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

// Styled left column
const StyledLeftColumn = styled("div")`
  display: flex;
  flex-direction: column;
`;

// Styled title component
const StyledTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
`;

// Styled author component
const StyledAuthor = styled(Typography)`
  font-size: 16px;
`;

// Card component
const CardComponent = ({ book, bookStatusHandle }) => {
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  const open = Boolean(popoverAnchorEl);
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        height="200"
        image={book?.image} // Replace with your image URL
        alt="Card Image"
      />
      <StyledCardContent>
        <StyledLeftColumn>
          <StyledTitle variant="h6">{book.name}</StyledTitle>
          <StyledAuthor variant="subtitle1">{book.author}</StyledAuthor>
          <StyledAuthor variant="subtitle1">{book.description}</StyledAuthor>
        </StyledLeftColumn>
        <IconButton onClick={handlePopoverOpen}>
          <MoreVertIcon />
        </IconButton>
        <Popover
          open={open}
          anchorEl={popoverAnchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {book?.status.map((list, index) => {
            console.log(index, "cechk");
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    width: "6rem",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {book.currentStatus === list ? <Done /> : null}
                  {/* <button > */}
                  <Typography
                    onClick={() => bookStatusHandle(list, book.id)}
                    variant="body2"
                    sx={{ padding: "8px" }}
                  >
                    {list}
                  </Typography>
                  {/* </button> */}
                </div>
              </>
            );
          })}
        </Popover>
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardComponent;
