import * as React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Components
import CallButton from "./CallButton";

const titleButton = {
  flexGrow: 1,
  display: { xs: 'none', sm: 'block' }
}

const drawerWidth = 240;
const navItems = [
  {
    text: 'Home',
    link: "/"
  },
  {
    text: 'Golf Carts',
    link: "/carts"
  }
];



function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ARCHS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item.text} href={item.link} passHref>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', minHeight: "5vh" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref>
            <Typography variant="h6" sx={{ my: 2 }}>
              ARCHS
            </Typography>
          </Link>
          <Link href="/" passHref>
            <Button sx={titleButton}>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: '#fff' }}
              >
                ARCHS
              </Typography>
            </Button>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <CallButton size="sm" />
            {navItems.map((item) => (
              <Link key={item.text} href={item.link} passHref>
                <Button key={item.text} sx={{ color: '#fff' }}>
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
