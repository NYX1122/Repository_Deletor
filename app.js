export default async function (token, [owner, repoName]) {
  const url = `https://api.github.com/repos/${owner}/${repoName}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API responded with status code: ${response.status}`
      );
    }

    console.log('Repository_Deletor successfully deleted the repository:');
    console.log(repoName);
  } catch (error) {
    console.error('Repository_Deletor encountered an error:');
    console.error(error.message);
  }
}
