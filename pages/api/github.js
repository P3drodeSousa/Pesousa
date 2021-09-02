const getRepos = async (page = 1, repos = []) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/P3drodeSousa/repos?per_page=100&page=${page}`
    );
    const repo = await response.json();

    if (!repo.length) {
      return repos;
    }
    return getRepos(page + 1, repos.concat([...repo]));
  } catch (error) {
    console.log(error);
  }
};

export default async function getMyFolders() {
  const repos = await getRepos();
  const mine = await repos.filter((repo) => !repo.fork);

  return mine.length;
}
