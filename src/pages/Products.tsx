import { useState, useMemo } from "react"
import { Icon } from "../components/Shared"
import { products } from "../data/products"
import { Link } from "react-router-dom"

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("Tất cả")
  const [sortBy, setSortBy] = useState("Mặc định")

  // Extract unique eyebrows for category filter
  const categories = useMemo(() => {
    const cats = new Set<string>()
    products.forEach(p => {
      if (p.eyebrow) cats.add(p.eyebrow)
    })
    return ["Tất cả", ...Array.from(cats)]
  }, [])

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    // Filter by category (eyebrow)
    if (filterCategory !== "Tất cả") {
      result = result.filter(p => p.eyebrow === filterCategory)
    }

    // Filter by search
    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerSearch) ||
        (p.description && p.description.toLowerCase().includes(lowerSearch)) ||
        (p.eyebrow && p.eyebrow.toLowerCase().includes(lowerSearch))
      )
    }

    // Sort
    if (sortBy !== "Mặc định") {
      result.sort((a, b) => {
        if (sortBy === "Tên A-Z") return a.name.localeCompare(b.name)
        if (sortBy === "Tên Z-A") return b.name.localeCompare(a.name)
        
        const priceA = parseInt(a.price.replace(/\D/g, '')) || 0
        const priceB = parseInt(b.price.replace(/\D/g, '')) || 0
        
        if (sortBy === "Giá thấp đến cao") return priceA - priceB
        if (sortBy === "Giá cao đến thấp") return priceB - priceA
        
        return 0
      })
    }

    return result
  }, [searchTerm, filterCategory, sortBy])

  return (
    <>
      <section className="products section-pad" id="products" style={{ paddingTop: '150px' }}>
        <div className="products-head" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '30px' }}>
          <div className="section-heading reveal">
            <p className="kicker">Bộ sưu tập</p>
            <h2>Sản phẩm</h2>
          </div>
          
          <div className="products-controls reveal" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '15px', 
            width: '100%', 
            alignItems: 'center',
            marginBottom: '40px'
          }}>
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 15px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
              {searchTerm ? (
                <button 
                  onClick={() => setSearchTerm("")}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: 0.5,
                    padding: '5px'
                  }}
                  aria-label="Xóa tìm kiếm"
                >
                  <Icon name="close" size={16} />
                </button>
              ) : null}
            </div>
            
            <select 
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              style={{
                padding: '12px 15px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.1)',
                fontSize: '15px',
                fontFamily: 'inherit',
                backgroundColor: 'white',
                minWidth: '200px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '12px 15px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.1)',
                fontSize: '15px',
                fontFamily: 'inherit',
                backgroundColor: 'white',
                minWidth: '180px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="Mặc định">Mặc định</option>
              <option value="Tên A-Z">Tên A-Z</option>
              <option value="Tên Z-A">Tên Z-A</option>
              <option value="Giá thấp đến cao">Giá thấp đến cao</option>
              <option value="Giá cao đến thấp">Giá cao đến thấp</option>
            </select>
          </div>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="product-grid">
            {filteredAndSortedProducts.map((product) => (
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
        ) : (
          <div className="empty-state reveal" style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '12px', width: '100%' }}>
            <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.7 }}>Không tìm thấy sản phẩm phù hợp.</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setFilterCategory("Tất cả");
                setSortBy("Mặc định");
              }}
              className="button button-dark"
              style={{
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span>Xóa bộ lọc</span>
              <Icon name="close" />
            </button>
          </div>
        )}
      </section>
    </>
  )
}
