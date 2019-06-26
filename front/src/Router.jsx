import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import Home from "./components/home/Home";
import Campus from "./components/campus/Campus";
import Students from "./components/students/Students";
import Matchs from "./components/matchs/Matchs";
import Ranking from "./components/ranking/Ranking";

const RouterFile = () => {
    return (
        <div>
            <Router>
                <Navbar
                    color='light'
                    light
                    expand='md'
                    className='d-flex justify-content-between flex-nowrap fixed-bottom col-12'
                    style={{ fontSize: '12px' }}
                >
                    <NavLink exact to='/' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Home
                    </NavLink>
                    <NavLink to='/campus' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Campus
                    </NavLink>
                    <NavLink to='/students' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Students
                    </NavLink>
                    <NavLink to='/matchs-history' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Matchs history
                    </NavLink>
                    <NavLink to='/ranking' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
                        Ranking
                    </NavLink>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/campus' component={Campus} />
                    <Route exact path='/students' component={Students} />
                    <Route exact path='/matchs-history' component={Matchs} />
                    <Route exact path='/ranking' component={Ranking} />
                </Switch>
            </Router>
        </div>
    );
};

export default RouterFile;