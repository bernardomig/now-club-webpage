import { Box, Container, Typography, useTheme, Grid } from "@material-ui/core";

export default function Footer() {
  const { palette } = useTheme();

  return (
    <Box style={{ backgroundColor: palette.primary.main }}>
      <Container>
        <Box py={4} color="white">
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="h6" gutterBottom>
                NowClub
              </Typography>

              <Typography variant="body1">Social Links</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="subtitle2" display="block">
                Services
              </Typography>
              <Typography variant="body2" display="block">
                Service #1
              </Typography>
              <Typography variant="body2" display="block">
                Service #1
              </Typography>
              <Typography variant="body2" display="block">
                Service #1
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
