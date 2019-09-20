import React from "react";

export const useLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
  return [value, setValue];
};
// const [value, setValue] = useStateWithLocalStorage(
//     'myValueInLocalStorage'
//   );
