import { ReactElement } from "react";
import withStyles from "@mui/styles/withStyles";
import {
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { getStyles } from "../../assets/theme/utils";
const styleClasses = getStyles.use_styles;
function CustomizedButtons({ classes }: any): ReactElement {
  return (
    <Grid container spacing={5} direction="column">
      <Grid item className={classes.header}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h3" color="primary">
            TS / React / MUI / ThreeJS BOILERPLATE
          </Typography>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.body}>
        <Paper elevation={0} className={classes.paper}>
          <Card sx={{ maxWidth: 320 }}>
            <CardContent>
              <Typography variant="h5" color="primary">
                {"Material-ui > ThreeJS"}
              </Typography>
              <Typography>
                This is a Material UI component.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.footer}>
        <Paper elevation={0} className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styleClasses)(CustomizedButtons);
