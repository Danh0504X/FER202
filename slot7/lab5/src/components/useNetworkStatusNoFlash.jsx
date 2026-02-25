import { useEffect, useState } from "react";

export default function useNetworkStatusNoFlash() {
  const getOnline = () => (typeof navigator !== "undefined" ? navigator.onLine : true);

  // quan trọng: init theo navigator.onLine để không bị flash offline
  const [isOnline, setIsOnline] = useState(getOnline);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    // đánh dấu hook đã sẵn sàng sau khi mount
    setReady(true);
    // đồng bộ lại 1 lần nữa cho chắc
    setIsOnline(getOnline());

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  return { isOnline, ready };
}
