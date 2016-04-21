//meteor entry file

//create an mantra app and initialize it
import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import commentsModule from './modules/comments';
import userModule from './modules/users';

// init context
const context = initContext();

// create app
const app = createApp(context);

// load module
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.loadModule(userModule);
// init app
app.init();

//主入口验证
if ( Meteor.userId() ) {
    FlowRouter.go('/');
} else {
    FlowRouter.go('/login');
}
