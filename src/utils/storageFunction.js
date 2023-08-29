const checkSessionStorageValues = () => {
  const storedOwner = sessionStorage.getItem('owner');
  const storedRepo = sessionStorage.getItem('repo');

  if (!storedOwner || !storedRepo) {
    sessionStorage.setItem('owner', 'facebook');
    sessionStorage.setItem('repo', 'react');
  }

  return { storedOwner, storedRepo };
};

export { checkSessionStorageValues };
