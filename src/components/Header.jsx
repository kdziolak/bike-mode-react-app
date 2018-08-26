import React, { Component } from 'react';
import {AppBar, Toolbar, Typography,IconButton, Drawer, Hidden} from '@material-ui/core';
import {Menu} from '@material-ui/icons'
import {Link} from 'react-router-dom'

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
    <div  style={{display: 'block', marhinTop: '10px', width: '100%', height: '9vh'}}>
        <AppBar style={{position: 'absolute'}}>
          <Toolbar>
              <Hidden only='md'>
                <IconButton onClick={this.handleOpenDrawer} color="inherit" aria-label="Menu"><Menu/></IconButton>
              </Hidden>
           
                <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
                    <Typography variant="title" color="inherit">
                    BikeMode
                    </Typography>
                </Link>
          </Toolbar>
        </AppBar>
        <Hidden only={['xs', 'sm']}>
            <Drawer 
            variant='permanent'
            >
                <p>asdafdasdf</p>
            </Drawer>
        </Hidden>
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
