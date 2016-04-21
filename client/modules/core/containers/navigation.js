import Navigation from '../components/navigation.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {

    onData(null, {});
}

export const depsMapper = (context, actions) => ({
    logout: actions.posts.logout,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Navigation);