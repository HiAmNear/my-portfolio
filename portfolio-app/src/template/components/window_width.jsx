import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Hàm cập nhật state khi cửa sổ thay đổi kích thước
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Thêm event listener khi component được mount
    window.addEventListener('resize', handleResize);

    // Dọn dẹp: gỡ bỏ event listener khi component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Mảng rỗng đảm bảo effect này chỉ chạy 1 lần lúc mount và cleanup lúc unmount

  return windowWidth;
}