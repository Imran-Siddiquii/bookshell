import React from "react";
import { useParams } from "react-router-dom";
import bookData from "./UserData";
import { Box, Grid } from "@mui/material";
import CardComponent from "./Card";

export const SearchItem = () => {
  const { id } = useParams();
  const books = bookData.filter((ele) => ele.name === id);
  const bookStatusHandle = (value, book, index) => {
    // console.log(books[index]?.id === book, value, book, index);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ margin: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {books.map((book) => (
            <>
              <Grid key={book.id} item xs={2} sm={4} md={4}>
                <CardComponent
                  bookStatusHandle={bookStatusHandle}
                  book={book}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
