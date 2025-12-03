import { getPost } from "../../../lib/posts";
import { remark } from "remark";
import html from "remark-html";

export default async function Post({ params }) {
  const { data, content } = getPost(params.slug);
  const processed = await remark().use(html).process(content);
  const body = processed.toString();

  return (
    <article>
      <h1>{data.title}</h1>
      <img src={data.cover} alt="" />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  );
}
