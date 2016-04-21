import React from 'react';
import {mount} from 'react-mounter';

import BlankLayout from './components/blank_layout.jsx';
import MainLayout from './components/main_layout.jsx';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';
//import Login from './containers/login';
import Login from '../users/containers/login';

export default function (injectDeps, {FlowRouter}) {
    console.log(Meteor.userId());


    console.log("*****登录成功*****用户ID是*******");
    console.log(Meteor.userId());

    //生成一个依赖组件。
    const BlankLayoutCtx = injectDeps(BlankLayout);
    const MainLayoutCtx = injectDeps(MainLayout);
    FlowRouter.route('/', {
        name: 'posts.list',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<PostList />)
            });
        }
    });

    FlowRouter.route('/post/:postId', {
        name: 'posts.single',
        action({postId}) {
            mount(MainLayoutCtx, {
                content: () => (<Post postId={postId}/>)
            });
        }
    });

    FlowRouter.route('/new-post', {
        name: 'newpost',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NewPost />)
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'login',
        action() {
            mount(BlankLayoutCtx, {
                content: () => (<Login />)
            })
        }
    })
}
