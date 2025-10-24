export default async function handler(req, res) {
  const params = new URLSearchParams(req.query).toString();
  const apiKey = process.env.OMDB_KEY;

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&${params}`
  );
  const data = await response.json();

  res.status(200).json(data);
}
