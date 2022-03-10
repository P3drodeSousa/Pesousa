import prisma from "@/lib/prisma";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req });

  const { id } = req.query;
  const { name } = session.user;

  const entry = await prisma.guestbook.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (req.method === "GET") {
    return res.json({
      id: entry.id.toString(),
      body: entry.body,
      created_by: entry.created_by,
      updated_at: entry.updated_at,
    });
  }

  if (req.method === "DELETE") {
    if (!name || name !== entry.created_by) {
      return res.status(403).send("Unauthorized ");
    }

    console.log(id);
    await prisma.guestbook.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(204).json({});
  }

  if (req.method === "PUT") {
    if (!name || name !== entry.created_by) {
      return res.status(403).send("Unauthorized");
    }

    const body = (req.body.body || "").slice(0, 500);

    await prisma.guestbook.update({
      where: {
        id: Number(id),
      },
      data: {
        body,
        updated_at: new Date().toISOString(),
      },
    });

    return res.status(201).json({
      ...entry,
      body,
    });
  }

  return res.send("Method not allowed.");
}
