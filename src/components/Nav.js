import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  IconButton,
  Tabs,
  Paper,
  Tab,
  Menu,
  MenuItem,
  Box,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Drawer
} from "@material-ui/core";

import { useTheme } from "@material-ui/styles";

import TranslateIcon from "@material-ui/icons/Translate";
import ExpandModeIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function LanguageSwitcher() {
  const languages = [
    { key: "en", label: "English" },
    { key: "fr", label: "French" },
    { key: "de", label: "Deutch" },
    { key: "es", label: "Español" }
  ];

  const [lang, setLang] = useState("en");

  const theme = useTheme();
  const isLargeWidth = useMediaQuery(theme.breakpoints.up("lg"));

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
        {languages.map(({ key, label }) => (
          <MenuItem onClick={() => handleChangeLang(key)}>{label}</MenuItem>
        ))}
      </Menu>
    </>
  );
}

const useNavMenuStyles = makeStyles((theme) => ({
  tabContainer: { ...theme.mixins.toolbar },
  tabItem: { ...theme.mixins.toolbar, minWidth: "121px" }
}));

function NavMenu({ links }) {
  const classes = useNavMenuStyles();
  const router = useRouter();
  const path = router.asPath;

  return (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      onChange={(event, value) => router.push(value)}
      className={classes.tabContainer}
      value={path}
    >
      {links.map(({ label, href }) => (
        <Tab
          className={classes.tabItem}
          component="a"
          label={label}
          value={href}
        />
      ))}
    </Tabs>
  );
}

export default function Nav() {
  const theme = useTheme();
  const isLargeWidth = useMediaQuery(theme.breakpoints.up("md"));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Drawer
        anchor={"left"}
        open={isDrawerOpen && !isLargeWidth}
        onClose={() => setDrawerOpen(false)}
      >
        <Box style={{ minWidth: "min(320px, 100vw)" }} py={4}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>

          <Box mt={3} mx={2}>
            <Typography
              variant="h6"
              style={{ fontWeight: 700, letterSpacing: -0.5 }}
            >
              <a style={{ textDecoration: "none", color: "inherit" }} href="/">
                Now Club
              </a>
            </Typography>
          </Box>

          <Box mt={3}>
            <List component="nav">
              <ListItem button disableTypography>
                <Typography variant="subtitle1" selected>
                  Home
                </Typography>
              </ListItem>
              <ListItem button disableTypography>
                <Typography variant="subtitle1">Contact</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
      <AppBar
        position="static"
        elevation={0}
        style={{
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            {!isLargeWidth && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Grid item>
              <Typography
                variant="h6"
                style={{ fontWeight: 700, letterSpacing: -0.5 }}
              >
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="/"
                >
                  Now Club
                </a>
              </Typography>
            </Grid>

            <Grid item xs />

            {isLargeWidth && (
              <Grid item>
                <NavMenu
                  links={[
                    { label: "Courses", href: "/courses" },
                    { label: "Contact", href: "/contact" }
                  ]}
                />
              </Grid>
            )}

            <Grid item>
              <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item>
                  <LanguageSwitcher />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
