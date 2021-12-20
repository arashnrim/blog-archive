import type { NextApiRequest, NextApiResponse } from "next";

import { Deta } from "deta";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { option, feedback, post } = req.body;
    const projectKey = process.env.PROJECT_KEY;
    const database = Deta(projectKey).Base("feedback");
    const date = String(new Date());

    await database
      .put({ option, feedback: feedback ? feedback : undefined, date, post })
      .then(() => res.status(200))
      .catch(() => res.status(500));

    res.end();
  } else {
    res.status(400);
    res.end();
  }
}
