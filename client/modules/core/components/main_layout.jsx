import React from 'react';
//import Navigation from './navigation.jsx';
//通过container去构建组件，就可以把上下文注入了;如果不需要上下文就可以直接构建一个无状态组件
import Navigation from '../containers/navigation';

const Layout = ({content = () => null }) => (
    <div>
        <header>
        <h1>Simple Blog!</h1>
        <Navigation />
        </header>

        <div>
        {content()}
        </div>

        <footer>
        <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
        </footer>
    </div>
);

export default Layout;
