import { Box, Typography, Button } from "@material-ui/core";

export default function NotFound() {
  return (
    <Box
      py={8}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="max(80vh, 100px)"
    >
      <div
        style={{
          backgroundImage: "url(/undraw_page_not_found_su7k.svg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "240px",
          maxWidth: "80%",
          width: "100%"
        }}
      />

      <Box mt={4}>
        <Typography variant="h6" align="center">
          Ups, the page you are looking <br /> for does not exist
        </Typography>
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="primary" href="/">
          Get me out
        </Button>
      </Box>
    </Box>
  );
}
