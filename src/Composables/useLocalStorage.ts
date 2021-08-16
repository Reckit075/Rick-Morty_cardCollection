const useLocalStorage = () => {
  const useCheckIsInFav = (key: number, name: string) => {
    const value = window.localStorage.getItem(JSON.stringify(key));
    if (value) return true;
    else return false;
  };
  const useAddToFav = (key: number, name: string) => {
    window.localStorage.setItem(JSON.stringify(key), name);
  };
  const useRemoveFromFav = (key: number, name: string) => {
    window.localStorage.removeItem(JSON.stringify(key));
  };
  const useGetAllFav = () => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i:number = keys.length;

    while (i--) {
      if (localStorage.getItem(keys[i]) != "SILENT")
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
  };
  const useGetAllFavIds = () => {
    const keys: Array<string> = Object.keys(localStorage);
    const ids: Array<number> = [];
    for (let i = 0; i < keys.length; i++) {
      const element = keys[i];
      if (element.length < 10) ids.push(JSON.parse(element));
    }
    return ids;
  };

  return {
    useCheckIsInFav,
    useAddToFav,
    useRemoveFromFav,
    useGetAllFav,
    useGetAllFavIds,
  };
};

export default useLocalStorage;
