import React from "react";
import Box from "@material-ui/core/Box";
import { SearchInput } from "../SearchInput/SearchInput";

const MainHeader = () => {
  return (
    <>
      <Box display="flex" justifyContent="flex-end" p={1}>
        <Box>
          <p>Apiril 18, 2021</p>
        </Box>
        <Box>
          <SearchInput />
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ paddingRight: "10px" }}>
            <p>Eleanor Pena</p>
            <p style={{ textAlign: "right", fontSize: 10, opacity: 0.5 }}>
              Admin
            </p>
          </Box>
          <img
            src="/admin.png"
            alt="profile"
            style={{ width: "50px", height: "50px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default MainHeader;
