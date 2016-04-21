import {Posts} from '/lib/collections';

export default function () {
  if (!Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      const createdAt = new Date();
      Posts.insert({title, content, createdAt});
    }
  }
}
