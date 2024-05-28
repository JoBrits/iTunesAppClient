// function to test if express server is running
export const fetchServerStatus = async () => {
  try {
    const response = await fetch('/status');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.status === 'ok';
  } catch (error) {
    return false;
  }
};
