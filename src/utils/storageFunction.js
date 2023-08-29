const checkSessionStorageValues = () => {
  let storedOwner = sessionStorage.getItem('owner');
  let storedRepo = sessionStorage.getItem('repo');

  if (!storedOwner || !storedRepo) {
    storedOwner = 'facebook';
    storedRepo = 'react';
    sessionStorage.setItem('owner', storedOwner);
    sessionStorage.setItem('repo', storedRepo);
  }

  return { storedOwner, storedRepo };
};

export { checkSessionStorageValues };
