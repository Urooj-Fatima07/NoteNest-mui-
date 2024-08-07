import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';
import { Box } from '@mui/system';
import DateDisplay from './DateDisplay';

const drawerWidth = 240;

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        }}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <DateDisplay />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" sx={{ padding: 2 }}>
          NoteNest
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={location.pathname === item.path ? { background: '#f4f4f4' } : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <Box component="main" sx={{ background: '#f9f9f9', flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
