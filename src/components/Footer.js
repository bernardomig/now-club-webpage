import {
  Box,
  Container,
  Typography,
  useTheme,
  Grid,
  Link,
  IconButton,
  Icon
} from "@material-ui/core";

import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon
} from "@material-ui/icons";

export default function Footer() {
  const { palette, spacing } = useTheme();

  return (
    <>
      <Box style={{ backgroundColor: palette.primary.dark }}>
        <Container>
          <Box py={6} color="white">
            <Typography
              variant="h5"
              style={{ fontWeight: 700, letterSpacing: -0.5 }}
            >
              Now Club
            </Typography>

            <Box mt={1} color="white">
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Box>
                    <Typography variant="body1">email@email.com</Typography>
                    <Typography variant="body1">+351 964 123 112</Typography>
                  </Box>

                  <Box
                    mt={2}
                    style={{
                      display: "flex",
                      gap: spacing(1),
                      flexDirection: "row"
                    }}
                  >
                    <Icon color="inherit" size="large">
                      <FacebookIcon />
                    </Icon>
                    <Icon color="inherit" size="large">
                      <LinkedInIcon />{" "}
                    </Icon>
                    <Icon color="inherit" size="large">
                      <InstagramIcon />{" "}
                    </Icon>
                  </Box>
                </Grid>

                <Grid
                  item
                  container
                  xs={12}
                  md={3}
                  direction="column"
                  spacing={1}
                >
                  <Grid item>
                    <Typography variant="h6">Links</Typography>
                  </Grid>

                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry1
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry2
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry3
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry4
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Contacts
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      FAQ
                    </Link>
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  xs={12}
                  md={3}
                  direction="column"
                  spacing={1}
                >
                  <Grid item>
                    <Typography variant="h6">Links</Typography>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry1
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry2
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry3
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Entry4
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      Contacts
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link color="inherit" href="#" variant="body1">
                      FAQ
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box py={2}>
        <Container>
          <Typography variant="body2">Copyright @ 2021</Typography>
        </Container>
      </Box>
    </>
  );
}
