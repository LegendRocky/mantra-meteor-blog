import React from 'react';

// const Navigation = () => (
//   <div>
//     <b> Navigation: </b>
//     <a href="/">Home</a> |
//     <a href="/new-post">New Post</a>
//     <a href="javascript:;">登出</a>
//   </div>
// );

// export default Navigation;

class Navigation extends React.Component{
    render() {
        return (
            <div>
                <b> Navigation: </b>
                <a href="/">Home</a> |
                <a href="/new-post">New Post</a>
                <a onClick={this.logout.bind(this)} href="javascript:;">登出</a>
            </div>
        )
    }
    logout() {
        const {logout} = this.props;
        logout();
    }
}

export default Navigation;
