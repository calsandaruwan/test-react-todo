import React from 'react';
import {TodoContainer} from "./components/todo/todoContainer";

import './assets/main.css';
import 'antd/dist/antd.less';

function App() {
    return (
        <div className="App">
            <TodoContainer/>
        </div>
    );
}

export default App;
