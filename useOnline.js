import { useSyncExternalStore } from 'react';

/**
 * useOnlineStatus.js
 *
 * - A custom hook that checks if network is online.
 * - For example:
 *   const isOnline = useOnlineStatus();
 *   // ...
 *   <p>Network status: { isOnline ? 'online' : 'offline' }</p>
 *
 * @returns {boolean} indicating if network is online
 */
function useOnlineStatus(initialValue=false) {
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    getSnapshot, // How to get the value on the client
    getServerSnapshot // How to get the value on the server (for the initial render)
  );
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true;
}

export default useOnlineStatus;