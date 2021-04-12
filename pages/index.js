import Image from "next/image";
import {
  Container,
  Divider,
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  useTheme,
  Card,
  useMediaQuery,
  Paper,
  CardMedia,
  CardHeader,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import Nav from "../src/components/Nav";
import { grey, purple } from "@material-ui/core/colors";

import EmailIcon from "@material-ui/icons/Email";

const people = [
  {
    key: "c8bf171b-1972-42cd-86ac-da5b3b180e04",
    name: "Miguel Fidalgo",
    role: "Founder and English teaching",
  },
  {
    key: "453ec371-8917-4b88-83f8-22f924c6c738",
    name: "Susana Ho",
    role: "Business Manager",
  },
  {
    key: "ba8049f0-4971-47d2-84d6-d325ffd80dfc",
    name: "Ivan Garcia",
    role: "Pedagogic Director",
  },
  {
    key: "787d02a3-7578-4f3c-8404-155e821c340b",
    name: "Lorena Lomba",
    role: "English Teacher",
  },
  {
    key: "279805d2-a4d7-4493-9520-ebab6f71dfe2",
    name: "Pedro Fonseca",
    role: "English Teacher",
  },
  {
    key: "fd90eb63-3284-48c7-8e43-f0ef87e3d40c",
    name: "Nayara Carvalho",
    role: "English Teacher",
  },
];

export default function Home() {
  const { breakpoints, spacing, palette } = useTheme();
  const isMedium = useMediaQuery(breakpoints.up("md"));

  return (
    <div>
      <Nav />
      <Container>
        <Box>
          <Grid container>
            {!isMedium && (
              <Grid item xs={12}>
                <Box
                  mt={6}
                  style={{
                    background: "url(/happy_formation.svg)",
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    height: "256px",
                  }}
                />
              </Grid>
            )}

            <Grid
              container
              item
              xs={12}
              md={6}
              direction="column"
              justify="center"
            >
              <Box py={6}>
                <Typography variant="h2" gutterBottom>
                  O futuro do ensino de inglês começa agora!
                </Typography>

                <Typography variant="h6">
                  Inglês à medida da sua empresa, em qualquer momento
                </Typography>

                <Box my={3} display="flex">
                  <Button variant="contained" color="primary" size="large">
                    Join Us!
                  </Button>
                </Box>
              </Box>
            </Grid>
            {isMedium && (
              <Grid item xs={0} md={6}>
                <Box
                  style={{
                    background: "url(/happy_formation.svg)",
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    overflow: "hidden",
                    height: "420px",
                    marginTop: spacing(8),
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
      <Divider />
      {/* the client list */}
      <Container>
        <Box py={4} align="center">
          <Typography variant="h5">Our work has been featured</Typography>
          <Box my={3}>
            <Grid container justify="center" spacing={6}>
              <Grid item>
                <img
                  height="42px"
                  src="https://logo.uplead.com/google.com"
                  style={{ filter: "grayscale(1)" }}
                />
              </Grid>
              <Grid item>
                <img
                  height="42px"
                  src="https://logo.uplead.com/airbnb.com"
                  style={{ filter: "grayscale(1)" }}
                />
              </Grid>
              <Grid item>
                <img
                  height="42px"
                  src="https://logo.uplead.com/coinbase.com"
                  style={{ filter: "grayscale(1)" }}
                />
              </Grid>
              <Grid item>
                <img
                  height="42px"
                  src="https://logo.uplead.com/netflix.com"
                  style={{ filter: "grayscale(1)" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Divider />
    </div>
  );
}
