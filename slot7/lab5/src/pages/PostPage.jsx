import React, { useEffect, useRef, useState, Suspense } from "react";
import { fetchPost } from "../api";
import Loading from "../components/Loading";

const Post = React.lazy(() => import("../components/Post"));

export default function PostPage() {
  const [post, setPost] = useState(null);
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

    // ✅ timeout để tránh fetch treo
    timeoutRef.current = setTimeout(() => controller.abort(), 15000);

    try {
      const data = await fetchPost(1, controller.signal);
      setPost(data);
    } catch (e) {
      setPost(null);

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

  // ✅ load 1 lần khi vào trang
  useEffect(() => {
    load();

    // ✅ nếu user thật sự offline (event), hủy request và hiện lỗi
    const onOffline = () => {
      stopPending();
      setLoadingData(false);
      setPost(null);
      setError("Không thể kết nối mạng. Vui lòng kiểm tra Internet và thử lại.");
    };

    // ✅ khi online lại: tự load lại nếu đang có lỗi mạng
    const onOnline = () => {
      // chỉ tự load lại nếu trước đó lỗi do mạng
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
      <h2 className="mb-3">Post</h2>

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

      {!error && loadingData && <Loading text="Đang tải dữ liệu post..." />}

      {!error && !loadingData && post && (
        <Suspense fallback={<Loading text="Đang tải component Post..." />}>
          <Post post={post} />
        </Suspense>
      )}
    </div>
  );
}
