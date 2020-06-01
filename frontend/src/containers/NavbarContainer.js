import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { selectGame } from '../modules/navbar'


const NavbarContainer = ({ selectedGame, selectGame }) => {
    return(
        <Navbar selectedGame={selectedGame} selectGame={selectGame}/>
    );
};

export default connect(
    state => ({
        selectedGame: state.navbar.selectedGame,
    }),
    {
        selectGame,
    }
)(NavbarContainer);