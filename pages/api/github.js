export  async function getMyFolders() {
    const userReposResponse = await fetch(
      'https://api.github.com/users/P3drodeSousa/repos?per_page=100'
    );
  
    const repositories = await userReposResponse.json();
    const mine = repositories.filter((repo) => !repo.fork);

    return mine.length;
  }