import { useState, useRef } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  Container,
  useMediaQuery,
  IconButton,
  ButtonBase,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core";

import { useTheme } from "@material-ui/styles";

import TranslateIcon from "@material-ui/icons/Translate";
import ExpandModeIcon from "@material-ui/icons/ExpandMore";

function LanguageSwitcher() {
  const languages = [
    {
      en: { label: "English" },
      fr: { label: "French" },
      de: { label: "Deutch" },
      es: { label: "Español" }
    }
  ];

  const [lang, setLang] = useState("en");

  const theme = useTheme();
  const isLargeWidth = useMediaQuery(theme.breakpoints.up("sm"));

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChangeLang = (language) => {
    setLang(language);
    handleClose();
  };

  return (
    <>
      <div>
        {isLargeWidth ? (
          <Button
            color="inherit"
            startIcon={<TranslateIcon />}
            endIcon={<ExpandModeIcon />}
            onClick={handleClick}
          >
            {lang}
          </Button>
        ) : (
          <IconButton onClick={handleClick}>
            <TranslateIcon />
          </IconButton>
        )}
      </div>

      <Menu open={anchorEl} onClose={handleClose} anchorEl={anchorEl}>
        {Object.entries(languages).map(([key, { label }]) => (
          <MenuItem onClick={() => handleChangeLang("key")}>{label}</MenuItem>
        ))}
      </Menu>
    </>
  );
}

const useNavMenuStyles = makeStyles((theme) => ({
  tabContainer: { ...theme.mixins.toolbar },
  tabItem: { ...theme.mixins.toolbar }
}));

function NavMenu({ links }) {
  const [tab, setTab] = useState(0);
  const classes = useNavMenuStyles();

  return (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      value={tab}
      onChange={(event, value) => setTab(value)}
      className={classes.tabContainer}
    >
      {links.map(({ label, href }) => (
        <Tab className={classes.tabItem} component="a" label={label} />
      ))}
    </Tabs>
  );
}

export default function Nav() {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={0}
      style={{
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h6">Now Club</Typography>
          </Grid>

          <Grid item xs />

          <Grid item>
            <NavMenu
              links={[
                { label: "Home" },
                { label: "Blog" },
                { label: "Hire Us" },
                { label: "Contacts" }
              ]}
            />
          </Grid>

          <Grid item>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item>
                <LanguageSwitcher />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
