// const getRepos = async (page = 1, repos = []) => {
//   const response = await fetch(
//     `https://api.github.com/users/P3drodeSousa/repos?per_page=100&page=${page}`
//   );
//   const repo = await response.json();

//   console.log("taille", repo);

//   if (repo.length !== 0) {
//     getRepos(page++, repos.concat([...repos]));
//   }
//   return repos;
// };

export default async function getMyFolders() {
  // const repos = await getRepos();
  // const mine = repos.filter((repo) => !repo.fork);
  // return mine.length;

  // const response = await fetch('https://api.github.com/users/P3drodeSousa`');
  // const userData = await response.json();
  // console.log(userData)
  // return userData.public_repos;
  return 99
}
