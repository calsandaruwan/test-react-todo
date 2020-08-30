import React from 'react';
import {TodoComponent} from "./components/todo";

import 'antd/dist/antd.less';
import './assets/main.css';

function App() {
    return (
        <div className="font-sans">
            <TodoComponent/>
        </div>
    );
}

export default App;
