import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  Button,
  makeStyles,
  Container,
} from "@material-ui/core";

import TranslateIcon from "@material-ui/icons/Translate";
import ExpandModeIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Grid container spacing={4} alignItems="center">
              <Grid item>
                <Typography variant="h6">Now Club</Typography>
              </Grid>

              <Grid item xs />

              <Grid item component="nav">
                <Grid container direction="row" spacing={2}>
                  <Grid item>
                    <Button color="inherit">Menu</Button>
                  </Grid>
                  <Grid item>
                    <Button color="inherit">Menu</Button>
                  </Grid>
                  <Grid item>
                    <Button color="inherit">Menu</Button>
                  </Grid>
                  <Grid item>
                    <Button color="inherit">Menu</Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Button
                  color="inherit"
                  startIcon={<TranslateIcon />}
                  endIcon={<ExpandModeIcon />}
                >
                  English
                </Button>
              </Grid>

              <Grid item>
                <Button color="inherit">Login</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
