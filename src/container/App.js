import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions'
import './App.css';


const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


const App = ({ searchField, onSearchChange }) => {

    const [robots, setRobots] = useState([])
    // const [searchField, setSearchField] = useState('')
    // const [count, setCount] = useState(0)



    useEffect(() => {
        // console.log(store.getState());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [])

    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value)

    // }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })



    return !robots.length ?
        <h1>Loading</h1> :
        (

            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* {count} */}
                {/* <button onClick={() => setCount(count + 1)} >Click me!</button> */}
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );



    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);