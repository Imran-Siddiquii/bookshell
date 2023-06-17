import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import CardComponent from "./Card";
import bookData from "./UserData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Home = () => {
  const [books, setBooks] = React.useState(bookData);

  const bookStatusHandle = (value, book) => {
    setBooks((prev) => {
      prev[book - 1].currentStatus = value;
      return [...prev];
    });
  };

  return (
    <div>
      <div style={{ margin: "30px", border: "1px solid gray" }}>
        <h2 style={{ textAlign: "center" }}>I Have read</h2>
        <Box sx={{ flexGrow: 1 }} style={{ margin: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {books
              .filter((ele) => ele.currentStatus === "Done")
              .map((book) => (
                <>
                  <Grid key={book.id} item xs={2} sm={4} md={4}>
                    <CardComponent
                      currentStatus={"Done"}
                      bookStatusHandle={bookStatusHandle}
                      book={book}
                    />
                  </Grid>
                </>
              ))}
          </Grid>
        </Box>
      </div>
      <div style={{ margin: "30px", border: "1px solid gray" }}>
        <h2 style={{ textAlign: "center" }}>
          These Books i am currently reading
        </h2>
        <Box sx={{ flexGrow: 1 }} style={{ margin: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {books
              .filter((ele) => ele.currentStatus === "Current")
              .map((book) => (
                <>
                  <Grid key={book.id} item xs={2} sm={4} md={4}>
                    <CardComponent
                      currentStatus={"Current"}
                      bookStatusHandle={bookStatusHandle}
                      book={book}
                    />
                  </Grid>
                </>
              ))}
          </Grid>
        </Box>
      </div>
      <div style={{ margin: "30px", border: "1px solid gray" }}>
        <h2 style={{ textAlign: "center" }}>I Want to read</h2>
        <Box sx={{ flexGrow: 1 }} style={{ margin: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {books
              .filter((ele) => ele.currentStatus === "Read")
              .map((book) => (
                <>
                  <Grid key={book.id} item xs={2} sm={4} md={4}>
                    <CardComponent
                      currentStatus={"Read"}
                      bookStatusHandle={bookStatusHandle}
                      book={book}
                      typo={"default"}
                    />
                  </Grid>
                </>
              ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};
