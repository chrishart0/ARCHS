import Link from "next/link";

// MUI Components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function FooterBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar align="center" position="static" sx={{ backgroundColor: "background.paper", color: "black" }}>
        <Toolbar>
          <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
            {/* <Grid item>
              <div style={{ width: "90vw", padding: "2vh" }}>
                <Divider />
              </div>
            </Grid> */}
            <Grid item>
              <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
                <Grid item>
                  <Typography>ARCHS ©</Typography>
                </Grid>
                <Grid item>
                  <Typography> Alpine Rental Cabins and Hospitality Systems </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
