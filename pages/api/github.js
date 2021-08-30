export default async function handler(_, res) {
    const userReposResponse = await fetch(
      'https://api.github.com/users/P3drodeSousa/repos?per_page=100'
    );
  
    const repositories = await userReposResponse.json();
     const mine = repositories.filter((repo) => !repo.fork);
   
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1200, stale-while-revalidate=600'
    );
      
    return res.status(200).json({
      mine: mine.length
    });
  }