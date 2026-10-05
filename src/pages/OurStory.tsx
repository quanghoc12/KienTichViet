import { Icon, LinkButton } from "../components/Shared"

export default function OurStory() {
  return (
    <>
      <section className="intro section-pad" style={{ paddingTop: '150px' }}>
        <div className="section-heading reveal">
          <p className="kicker">Kiến Tích Việt</p>
          <h2>
            Chúng tôi tin rằng di sản
            <br />
            có thể được chạm vào.
          </h2>
        </div>
        <p className="intro-copy">
          Kiến Tích Việt ra đời từ một trăn trở: Làm sao để di sản văn hóa không chỉ nằm gọn trong sách vở hay đằng sau lồng kính bảo tàng?
        </p>

        <div className="steps" style={{ marginTop: '80px' }}>
          <article className="step-card reveal">
            <div className="step-icon">
              <Icon name="sparkle" size={30} />
            </div>
            <p className="step-en">Mission</p>
            <h3>Sứ mệnh</h3>
            <p>Mang di sản đến gần hơn với người trẻ thông qua trải nghiệm tương tác thực tế kết hợp với không gian số hóa.</p>
            <span className="step-line" />
          </article>
          <article className="step-card reveal">
            <div className="step-icon">
              <Icon name="play" size={30} />
            </div>
            <p className="step-en">Vision</p>
            <h3>Tầm nhìn</h3>
            <p>Trở thành thương hiệu hàng đầu Việt Nam trong lĩnh vực mô hình kiến trúc di sản.</p>
            <span className="step-line" />
          </article>
          <article className="step-card reveal">
            <div className="step-icon">
              <Icon name="cube" size={30} />
            </div>
            <p className="step-en">Core Values</p>
            <h3>Giá trị cốt lõi</h3>
            <p>Tỉ mỉ, Chân thực, Bền vững và Kết nối thế hệ qua từng mảnh ghép.</p>
            <span className="step-line" />
          </article>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="section-heading reveal">
          <p className="kicker">Brand Journey</p>
          <h2>Hành trình Kiến Tích Việt</h2>
        </div>
        <p className="intro-copy">
          [NỘI DUNG CHỜ CUNG CẤP]
        </p>
      </section>

      <section className="statement">
        <div className="statement-mark">“</div>
        <p>Cùng dựng hình</p>
        <h2>một Việt Nam đáng nhớ.</h2>
        <LinkButton href="/#products">Khám phá sản phẩm</LinkButton>
        <span className="statement-outline">HÀNH TRÌNH</span>
      </section>
    </>
  )
}
