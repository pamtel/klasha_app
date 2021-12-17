import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const use404Styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'gray',
      height: "100vh",
      width: "100vw",
      fontFamily: "Nunito, sans-serif",
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems:"center",
      },
      message: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top:"-5vh"
      },
      image: {
          objectFit: "cover",
          marginBottom: theme.spacing(5),
      },
      text: {
        fontSize: "1.3rem",
      }
  }),
);

