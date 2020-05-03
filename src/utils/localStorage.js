export function saveToLocalStorage(state) {
  try {
    const existedData = JSON.stringify(state);
    localStorage.setItem("state", existedData);
  } catch {
    alert("Something went wrong...");
  }
}

export function loadStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}
