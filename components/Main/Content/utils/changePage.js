export const changePage = (command, action, page) => {
  switch (command) {
    case 'Next':
      action(page + 1);
      break;
    case 'Previous':
      action(page - 1);
      break;
  }
};
