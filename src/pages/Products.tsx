import { Icon } from "../components/Shared"
import { products } from "../data/products"
import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
      <section className="products section-pad" id="products" style={{ paddingTop: '150px' }}>
        <div className="products-head">
          <div className="section-heading reveal">
            <p className="kicker">Bộ sưu tập</p>
            <h2>
              Tất cả sản phẩm
            </h2>
          </div>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card reveal" key={product.id}>
              <Link
                to={`/products/${product.slug}`}
                className="product-image"
                aria-label={`Xem ${product.name}`}
              >
                <img src={product.image} alt={product.name} />
                <span className="product-number">{product.number}</span>
                <span className="product-accent">{product.accent}</span>
                <span className="product-view">
                  <Icon name="plus" /> Xem chi tiết
                </span>
              </Link>
              <div className="product-info">
                <div>
                  <p>{product.eyebrow}</p>
                  <h3>
                    <Link to={`/products/${product.slug}`}>{product.name}</Link>
                  </h3>
                  {product.description && (
                    <p style={{ marginTop: '10px', fontSize: '14px', opacity: 0.8, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {product.description}
                    </p>
                  )}
                </div>
                <strong style={{ marginTop: '15px', display: 'block' }}>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
