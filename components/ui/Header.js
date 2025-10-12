"use client";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Home, Info, Menu, Close, Code } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", icon: <Home /> },
  { label: "Info", href: "/info", icon: <Info /> },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              color: pathname === item.href ? "primary.main" : "text.primary",
              backgroundColor:
                pathname === item.href ? "primary.light" : "transparent",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.05)" },
              borderRadius: 1,
              mx: 1,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Code sx={{ mr: 1, fontSize: 28 }} />
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "inherit",
                background: "linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NextMUI
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {!mounted ? (
            <Box sx={{ width: 40, height: 40 }} />
          ) : isMobile ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Menu />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  href={item.href}
                  startIcon={item.icon}
                  sx={{

                    px: 2,
                    py: 1,
                    fontWeight: 500,
                    position: "relative",
                    backgroundColor:
                      pathname === item.href
                        ? "rgba(255, 255, 255, 0.15)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-1px)",
                    },
                    "&::after":
                      pathname === item.href
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "60%",
                            height: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            borderRadius: 1,
                          }
                        : {},
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
