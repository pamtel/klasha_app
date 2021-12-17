import React from "react";
import { use404Styles } from "./styles";

export const NoData = () => {
    const classes = use404Styles();
    return (
      <div className={classes.root}>
        <div className={classes.message}>
          <p className={classes.text}>No information could be found</p>
        </div>
      </div>
    );
}
