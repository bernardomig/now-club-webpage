import { useState } from "react";

import {
  Container,
  Box,
  Typography,
  IconButton,
  TextField,
  Input,
  InputBase,
  Paper,
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  List,
  ListItem,
  CardActionArea,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import {
  Search as SearchIcon,
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ArrowBack as ArrowBackIcon
} from "@material-ui/icons";

function SearchField() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Paper>
      <Box display="flex" alignItems="center">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          style={{ flexGrow: 1 }}
          placeholder="Search the courses"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconButton
          style={{ display: value ? "block" : "none" }}
          onClick={() => setValue("")}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default function Courses() {
  const [showCourseDetail, setShowCourseDetail] = useState(false);

  return (
    <Container>
      <Box py={6}>
        {showCourseDetail ? (
          <>
            <Box mb={2}>
              <Button
                size="large"
                startIcon={<ArrowBackIcon />}
                onClick={() => setShowCourseDetail(false)}
              >
                Back
              </Button>
            </Box>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    image="https://source.unsplash.com/d4xAu-4VU30"
                    style={{ aspectRatio: "16/9" }}
                  />
                  <CardHeader title="English" subheader="A1 Level"></CardHeader>

                  <CardContent>
                    <Typography>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean dapibus purus bibendum, tempus tellus ac,
                        placerat ligula. Nulla posuere suscipit lacinia.{" "}
                      </p>
                      <p>
                        Proin ac nulla ipsum. Nam sed sapien purus. Vestibulum
                        rutrum, velit sit amet aliquet eleifend, massa quam
                        posuere justo, at placerat velit massa vitae risus. Sed
                        imperdiet turpis quam, vitae mollis ante mollis eget.
                      </p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={8}>
                <Box mb={6}>
                  <Box mb={3}>
                    <Typography variant="h4">Pricing</Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Card>
                        <CardHeader
                          title="NowClub Certificate"
                          subheader="125€"
                          titleTypographyProps={{ variant: "subtitle1" }}
                          subheaderTypographyProps={{ variant: "body1" }}
                        />
                        <CardContent>
                          <Typography variant="subtitle2">Includes:</Typography>

                          <List dense>
                            <ListItem disableGutters>
                              <Typography>English Course</Typography>
                            </ListItem>
                            <ListItem disableGutters>
                              <Typography>
                                Now Club National Certificate
                              </Typography>
                            </ListItem>
                            <ListItem disableGutters>
                              <Typography>Access to our platform</Typography>
                            </ListItem>
                            <ListItem disableGutters>
                              <Typography>5€ Bolt voucher</Typography>
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Card>
                        <CardHeader
                          title="Cambridge Certificate"
                          subheader="125 + 98€"
                          titleTypographyProps={{ variant: "subtitle1" }}
                          subheaderTypographyProps={{ variant: "body1" }}
                        />
                        <CardContent>
                          <Typography variant="subtitle2">Includes:</Typography>

                          <List dense>
                            <ListItem disableGutters>
                              <Typography>English Course</Typography>
                            </ListItem>
                            <ListItem disableGutters>
                              <Typography>
                                Cambridge International Certificate
                              </Typography>
                            </ListItem>
                            <ListItem disableGutters>
                              <Typography>Access to our platform</Typography>
                            </ListItem>
                            <ListItem disableGutters>
                              <Typography>5€ Bolt voucher</Typography>
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
                <Box mb={4}>
                  <Box mb={3}>
                    <Typography variant="h4">Classes</Typography>
                  </Box>
                  <Paper>
                    <List>
                      <ListItem divider>
                        <ListItemText
                          primary="Monday and Wednesdays"
                          secondary="From 9:00 to 10:00"
                        />
                        <ListItemSecondaryAction>
                          <Button>Enroll</Button>
                        </ListItemSecondaryAction>
                      </ListItem>

                      <ListItem divider>
                        <ListItemText
                          primary="Monday and Wednesdays"
                          secondary="From 17:30 to 18:30"
                        />
                        <ListItemSecondaryAction>
                          <Button>Enroll</Button>
                        </ListItemSecondaryAction>
                      </ListItem>

                      <ListItem divider>
                        <ListItemText
                          primary="Tuesdays and Thursdays"
                          secondary="From 9:00 to 10:00"
                        />
                        <ListItemSecondaryAction>
                          <Button>Enroll</Button>
                        </ListItemSecondaryAction>
                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="Tuesdays and Thursdays"
                          secondary="From 17:30 to 18:30"
                        />
                        <ListItemSecondaryAction>
                          <Button>Enroll</Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box>
                <Typography variant="h2">Our Courses</Typography>
              </Box>
              <Box mt={2} width="max(25%, 320px)">
                <SearchField />
              </Box>
            </Box>

            <Box mt={6}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={2} lg={2}>
                  <Card>
                    <CardActionArea onClick={() => setShowCourseDetail(true)}>
                      <CardMedia
                        image="https://source.unsplash.com/d4xAu-4VU30/800x800"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader title="English" subheader="A1 Level" />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2}>
                  <Card>
                    <CardActionArea onClick={() => setShowCourseDetail(true)}>
                      <CardMedia
                        image="https://source.unsplash.com/Qmhau-GXj4k/800x800"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader title="English" subheader="A2 Level" />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2}>
                  <Card>
                    <CardActionArea onClick={() => setShowCourseDetail(true)}>
                      <CardMedia
                        image="https://source.unsplash.com/gBnHMsAOWrs/800x800"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader title="English" subheader="B1 Level" />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2}>
                  <Card>
                    <CardActionArea onClick={() => setShowCourseDetail(true)}>
                      <CardMedia
                        image="https://source.unsplash.com/BDLjdwKiMY8/800x800"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader title="English" subheader="B2 Level" />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2}>
                  <Card>
                    <CardActionArea onClick={() => setShowCourseDetail(true)}>
                      <CardMedia
                        image="https://source.unsplash.com/Mdx7XqEJ4ig/800x800"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader title="English" subheader="C1 Level" />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2}>
                  <Card>
                    <CardActionArea onClick={() => setShowCourseDetail(true)}>
                      <CardMedia
                        image="https://source.unsplash.com/rcHRst9OtjM/800x800"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader title="English" subheader="C2 Level" />
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
}
