import db from "@/lib/planetscale";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req });

  const { name, email } = session.user;
  
  const [rows] = await db.query(`
    SELECT * FROM guestbook
    ORDER BY updated_at DESC;
  `);

  if (req.method === 'GET') {
    return res.json(rows);
  }

  if (req.method === "POST") {
    if (!session) return res.status(403).send("Unauthorized");

    const body = (req.body.body || "").slice(0, 500);

    const [insert] = await db.query(
      `
      INSERT INTO guestbook (email, message, name)
      VALUES (?, ?, ?);
    `,
      [email, body, name]
    );

    const [rows] = await db.query(
      `
      SELECT * FROM guestbook
      WHERE id = ?;
    `,
      [insert.insertId]
    );

    return res.status(200).json(rows[0]);
  }

  return res.send("Method not allowed.");
}
