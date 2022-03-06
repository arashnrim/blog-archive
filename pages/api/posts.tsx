import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAllPosts, Frontmatter } from "../../utils/post-utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const postFrontmatters = fetchAllPosts();
    postFrontmatters.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      if (aDate < bDate) {
        return 1;
      } else if (aDate > bDate) {
        return -1;
      } else {
        return 0;
      }
    });
    res.status(200).json(postFrontmatters);
    res.end();
  } else {
    res.status(400);
    res.end();
  }
}
