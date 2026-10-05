import { useEffect, useState, type ReactNode } from "react"
import heritageDoor from "./assets/heritage-door.jpg"
import heritagePagoda from "./assets/heritage-pagoda.jpg"
import onePillarPagoda from "./assets/one-pillar-pagoda.jpg"

type IconName = "arrow" | "bag" | "box" | "close" | "cube" | "headphones" | "menu" | "nfc" | "phone" | "play" | "plus" | "sparkle"

const products = [
  {
    name: "Chùa Một Cột",
    eyebrow: "Hà Nội · Bộ sưu tập Thăng Long",
    price: "890.000₫",
    image: onePillarPagoda,
    number: "01",
    accent: "Mới",
  },
  {
    name: "Khuê Văn Các",
    eyebrow: "Văn Miếu · Quốc Tử Giám",
    price: "790.000₫",
    image: heritageDoor,
    number: "02",
    accent: "Bán chạy",
  },
  {
    name: "Tháp Phổ Minh",
    eyebrow: "Nam Định · Dấu ấn nhà Trần",
    price: "820.000₫",
    image: heritagePagoda,
    number: "03",
    accent: "Sắp ra mắt",
  },
]

const stories = [
  {
    title: "Một đóa sen giữa lòng Thăng Long",
    place: "Chùa Một Cột · Hà Nội",
    image: onePillarPagoda,
  },
  {
    title: "Nơi tinh hoa đất học được lưu truyền",
    place: "Văn Miếu · Hà Nội",
    image: heritageDoor,
  },
  {
    title: "Dấu son kiến trúc từ triều Trần",
    place: "Tháp Phổ Minh · Nam Định",
    image: heritagePagoda,
  },
]

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    bag: (
      <>
        <path d="M5 8h14l-1 12H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    box: (
      <>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="m4 7 8 4v10l-8-4V7Zm16 0-8 4v10l8-4V7Z" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    cube: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 7 9 5v10l-9-5V7Zm18 0-9 5v10l9-5V7Z" />
      </>
    ),
    headphones: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v7H5a1 1 0 0 1-1-1v-6Zm16 0h-3v7h2a1 1 0 0 0 1-1v-6Z" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    nfc: (
      <>
        <path d="M8 8a6 6 0 0 1 0 8M5 5a10 10 0 0 1 0 14" />
        <path d="M12 11a2 2 0 0 1 0 2" />
        <path d="M16 8a6 6 0 0 0 0 8M19 5a10 10 0 0 0 0 14" />
      </>
    ),
    phone: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 18h4" />
      </>
    ),
    play: <path d="m9 7 9 5-9 5V7Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    sparkle: (
      <>
        <path d="M12 3c.8 4.8 3.2 7.2 8 8-4.8.8-7.2 3.2-8 8-.8-4.8-3.2-7.2-8-8 4.8-.8 7.2-3.2 8-8Z" />
        <path d="M19 3v4M17 5h4" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      aria-label="Kiến Tích Việt — Trang chủ"
      className={`logo ${light ? "logo-light" : ""}`}
      href="#top"
    >
      <span className="logo-corners" aria-hidden="true" />
      <span>Kiến</span>
      <span>tích</span>
      <span>Việt</span>
    </a>
  )
}

