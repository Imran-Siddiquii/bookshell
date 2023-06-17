import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// Styled header component
const StyledHeader = styled("header")`
  display: flex;
  justify-content: center;
`;

// Styled brand component
const StyledBrand = styled(Typography)`
  flex-grow: 2;
  text-align: center;
`;

// Styled search bar container component
const StyledSearchContainer = styled("div")`
  position: relative;
  border-radius: 4px;
  background-color: #f0f0f0;
  margin-left: 8px;
  margin-right: 8px;
  width: 100%;

  & > .MuiSvgIcon-root {
    color: rgba(0, 0, 0, 0.54);
    padding: 0 8px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

// Styled search input component
const StyledSearchInput = styled(InputBase)`
  color: black;
  padding: 8px;
  padding-right: 36px;
  width: 100%;
`;

// Header component
const Header = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  return (
    <StyledHeader>
      <AppBar position="static">
        <Toolbar>
          <StyledBrand variant="h6">Bookshell</StyledBrand>
          <StyledSearchContainer>
            <StyledSearchInput
              placeholder="Search..."
              onChange={(e) => setInputValue(e.target.value)}
            />
            <SearchIcon
              onClick={() => navigate(`/search-query/${inputValue}`)}
            />
          </StyledSearchContainer>
        </Toolbar>
      </AppBar>
    </StyledHeader>
  );
};

export default Header;
