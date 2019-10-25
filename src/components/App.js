import React from 'react';

import Header from './Header';
import SignatureList from './SignatureList';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Header />
                <SignatureList />
            </div>
        );
    };
};

export default App;