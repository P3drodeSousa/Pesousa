import prisma from "@/lib/prisma";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: "desc",
      },
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
      }))
    );
  }

  if (req.method === "POST") {
    if (!session) return res.status(403).send("Unauthorized");

    const { name, email } = session.user;

    const newEntry = await prisma.guestbook.create({
      data: {
        email: email || "test",
        body: (req.body.body || "").slice(0, 500),
        created_by: name,
      },
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    });
  }

  return res.send("Method not allowed.");
}
