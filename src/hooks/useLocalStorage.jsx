import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setloading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      setTimeout(()=> {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setloading(false);
      }, 1000);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
