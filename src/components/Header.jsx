import React, { Component } from 'react';
import {AppBar, Toolbar, Typography,IconButton, Drawer} from '@material-ui/core';
import {Menu} from '@material-ui/icons'

class Header extends Component {
    constructor(){
        super();
        this.state = {
            drawerIsOpen: false
        }
    }

    handleOpenDrawer = () => {
        this.setState({
            drawerIsOpen: true
        })
    }

    handleCloseDrawer = () => {
        this.setState({
            drawerIsOpen: false
        })
    }

  render() {
    return (
    <div>
        <AppBar>
          <Toolbar>
            <IconButton onClick={this.handleOpenDrawer} color="inherit" aria-label="Menu"><Menu/></IconButton>
            <Typography variant="title" color="inherit">
              BikeMode
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
            onClose={this.handleCloseDrawer}
            open={this.state.drawerIsOpen}
        >
            <p>asdafdasdf</p>
        </Drawer>
    </div>
    );
  }
}

export default Header;
