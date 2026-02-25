import React, { useEffect, useRef, useState, Suspense } from "react";
import { fetchUser } from "../api";
import Loading from "../components/Loading";

const User = React.lazy(() => import("../components/User"));

export default function UserPage() {
  const [user, setUser] = useState(null);
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState("");

  const abortRef = useRef(null);
  const timeoutRef = useRef(null);


  const stopPending = () => {
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = null;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const load = async () => {

    stopPending();
    setLoadingData(true);
    setError("");

    const controller = new AbortController();
    abortRef.current = controller;

    // ✅ timeout để tránh fetch treo khi mất mạng
    timeoutRef.current = setTimeout(() => controller.abort(), 15000);

    try {
      const data = await fetchUser(1, controller.signal);
      setUser(data);
    } catch (e) {
      setUser(null);

      // ✅ chỉ báo lỗi mạng khi request bị abort/timeout hoặc thực sự offline
      if (e?.name === "AbortError") {
        setError("Không thể kết nối mạng. Vui lòng kiểm tra Internet và thử lại.");
      } else if (!navigator.onLine) {
        setError("Không thể kết nối mạng. Vui lòng kiểm tra Internet và thử lại.");
      } else {
        setError(e.message || "Không thể tải dữ liệu. Vui lòng thử lại.");
      }
    } finally {
      stopPending();
      setLoadingData(false);
    }
  };

  useEffect(() => {
    load();

    // ✅ nếu user thật sự offline: huỷ request và báo lỗi
    const onOffline = () => {
      stopPending();
      setLoadingData(false);
      setUser(null);
      setError("Không thể kết nối mạng. Vui lòng kiểm tra Internet và thử lại.");
    };

    // ✅ khi online lại: tự load lại nếu trước đó lỗi mạng
    const onOnline = () => {
      if (error.includes("Không thể kết nối mạng")) {
        load();
      }
    };

    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);

    return () => {
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
      stopPending();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2 className="mb-3">User</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          <b>Lỗi:</b> {error}
          <div className="mt-2">
            <button className="btn btn-danger btn-sm" onClick={load}>
              Thử lại
            </button>
          </div>
        </div>
      )}

      {!error && loadingData && <Loading text="Đang tải dữ liệu user..." />}

      {!error && !loadingData && user && (
        <Suspense fallback={<Loading text="Đang tải component User..." />}>
          <User user={user} />
        </Suspense>
      )}
    </div>
  );
}
