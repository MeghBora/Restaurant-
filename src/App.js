import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';

function App() {
    return ( < >
        <
        Home / >
        <
        Routes >
        <
        Route path = '/form'
        element = { < Form / > }
        /> <
        /Routes> <
        />
    );
}

export default App;