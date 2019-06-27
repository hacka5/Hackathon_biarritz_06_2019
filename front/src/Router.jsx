import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import Home from "./components/home/Home";
import Campuses from "./components/campus/Campuses";
import Students from "./components/students/Students";
import Matches from "./components/matches/Matches";
import Ranking from "./components/ranking/Ranking";
import Footer from './components/footer/Footer';

const RouterFile = () => {
    return (
        <div>
            <Router>
                <Navbar
                    color='light'
                    light
                    expand='md'
                    className='d-flex justify-content-between flex-nowrap col-12'
                    style={{ fontSize: '12px' }}
                >
                    <NavLink exact to='/' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Home
                    </NavLink>
                    <NavLink to='/campuses' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Campuses
                    </NavLink>
                    <NavLink to='/students' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Students
                    </NavLink>
                    <NavLink to='/matches' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Matches history
                    </NavLink>
                    <NavLink to='/ranking' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Ranking
                    </NavLink>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/campuses' component={Campuses} />
                    <Route exact path='/students' component={Students} />
                    <Route exact path='/matches' component={Matches} />
                    <Route exact path='/ranking' component={Ranking} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default RouterFile;