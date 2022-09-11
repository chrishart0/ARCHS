import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "next/link";

// Auth Components
import { Auth } from "aws-amplify";
import { useAuth } from 'context/auth';
import { useLogout } from 'utils/use-logout';

// MUI Components
import { AppBar, Toolbar, Typography, Button, Drawer, Link, MenuItem, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';

// Icons
import MenuIcon from "@mui/icons-material/Menu";

const headersMenuOptions = {
  authenticated: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Farmers Market Finder Map",
      href: "/finder",
    },
    {
      label: "Shop",
      href: "/shop",
    },
  ],
  unauthenticated: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Farmers Market Finder Map",
      href: "/finder",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Log In",
      href: "/auth/login",
    },
    {
      label: "Sign Up",
      href: "/auth/register",
    },
  ]
};

// ----- Styles ----- //
const header = {
  "@media (max-width: 900px)": {
    paddingLeft: 0,
  },
};

const logoText = {
  display: "inline-block",
  fontWeight: 600,
  color: "#FFFEFE",
  textAlign: "left",
  verticalAlign: "middle",
  paddingLeft: "1vw",
  flexGrow: 1,
};



const menuButton = {
  fontWeight: 700,
  size: "18px",
  marginLeft: "38px",
};

const toolbar = {
  display: "flex",
  justifyContent: "space-between"
};

const drawerContainer = {
  padding: "20px 30px",
};

// ----- Styles ----- //

export default function HeaderBar() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [showsUserDropdown, setShowsUserDropdown] = useState(false);
  const {
    state: { isAuthenticated, user },
    initializeUser,
  } = useAuth();

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  const headersData = isAuthenticated ? headersMenuOptions.authenticated : headersMenuOptions.unauthenticated

  const handleLogout = useLogout();

  const handleOpenUserMenu = (event) => {
    setShowsUserDropdown(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setShowsUserDropdown(null);
  };

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const UserMenuAvatar = () => {
    return (
      <Avatar sx={{ bgcolor: "purple" }}>{user.givenName[0]}{user.familyName[0]}</Avatar>
    )

  }

  const DesktopUserMenu = () => {
    if (isAuthenticated) {
      return (
        <Box sx={{ paddingLeft: "2px", flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <UserMenuAvatar />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={showsUserDropdown}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(showsUserDropdown)}
            onClose={handleCloseUserMenu}
          >
            <Link href="/settings" sx={{ textDecoration: "none", color: "inherit" }}>
              <MenuItem key={"settings"} >
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
            </Link>
            <MenuItem key={"logOut"} onClick={() => { handleLogout(); handleCloseUserMenu(); }}>
              <Typography textAlign="center">Log Out</Typography>
            </MenuItem>
          </Menu>
        </Box>
      )
    }
  }

  const displayDesktop = () => {
    return (
      <Toolbar sx={toolbar}>
        {LogoDesktop}
        <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
        <div>{getMenuButtons()}</div>
        <div >{DesktopUserMenu()}</div>
      </Toolbar>
    );
  };

  const MobileUserMenu = () => {
    if (isAuthenticated) {
      return (
        <>
          <div style={{ marginBelow: "10vh" }}>
            <UserMenuAvatar />
            <Typography> {user.givenName} {user.familyName}</Typography>
            <Divider />
          </div>
          <Link href="/settings" sx={{ textDecoration: "none", color: "inherit", paddingBottom: "50px" }}>
            <MenuItem sx={{ paddingBottom: "7px" }}>Settings</MenuItem>
          </Link>
          <Link onClick={() => { handleLogout() }} sx={{ textDecoration: "none", color: "inherit", paddingBottom: "50px" }}>
            <MenuItem sx={{ paddingBottom: "7px" }}>Log Out</MenuItem>
          </Link>
          <Divider/>
        </>
      )
    }
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar sx={{ marginLeft: "5px", marginRight: "5px" }} disableGutters>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Box sx={drawerContainer}>
            <MobileUserMenu />
            {getDrawerChoices()}
          </Box>
        </Drawer>
        <div>{LogoMobile}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          key={label}
          {...{
            component: RouterLink,
            href: href,
            color: "inherit",
            sx: { textDecoration: "none", paddingBottom: "50px" },
            key: label,
          }}
        >
          <MenuItem sx={{ paddingBottom: "7px" }}>{label}</MenuItem>
        </Link>
      );
    });
  };

  const LogoDesktop = (
    <Link
      {...{
        component: RouterLink,
        href: "/",
        color: "inherit",
        sx: { textDecoration: "none" },
        key: "Farmers Market Finder logo",
      }}
    >
      <Grid container sx={{ margin: ".5vh" }} direction="row" alignItems="center" justifyContent="center">
        <Image
          src="/images/LocalEggLogo.svg"
          alt={"Logo for The Local Egg - Farmers Market Finder"}
          width="60"
          height="60"
        />
        <Typography variant="h6" component="h1" sx={logoText}>
          Farmers Market Finder
        </Typography>
      </Grid>
    </Link>
  );

  const LogoMobile = (
    <Link
      {...{
        component: RouterLink,
        href: "/",
        color: "inherit",
        sx: { textDecoration: "none", align: "center", flexGrow: "1" },
        key: "Farmers Market Finder logo",
      }}
    >
      <Grid justifyContent="center" alignItems="center" sx={{ padding: ".5vh" }} container>
        <Grid item>
          <Image
            src="/images/LocalEggLogo.svg"
            alt={"Logo for The Local Egg - Farmers Market Finder"}
            width="50"
            height="50"
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h1" sx={logoText}>
            Farmers Market Finder
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          {...{
            key: label,
            color: "inherit",
            href: href,
            component: RouterLink,
            sx: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar sx={header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  );
}
