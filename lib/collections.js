import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
export const Users = Meteor.users;
