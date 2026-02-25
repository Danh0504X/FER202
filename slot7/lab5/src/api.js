// src/api.js

export async function fetchUser(userId, signal) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { signal }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    // Abort (timeout/abort)
    if (err?.name === "AbortError") {
      throw new Error("Không thể kết nối mạng (request timeout hoặc bị hủy).");
    }

    // Offline thật sự
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      throw new Error("Không thể kết nối mạng. Vui lòng kiểm tra Internet và thử lại.");
    }

    // Giữ lỗi HTTP nếu có
    if (err?.message?.startsWith("HTTP")) {
      throw err;
    }

    // Lỗi khác
    throw new Error("Không thể tải dữ liệu. Vui lòng thử lại.");
  }
}

export async function fetchPost(postId, signal) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      { signal }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error("Không thể kết nối mạng (request timeout hoặc bị hủy).");
    }

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      throw new Error("Không thể kết nối mạng. Vui lòng kiểm tra Internet và thử lại.");
    }

    if (err?.message?.startsWith("HTTP")) {
      throw err;
    }

    throw new Error("Không thể tải dữ liệu. Vui lòng thử lại.");
  }
}
