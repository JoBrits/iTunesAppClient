import React, { useEffect, useState } from 'react';
import { fetchServerStatus } from '../utils/serverStatus';

// For testing server status in jest
const ServerStatus = () => {
  const [isServerRunning, setIsServerRunning] = useState(false);

  useEffect(() => {
    const checkServerStatus = async () => {
      const status = await fetchServerStatus();
      setIsServerRunning(status);
    };

    checkServerStatus();
  }, []);

  return (
    <div>
      <h1>Server Status</h1>
      <p>{isServerRunning ? 'Server is running' : 'Server is not running'}</p>
    </div>
  );
};

export default ServerStatus;
