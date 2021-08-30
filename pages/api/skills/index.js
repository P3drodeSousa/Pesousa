import marked from "marked";
import matter from "gray-matter";
import {skillsData} from '../../../data/uses';

// export async function getPostBySlug() {
//   const fileContent = await import(`../../../data/uses.md`);

//   const meta = matter(fileContent.default);
//   const content = marked(meta.content);

//   return {
//     content,
//   };
// }

export default async function skills(req, res) {
  res.status(200).send(skillsData)
}
