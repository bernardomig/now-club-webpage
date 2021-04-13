import Image from "next/image";
import {
  Container,
  Divider,
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Card,
  useMediaQuery,
  useTheme,
  Paper,
  CardMedia,
  Popover,
  CardHeader,
  CardActions,
  CardActionArea,
  CardContent
} from "@material-ui/core";
import Nav from "../src/components/Nav";
import { grey, purple } from "@material-ui/core/colors";

import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const people = [
  {
    key: "c8bf171b-1972-42cd-86ac-da5b3b180e04",
    name: "Miguel Fidalgo",
    role: "Founder and English teaching"
  },
  {
    key: "453ec371-8917-4b88-83f8-22f924c6c738",
    name: "Susana Ho",
    role: "Business Manager"
  },
  {
    key: "ba8049f0-4971-47d2-84d6-d325ffd80dfc",
    name: "Ivan Garcia",
    role: "Pedagogic Director"
  },
  {
    key: "787d02a3-7578-4f3c-8404-155e821c340b",
    name: "Lorena Lomba",
    role: "English Teacher"
  },
  {
    key: "279805d2-a4d7-4493-9520-ebab6f71dfe2",
    name: "Pedro Fonseca",
    role: "English Teacher"
  },
  {
    key: "fd90eb63-3284-48c7-8e43-f0ef87e3d40c",
    name: "Nayara Carvalho",
    role: "English Teacher"
  }
];

export default function Home() {
  const { breakpoints, spacing, palette } = useTheme();
  const isMedium = useMediaQuery(breakpoints.up("md"));

  const [messageIsOpen, setMessageIsOpen] = useState(true);

  return (
    <>
      <Container>
        {messageIsOpen && (
          <Box my={2}>
            <Grid container direction="column" spacing={1}>
              <Grid item xs>
                <Paper variant="outlined">
                  <Box
                    bgcolor={palette.primary.light}
                    color="white"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    px={2}
                    py={1}
                  >
                    <Typography variant="body1" style={{ flexGrow: 1 }}>
                      Inscrições para o Curso Online terminam dia 12 de Março!
                    </Typography>

                    <Button color="inherit" size="small">
                      Open
                    </Button>
                    <IconButton
                      color="inherit"
                      size="small"
                      onClick={() => setMessageIsOpen(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>

      <main>
        <Container>
          <Box my={{ xs: 4, md: 6 }}>
            <Grid container>
              {!isMedium && (
                <Grid item xs={12}>
                  <Box
                    mt={6}
                    style={{
                      background: "url(/undraw_things_to_say_ewwb.svg)",
                      backgroundSize: "contain",
                      backgroundPosition: "left center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      maxHeight: "360px",
                      minHeight: "240px"
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
                  <Typography variant="h1" gutterBottom>
                    O futuro do ensino de inglês começa agora!
                  </Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                    Inglês à tua da medida, em qualquer momento.
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
                      background: "url(/undraw_things_to_say_ewwb.svg)",
                      backgroundSize: "80% auto",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
        <Divider />
        {/* our services */}
        <Container>
          <Box py={8} align="center">
            <Typography variant="h2" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              No Now Club orgulhamo-nos de poder prestar aos nossos clientes um
              serviço taylor-made, totalmente concebido para o mundo corporate,
              adaptando as nossas aulas a horários, calendários e níveis de cada
              cliente.
            </Typography>
          </Box>

          <Box py={4}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Paper elevation={0} style={{ backgroundColor: "#BBE6E4" }}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    py={4}
                    height="280px"
                  >
                    <Typography variant="h3" gutterBottom>
                      Meetings
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      align="center"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Box mt={3}>
                      <Button variant="contained" color="primary">
                        See More
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={0} style={{ backgroundColor: "#FFC09F" }}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    py={4}
                    height="280px"
                  >
                    <Typography variant="h3" gutterBottom>
                      Translations
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      align="center"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Box mt={3}>
                      <Button variant="contained" color="primary">
                        See More
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Divider />

        {/* our partners */}
        <Container>
          <Box py={8}>
            <Grid container spacing={6}>
              {/* left */}
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="h3" gutterBottom>
                    Current partnerships
                  </Typography>
                  <Typography variant="body1">
                    We have partnerships across a range of industries.
                  </Typography>
                  <Box mt={2}>
                    <Button variant="outlined" color="primary">
                      Hire Us
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* right */}
              <Grid item xs={12} md={6}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs>
                    <img
                      src="https://logos-download.com/wp-content/uploads/2016/11/Randstad_logo_logotype.png"
                      alt="randstad"
                      height="48px"
                    />
                  </Grid>
                  <Grid item xs>
                    <img
                      src="https://logos-download.com/wp-content/uploads/2016/11/Kelly_Services_logo_logotype.png"
                      alt="kelly services"
                      height="48px"
                    />
                  </Grid>

                  <Grid item xs>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Logo_Viagens_Abreu.png"
                      alt="agencia abreu"
                      height="48px"
                    />
                  </Grid>

                  <Grid item xs>
                    <img
                      src="https://logos-download.com/wp-content/uploads/2016/11/Brisa_logo.png"
                      alt="agencia abreu"
                      height="48px"
                    />
                  </Grid>

                  <Grid item xs>
                    <img
                      src="https://www.imperialbrandsplc.com/content/imperial-brands/corporate/en/about-us/our-companies/imperial-tobacco/_jcr_content/par/image_1941894940.img.png/1608313382390.png"
                      alt="agencia abreu"
                      height="48px"
                    />
                  </Grid>

                  <Grid item xs>
                    <img
                      src="http://blog.ordembiologos.pt/wp-content/uploads/2017/10/logo_fundacao_pt.png"
                      alt="agencia abreu"
                      height="48px"
                    />
                  </Grid>

                  <Grid item xs>
                    <img
                      src="https://gesbanha.com/wp-content/uploads/2020/09/Logo-Grupo-Gesbanha.png"
                      alt="agencia abreu"
                      height="32px"
                    />
                  </Grid>

                  <Grid item xs>
                    <img
                      src="https://www.arabiandefence.com/wp-content/uploads/2020/11/download-2-300x96.png"
                      alt="agencia abreu"
                      height="32px"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Divider />

        {/* Our Team */}
        <Container component="section">
          <Box py={8}>
            <Grid container spacing={6}>
              {/* left */}
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="h3" gutterBottom>
                    Our Team
                  </Typography>
                  <Typography variant="body1">
                    Know who will work alonside you
                  </Typography>
                  <Box mt={2}>
                    <Button variant="outlined" color="primary">
                      Discover Us
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* right */}
              <Grid
                container
                item
                alignItems="flex-start"
                xs={12}
                md={6}
                spacing={1}
              >
                {people.map(({ key, name, role }) => (
                  <Grid key={key} item xs={4} sm={3} md={4}>
                    <Paper
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/300?u=${key})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        aspectRatio: "1/1",
                        width: "100%",
                        height: "100%"
                      }}
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                        color="white"
                      >
                        <Typography variant="h6" align="center">
                          {name}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </>
  );
}
