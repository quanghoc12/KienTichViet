import { Icon, LinkButton } from "../components/Shared"
import heritageDoor from "../assets/heritage-door.jpg"
import heritagePagoda from "../assets/heritage-pagoda.jpg"
import onePillarPagoda from "../assets/one-pillar-pagoda.jpg"

export default function OurStory() {
  return (
    <>
      {/* CHAPTER 01 — MỞ ĐẦU */}
      <section className="intro section-pad" style={{ paddingTop: 'clamp(120px, 15vw, 180px)', paddingBottom: 'clamp(60px, 10vw, 120px)' }}>
        <div className="section-heading reveal" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p className="kicker" style={{ letterSpacing: '2px', marginBottom: '30px' }}>MỞ ĐẦU</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.3', marginBottom: '40px' }}>
            Có những công trình được xây bằng đá.<br />
            Có những ký ức được xây bằng thời gian.
          </h2>
          <p style={{ fontSize: 'clamp(18px, 2vw, 20px)', lineHeight: '1.8', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
            Dọc theo chiều dài đất nước, những công trình kiến trúc cổ không chỉ là nơi chốn, mà còn là chứng nhân của lịch sử. Dù có thể ngắm nhìn chúng qua những bức ảnh hay những chuyến đi xa, Kiến Tích Việt tin rằng còn một cách khác để trải nghiệm lịch sử: <strong>Nếu có thể tự tay dựng lại một phần ký ức ấy thì sao?</strong>
          </p>
        </div>
      </section>

      {/* CHAPTER 02 — TÍCH */}
      <section className="reveal" style={{ padding: 'clamp(60px, 8vw, 120px) 5%', backgroundColor: 'rgba(0,0,0,0.02)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8%' }}>
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <img src={heritageDoor} alt="Dấu tích thời gian" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }} />
            </div>
            <div style={{ flex: '1 1 40%', minWidth: '300px', padding: '40px 0' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="kicker" style={{ marginBottom: '15px', letterSpacing: '2px' }}>CHƯƠNG 01</p>
                <div style={{ fontSize: 'clamp(60px, 8vw, 110px)', fontWeight: 'bold', lineHeight: '1', margin: '0 0 15px 0', letterSpacing: '-2px' }}>
                  TÍCH
                </div>
                <div style={{ width: '60px', height: '2px', backgroundColor: 'currentColor', opacity: 0.2, marginBottom: '30px' }} />
                <h3 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '30px', lineHeight: '1.3' }}>Dấu Tích Của Thời Gian</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.7', opacity: 0.8, marginBottom: '20px' }}>
                  Thời gian có thể đi qua một công trình, nhưng không thể xóa đi những dấu tích mà nó để lại. Một ngôi đình, một mái chùa không chỉ là gạch ngói hay những cây cột gỗ. Chúng mang theo bóng dáng của người xưa, lưu giữ bản sắc của dân tộc trải qua bao thăng trầm.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.7', opacity: 0.8 }}>
                  Mỗi di sản là một dòng chảy ký ức bất tận. Việc trân trọng và bảo tồn những mảnh ghép ấy chính là cách chúng ta giữ cho nhịp đập của quá khứ tiếp tục được thầm thì và vang vọng mãi trong hiện tại.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03 — KIẾN */}
      <section className="reveal" style={{ padding: 'clamp(60px, 8vw, 120px) 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '8%' }}>
            <div style={{ flex: '1 1 40%', minWidth: '300px', padding: '40px 0' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="kicker" style={{ marginBottom: '15px', letterSpacing: '2px' }}>CHƯƠNG 02</p>
                <div style={{ fontSize: 'clamp(60px, 8vw, 110px)', fontWeight: 'bold', lineHeight: '1', margin: '0 0 15px 0', letterSpacing: '-2px' }}>
                  KIẾN
                </div>
                <div style={{ width: '60px', height: '2px', backgroundColor: 'currentColor', opacity: 0.2, marginBottom: '30px' }} />
                <h3 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '30px', lineHeight: '1.3' }}>Tự Tay Kiến Tạo</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.7', opacity: 0.8, marginBottom: '20px' }}>
                  Kiến Tích Việt bắt đầu từ chữ "Kiến" – kiến tạo, lắp ráp, xây dựng. Chúng tôi không muốn người dùng chỉ là một người quan sát di sản từ xa. Một mảnh gỗ, một khớp nối, một cấu trúc dần hình thành sẽ đưa bạn bước vào hành trình của những người thợ mộc tài hoa thuở trước.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.7', opacity: 0.8 }}>
                  Từ những mảnh ghép nhỏ, bạn sẽ trực tiếp tham gia vào quá trình kiến thiết của một công trình. Lịch sử lúc này không còn khô khan trên những trang giấy, mà thực sự sống lại trọn vẹn, chân thực và đầy cảm xúc ngay dưới đôi tay của chính bạn.
                </p>
              </div>
            </div>
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <img src={heritagePagoda} alt="Kiến tạo di sản" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 04 — VIỆT */}
      <section className="reveal" style={{ padding: 'clamp(60px, 8vw, 120px) 5%', backgroundColor: 'rgba(0,0,0,0.02)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8%' }}>
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <img src={onePillarPagoda} alt="Câu chuyện Việt Nam" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }} />
            </div>
            <div style={{ flex: '1 1 40%', minWidth: '300px', padding: '40px 0' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="kicker" style={{ marginBottom: '15px', letterSpacing: '2px' }}>CHƯƠNG 03</p>
                <div style={{ fontSize: 'clamp(60px, 8vw, 110px)', fontWeight: 'bold', lineHeight: '1', margin: '0 0 15px 0', letterSpacing: '-2px' }}>
                  VIỆT
                </div>
                <div style={{ width: '60px', height: '2px', backgroundColor: 'currentColor', opacity: 0.2, marginBottom: '30px' }} />
                <h3 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '30px', lineHeight: '1.3' }}>Một Câu Chuyện Mang Tên Việt Nam</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.7', opacity: 0.8, marginBottom: '20px' }}>
                  Nguồn cảm hứng vô tận của chúng tôi khởi nguồn từ chính dòng chảy văn hóa, kiến trúc và con người Việt Nam. Chúng tôi không chỉ đơn thuần thu nhỏ các công trình, mà đang nỗ lực tìm ra một ngôn ngữ đương đại để đưa di sản đến gần hơn với cuộc sống hiện đại.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.7', opacity: 0.8 }}>
                  Kiến Tích Việt tồn tại để kể lại những câu chuyện của cha ông một cách đầy tự hào. Triết lý của chúng tôi rất rõ ràng và kiên định: Kiến tạo những dấu tích Việt bằng đôi tay và khối óc của thế hệ hôm nay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 05 — DI SẢN ĐƯỢC KỂ LẠI */}
      <section className="reveal" style={{ padding: 'clamp(80px, 12vw, 150px) 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="kicker" style={{ letterSpacing: '2px', marginBottom: '20px' }}>DI SẢN ĐƯỢC KỂ LẠI</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.3', marginBottom: '40px' }}>Hành Trình Khám Phá Bất Tận</h2>
          <p style={{ fontSize: 'clamp(18px, 2vw, 20px)', lineHeight: '1.8', opacity: 0.8, marginBottom: '30px' }}>
            Mô hình hoàn thiện mới chỉ là sự khởi đầu. Với Kiến Tích Việt, di sản không dừng lại ở mức độ tĩnh lặng để ngắm nhìn. Từ việc <strong>Nhìn</strong>, chúng ta bước sang <strong>Lắp ghép</strong>, tiến đến <strong>Khám phá</strong>, để thực sự <strong>Hiểu</strong> và cuối cùng là <strong>Ghi nhớ</strong>.
          </p>
          <p style={{ fontSize: 'clamp(18px, 2vw, 20px)', lineHeight: '1.8', opacity: 0.8 }}>
            Sự kết hợp giữa những mảnh ghép vật lý và không gian công nghệ tương tác mở ra một cách tiếp cận hoàn toàn mới. Thông tin lịch sử, hình ảnh tư liệu và âm thanh của quá khứ được đánh thức, biến một quá trình quan sát thụ động thành một trải nghiệm văn hóa trọn vẹn và đa chiều.
          </p>
        </div>
      </section>

      {/* FINAL CONCLUSION */}
      <section className="statement reveal">
        <div className="statement-mark">“</div>
        <p style={{ fontSize: 'clamp(20px, 3vw, 24px)', marginBottom: '10px', fontWeight: 500 }}>Một mảnh ghép nhỏ.</p>
        <p style={{ fontSize: 'clamp(20px, 3vw, 24px)', marginBottom: '20px', fontWeight: 500 }}>Một công trình lớn.</p>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: '1.2' }}>Một dấu tích Việt Nam.</h2>
        <div style={{ marginTop: '50px' }}>
          <LinkButton href="/products">Khám phá bộ sưu tập</LinkButton>
        </div>
        <span className="statement-outline">DI SẢN</span>
      </section>
    </>
  )
}

