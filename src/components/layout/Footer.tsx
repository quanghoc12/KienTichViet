import { Icon, Logo } from "../Shared"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="footer-top reveal">
        <div className="footer-brand">
          <Logo light />
          <p>
            Dựng hình di sản,
            <br />
            nối nhịp thời gian.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Khám phá</strong>
            <Link to="/our-story">Về chúng tôi</Link>
            <a href="/#products">Sản phẩm</a>
            <a href="/#discover">Khám phá di sản</a>
          </div>
          <div>
            <strong>Hỗ trợ</strong>
            <a href="/#top">Liên hệ</a>
            <a href="/#top">Giao hàng</a>
            <a href="/#top">Chính sách</a>
          </div>
          <div>
            <strong>Kết nối</strong>
            <a href="/#top">Facebook</a>
            <a href="/#top">Instagram</a>
            <a href="/#top">TikTok</a>
          </div>
        </div>
        <div className="newsletter">
          <strong>Nhận những câu chuyện mới</strong>
          <p>Đăng ký để không bỏ lỡ sản phẩm và hành trình di sản tiếp theo.</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              aria-label="Email của bạn"
              placeholder="Email của bạn"
              type="email"
            />
            <button aria-label="Đăng ký">
              <Icon name="arrow" />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom reveal">
        <span>© 2026 Kiến Tích Việt</span>
        <span>Kiến tạo · Lưu giữ · Kết nối</span>
        <span>Ảnh: Unsplash</span>
      </div>
    </footer>
  )
}
