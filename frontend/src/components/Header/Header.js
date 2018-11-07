import React, { Component } from 'react';
import Profile from './Profile';
import Menu from './Menu';

export default class Header extends Component {
    render() {
        return (
          <div style={{ display: 'flex', width: '100%', backgroundColor: 'red', height: 60, position: 'fixed', top: 0 }} >
            <div style={{ display: 'flex', flex: 1, backgroundColor: 'pink' }}>
                <Profile />
            </div>
            <div style={{ flex: 5, display: 'flex', width: '100%' }}>
              <p style={{ textAlign: 'center', margin: 'auto' }} >Bulletin</p>
            </div>
            <div style={{ flex: 1, display: 'flex', backgroundColor: 'green' }}>
              <Menu />
            </div>
          </div>
        );
    }
}