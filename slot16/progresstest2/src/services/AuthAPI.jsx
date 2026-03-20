import axios from 'axios';

export const loginAction = async (credentials) => {
  try {
    const response = await axios.get('http://localhost:3001/users');
    const users = response.data;

    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!user) {
      return {
        success: false,
        message: 'Tài khoản hoặc mật khẩu không chính xác',
      };
    }

    const { password, ...safeUser } = user;
    return { success: true, user: safeUser };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Không thể kết nối đến máy chủ',
    };
  }
};