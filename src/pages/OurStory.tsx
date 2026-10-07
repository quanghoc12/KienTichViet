import { Icon, LinkButton } from "../components/Shared"
import heritageDoor from "../assets/heritage-door.jpg"
import heritagePagoda from "../assets/heritage-pagoda.jpg"
import onePillarPagoda from "../assets/one-pillar-pagoda.jpg"

export default function OurStory() {
  return (
    <>
      <section className="intro section-pad" style={{ paddingTop: '150px' }}>
        <div className="section-heading reveal">
          <p className="kicker">Câu chuyện thương hiệu</p>
          <h2>
            Có những công trình được xây bằng đá.<br />
            Có những ký ức được xây bằng thời gian.
          </h2>
        </div>
        <p className="intro-copy reveal">
          Dọc theo chiều dài đất nước, những công trình kiến trúc cổ không chỉ là nơi chốn, mà còn là chứng nhân của lịch sử. Dù có thể ngắm nhìn chúng qua những bức ảnh hay những chuyến đi xa, Kiến Tích Việt tin rằng còn một cách khác để trải nghiệm lịch sử: Tự tay dựng lại từng dấu tích bằng chính đôi tay mình.
        </p>
      </section>

      <section className="section-pad" style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
        <div className="reveal" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <img src={heritageDoor} alt="Dấu tích thời gian" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <p className="kicker">Chữ "Tích"</p>
              <h3 style={{ fontSize: '32px', marginBottom: '20px', lineHeight: '1.2' }}>Dấu Tích Của Thời Gian</h3>
              <p style={{ fontSize: '17px', lineHeight: '1.6', opacity: 0.8 }}>
                Thời gian có thể đi qua một công trình, nhưng không thể xóa đi những dấu tích mà nó để lại. Một ngôi đình, một mái chùa không chỉ là gạch ngói hay những cây cột gỗ. Chúng là nơi lưu giữ văn hóa, tinh thần và những câu chuyện được thầm thì qua nhiều thế hệ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="reveal" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <p className="kicker">Chữ "Kiến"</p>
              <h3 style={{ fontSize: '32px', marginBottom: '20px', lineHeight: '1.2' }}>Kiến Tạo Bằng Đôi Tay</h3>
              <p style={{ fontSize: '17px', lineHeight: '1.6', opacity: 0.8 }}>
                Kiến Tích Việt bắt đầu từ chữ "Kiến" – kiến tạo, lắp ráp, xây dựng. Chúng tôi không muốn người dùng chỉ đứng nhìn di sản từ xa. Từ những mảnh ghép nhỏ, bạn sẽ trực tiếp tham gia vào quá trình thành hình của một công trình, cảm nhận từng khớp nối kiến trúc, để lịch sử thực sự sống lại dưới đôi tay mình.
              </p>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <img src={heritagePagoda} alt="Kiến tạo di sản" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
        <div className="reveal" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <img src={onePillarPagoda} alt="Câu chuyện Việt Nam" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <p className="kicker">Chữ "Việt"</p>
              <h3 style={{ fontSize: '32px', marginBottom: '20px', lineHeight: '1.2' }}>Câu Chuyện Của Người Việt</h3>
              <p style={{ fontSize: '17px', lineHeight: '1.6', opacity: 0.8 }}>
                Nguồn cảm hứng và giá trị cốt lõi của chúng tôi đến từ lịch sử và văn hóa Việt Nam. Kiến Tích Việt tồn tại để kể lại những câu chuyện của cha ông thông qua từng đường nét kiến trúc. Triết lý của chúng tôi rất rõ ràng: Kiến tạo những dấu tích Việt bằng đôi tay của thế hệ hôm nay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="section-heading reveal">
          <p className="kicker">Từ di sản đến trải nghiệm</p>
          <h2>Không Chỉ Để Ngắm Nhìn</h2>
        </div>
        <p className="intro-copy reveal">
          Di sản không chỉ để ngắm nhìn. Di sản có thể được chạm vào, khám phá và kể lại bằng những hình thức mới. Cùng với mô hình vật lý, Kiến Tích Việt mở ra không gian công nghệ nơi nội dung lịch sử, hình ảnh tư liệu và tương tác hòa quyện, tạo nên một trải nghiệm văn hóa trọn vẹn.
        </p>
      </section>

      <section className="statement reveal">
        <div className="statement-mark">“</div>
        <p>Từ những mảnh ghép nhỏ,</p>
        <h2>dựng nên những dấu tích lớn.</h2>
        <LinkButton href="/products">Khám phá sản phẩm</LinkButton>
        <span className="statement-outline">KÝ ỨC</span>
      </section>
    </>
  )
}