function LinkButton({
  children,
  href,
  dark = false,
}: {
  children: ReactNode
  href: string
  dark?: boolean
}) {
  return (
    <a className={`button ${dark ? "button-dark" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [activeProduct, setActiveProduct] =
    useState<typeof products[number] | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    document.body.style.overflow = cartOpen || activeProduct ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [cartOpen, activeProduct])

  const addToCart = () => {
    setCartCount((count) => count + 1)
    setActiveProduct(null)
    setCartOpen(true)
  }

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <Logo />
        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Điều hướng chính"
        >
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Câu chuyện
          </a>
          <a href="#products" onClick={() => setMenuOpen(false)}>
            Sản phẩm
          </a>
          <a href="#discover" onClick={() => setMenuOpen(false)}>
            Khám phá di sản
          </a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>
            Chuyện di sản
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="cart-button"
            onClick={() => setCartOpen(true)}
            aria-label="Mở giỏ hàng"
          >
            <Icon name="bag" size={22} />
            <span className="cart-label">Giỏ hàng</span>
            <span className="cart-count">{cartCount}</span>
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker">Mô hình lắp ghép di sản Việt Nam</p>
            <h1 id="hero-title">
              Dựng hình di sản,
              <em>nối nhịp thời gian.</em>
            </h1>
            <p className="hero-description">
              Kiến Tích Việt biến những dấu tích văn hóa thành mô hình lắp ghép
              để bạn tự tay kiến tạo, trưng bày và khám phá.
            </p>
            <div className="hero-actions">
              <LinkButton href="#products">Khám phá bộ sưu tập</LinkButton>
              <a className="text-link" href="#story">
                Về Kiến Tích Việt <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src={onePillarPagoda}
                alt="Chùa Một Cột giữa khuôn viên xanh"
              />
              <div className="image-frame" aria-hidden="true" />
              <span className="image-note image-note-top">Di sản số 01</span>
              <span className="image-note image-note-bottom">
                Chùa Một Cột · Hà Nội
              </span>
            </div>
            <div className="wood-card">
              <span className="wood-card-label">Từ 120 mảnh gỗ</span>
              <div className="model-mark" aria-hidden="true">
                <span className="roof roof-one" />
                <span className="roof roof-two" />
                <span className="pillar" />
                <span className="base" />
              </div>
              <span className="wood-card-title">thành một dấu tích</span>
            </div>
          </div>
          <a className="scroll-cue" href="#story">
            <span>Cuộn để khám phá</span>
            <span className="scroll-line" />
          </a>
        </section>

        <section className="intro section-pad" id="story">
          <div className="section-heading">
            <p className="kicker">Kiến Tích Việt là gì?</p>
            <h2>
              Không chỉ là một mô hình.
              <br />
              Đó là một hành trình.
            </h2>
          </div>
          <p className="intro-copy">
            Từ đôi tay người trẻ đến những ký ức trăm năm, mỗi bộ mô hình là một
            cách mới để di sản hiện diện gần gũi hơn trong cuộc sống hôm nay.
          </p>
          <div className="steps">
            {[
              [
                "01",
                "Build",
                "Lắp ghép",
                "Tự tay ghép từng mảnh gỗ, cảm nhận cấu trúc và dáng hình của công trình.",
              ],
              [
                "02",
                "Display",
                "Trưng bày",
                "Biến di sản thành một vật phẩm trang trí có chiều sâu và câu chuyện.",
              ],
              [
                "03",
                "Discover",
                "Khám phá",
                "Chạm NFC để lắng nghe, tương tác AR và mở ra thế giới phía sau mô hình.",
              ],
            ].map(([number, en, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <div className="step-icon">
                  <Icon
                    name={
                      number === "01" ? "cube" : number === "02" ? "box" : "nfc"
                    }
                    size={30}
                  />
                </div>
                <p className="step-en">{en}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="step-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="products section-pad" id="products">
          <div className="products-head">
            <div className="section-heading">
              <p className="kicker">Bộ sưu tập đầu tiên</p>
              <h2>
                Những dấu tích
                <br />
                trong lòng bàn tay
              </h2>
            </div>
            <a className="text-link" href="#products">
              Xem tất cả sản phẩm <Icon name="arrow" />
            </a>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <button
                  className="product-image"
                  onClick={() => setActiveProduct(product)}
                  aria-label={`Xem ${product.name}`}
                >
                  <img src={product.image} alt={product.name} />
                  <span className="product-number">{product.number}</span>
                  <span className="product-accent">{product.accent}</span>
                  <span className="product-view">
                    <Icon name="plus" /> Xem chi tiết
                  </span>
                </button>
                <div className="product-info">
                  <div>
                    <p>{product.eyebrow}</p>
                    <h3>{product.name}</h3>
                  </div>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tech section-pad" id="discover">
          <div className="tech-visual">
            <div className="phone">
              <div className="phone-screen">
                <span className="phone-label">Kiến Tích Việt</span>
                <img src={onePillarPagoda} alt="" />
                <button
                  className={`play-button ${playing ? "is-playing" : ""}`}
                  onClick={() => setPlaying(!playing)}
                  aria-label={playing ? "Tạm dừng audio" : "Phát audio"}
                >
                  <Icon name={playing ? "close" : "play"} size={25} />
                </button>
                <div className="audio-copy">
                  <small>Đang nghe</small>
                  <strong>Sự tích Chùa Một Cột</strong>
                  <span className="audio-wave">
                    {Array.from({ length: 17 }).map((_, index) => (
                      <i key={index} />
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <div className="nfc-pulse pulse-one" />
            <div className="nfc-pulse pulse-two" />
            <div className="nfc-tag">
              <Icon name="nfc" size={38} />
              <span>Chạm NFC</span>
            </div>
          </div>
          <div className="tech-copy">
            <p className="kicker light">Công nghệ chạm vào di sản</p>
            <h2>
              Một cú chạm.
              <br />
              Cả ngàn câu chuyện.
            </h2>
            <p>
              Mô hình không dừng lại ở những mảnh gỗ. NFC mở ra không gian số
              nơi bạn có thể nghe, nhìn và tương tác với di sản theo cách của
              riêng mình.
            </p>
            <div className="tech-features">
              <div>
                <Icon name="nfc" />
                <span>
                  <strong>NFC</strong> Chạm để mở hành trình
                </span>
              </div>
              <div>
                <Icon name="headphones" />
                <span>
                  <strong>Audio</strong> Nghe những chuyện xưa
                </span>
              </div>
              <div>
                <Icon name="phone" />
                <span>
                  <strong>AR</strong> Đưa di sản vào không gian
                </span>
              </div>
            </div>
            <LinkButton href="#journal" dark>
              Khám phá trải nghiệm
            </LinkButton>
          </div>
        </section>

        <section className="journal section-pad" id="journal">
          <div className="journal-intro">
            <p className="kicker">Chuyện di sản</p>
            <h2>
              Mỗi công trình
              <br />
              đều có một câu chuyện.
            </h2>
            <p>
              Đi qua lịch sử bằng những câu chuyện nhỏ, những chi tiết kiến trúc
              và ký ức được kể lại.
            </p>
            <a className="text-link" href="#journal">
              Khám phá kho di sản <Icon name="arrow" />
            </a>
          </div>
          <div className="story-list">
            {stories.map((story, index) => (
              <article className="story-item" key={story.title}>
                <span className="story-index">0{index + 1}</span>
                <img src={story.image} alt="" />
                <div>
                  <p>{story.place}</p>
                  <h3>{story.title}</h3>
                </div>
                <span className="story-arrow">
                  <Icon name="arrow" />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-mark">“</div>
          <p>Từ những mảnh ghép nhỏ,</p>
          <h2>dựng nên những dấu tích lớn.</h2>
          <LinkButton href="#products">Bắt đầu hành trình</LinkButton>
          <span className="statement-outline">KIẾN TÍCH VIỆT</span>
        </section>
      </main>

      <footer>
        <div className="footer-top">
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
              <a href="#story">Về chúng tôi</a>
              <a href="#products">Sản phẩm</a>
              <a href="#journal">Di sản</a>
            </div>
            <div>
              <strong>Hỗ trợ</strong>
              <a href="#top">Liên hệ</a>
              <a href="#top">Giao hàng</a>
              <a href="#top">Chính sách</a>
            </div>
            <div>
              <strong>Kết nối</strong>
              <a href="#top">Facebook</a>
              <a href="#top">Instagram</a>
              <a href="#top">TikTok</a>
            </div>
          </div>
          <div className="newsletter">
            <strong>Nhận những câu chuyện mới</strong>
            <p>
              Đăng ký để không bỏ lỡ sản phẩm và hành trình di sản tiếp theo.
            </p>
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
        <div className="footer-bottom">
          <span>© 2026 Kiến Tích Việt</span>
          <span>Kiến tạo · Lưu giữ · Kết nối</span>
          <span>Ảnh: Unsplash</span>
        </div>
      </footer>

      {activeProduct && (
        <div
          className="modal-layer"
          role="dialog"
          aria-modal="true"
          aria-label={`Chi tiết ${activeProduct.name}`}
        >
          <button
            className="modal-backdrop"
            aria-label="Đóng"
            onClick={() => setActiveProduct(null)}
          />
          <div className="product-modal">
            <button
              className="modal-close"
              onClick={() => setActiveProduct(null)}
              aria-label="Đóng"
            >
              <Icon name="close" />
            </button>
            <div className="modal-image">
              <img src={activeProduct.image} alt={activeProduct.name} />
              <span>Mô hình gỗ · Tỉ lệ 1:120</span>
            </div>
            <div className="modal-copy">
              <p className="kicker">{activeProduct.eyebrow}</p>
              <h2>{activeProduct.name}</h2>
              <p>
                Mỗi chi tiết được cắt chính xác từ gỗ tự nhiên, tái hiện tinh
                thần kiến trúc nguyên bản trong một trải nghiệm lắp ghép đầy cảm
                hứng.
              </p>
              <div className="specs">
                <span>
                  <small>Số mảnh</small>
                  <strong>120</strong>
                </span>
                <span>
                  <small>Thời gian</small>
                  <strong>3–4 giờ</strong>
                </span>
                <span>
                  <small>Độ khó</small>
                  <strong>Trung bình</strong>
                </span>
              </div>
              <div className="modal-buy">
                <strong>{activeProduct.price}</strong>
                <button onClick={addToCart}>
                  <span>Thêm vào giỏ</span>
                  <Icon name="bag" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`cart-drawer-wrap ${cartOpen ? "is-open" : ""}`}
        aria-hidden={!cartOpen}
      >
        <button
          className="cart-backdrop"
          onClick={() => setCartOpen(false)}
          aria-label="Đóng giỏ hàng"
        />
        <aside className="cart-drawer">
          <div className="cart-head">
            <div>
              <p>Đơn hàng của bạn</p>
              <h2>Giỏ hàng ({cartCount})</h2>
            </div>
            <button onClick={() => setCartOpen(false)} aria-label="Đóng">
              <Icon name="close" />
            </button>
          </div>
          {cartCount === 0 ? (
            <div className="empty-cart">
              <Icon name="bag" size={42} />
              <h3>Giỏ hàng còn trống</h3>
              <p>Một dấu tích đang chờ bạn tự tay dựng nên.</p>
              <button onClick={() => setCartOpen(false)}>
                Khám phá sản phẩm
              </button>
            </div>
          ) : (
            <>
              <div className="cart-product">
                <img src={onePillarPagoda} alt="Chùa Một Cột" />
                <div>
                  <small>Bộ sưu tập Thăng Long</small>
                  <h3>Chùa Một Cột</h3>
                  <span>Số lượng: {cartCount}</span>
                </div>
                <strong>890.000₫</strong>
              </div>
              <div className="cart-summary">
                <span>Tạm tính</span>
                <strong>{(890000 * cartCount).toLocaleString("vi-VN")}₫</strong>
              </div>
              <button className="checkout-button">
                Tiến hành đặt hàng <Icon name="arrow" />
              </button>
            </>
          )}
        </aside>
      </div>
    </div>
  )
}

export default App
