## What can I learn from this sample-example

This is a sample blog app written in [Mantra].

Now, it's just a smple blog that contains some function.

I'll update this do my best.and this file is my app creating journal.You can know how I work by mantra and meteor from this.

2016-04-21
搭建应用框架。包括项目初始化，actions/components/containers/routes
现目前项目中用到的功能包括登录验证以及登录和注册。

在前期构建过程中也遇到了一些问题。包括对components和containers的搭配使用。
在应用中在使用组件的过程中，我们有时候会遇到什么时候只使用无状态组件，而什么时候我们该使用状态组件（也就是需要actions等的组件）.
我们发现，在应用中一个组件无需数据交互的时候我们就可以使用无状态组件，此时我们仅需引入一个jsx的组件就可以了。
但是当我们的组件中需要使用数据交互的时候。我们就需要通过将无状态组件通过container包裹，将上下文注入到组件中。供组件调用需要的方法等生成组件。
在我们的应用刚开始的时候第一个遇到的时候就是对Navgination组件中添加登出功能的时候，开始的时候我们不需要登出功能。就可以只使用一个无状态的组件就可以了。当我们要添加登出功能的时候就可以把上下文通过container和actions加入到组件当中。
