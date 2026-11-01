import '../css/orders.css'

export function Orders() {
  return (
    <>
      <div class="order-section">
        <div class="page-header">
          <h2>Customer Name</h2>
          <h3>Manage Your Profile</h3>
        </div>
        <div class="orders-container">
          <div class="order-box">
            <div class="order-box-header">
              <div class="status-badge-wrapper">
                <div class="status-badge">
                  <span class="confirmed">Confirmed</span>
                </div>
              </div>
              <div class="order-id-wrapper">
                <span>Order #1</span>
              </div>
              <div class="order-price-wrapper">
                <span>£35.00</span>
              </div>
            </div>
            <div class="order-box-body">
              <div class="order-detail-wrapper">
                <i class="fa fa-hashtag"></i>
                <span>Items: 4</span>
              </div>
              <div class="order-detail-wrapper">
                <i class="fa fa-calendar"></i>
                <span>Placed: 2025-07-08</span>
              </div>
              <div class="order-detail-wrapper">
                <i class="fa fa-note-sticky"></i>
                <span>Note: Lorem ipsum</span>
              </div>
              <button class="cancel-order-button">Cancel Order</button>
            </div>
          </div>
          <div class="order-box">
            <div class="order-box-header">
              <div class="status-badge-wrapper">
                <div class="status-badge">
                  <span class="cancelled">Cancelled</span>
                </div>
              </div>
              <div class="order-id-wrapper">
                <span>Order #2</span>
              </div>
              <div class="order-price-wrapper">
                <span class="cancelled">£35.00</span>
              </div>
            </div>
            <div class="order-box-body">
              <div class="order-detail-wrapper">
                <i class="fa fa-hashtag"></i>
                <span>Items: 4</span>
              </div>
              <div class="order-detail-wrapper">
                <i class="fa fa-calendar"></i>
                <span>Placed: 2025-07-08</span>
              </div>
              <div class="order-detail-wrapper">
                <i class="fa fa-note-sticky"></i>
                <span>Note: -</span>
              </div>
            </div>
          </div>
          <div class="order-box">
            <div class="order-box-header">
              <div class="status-badge-wrapper">
                <div class="status-badge">
                  <span class="paid">Paid</span>
                </div>
              </div>
              <div class="order-id-wrapper">
                <span>Order #3</span>
              </div>
              <div class="order-price-wrapper">
                <span>£35.00</span>
              </div>
            </div>
            <div class="order-box-body">
              <div class="order-detail-wrapper">
                <i class="fa fa-hashtag"></i>
                <span>Items: 4</span>
              </div>
              <div class="order-detail-wrapper">
                <i class="fa fa-calendar"></i>
                <span>Placed: 2025-07-08</span>
              </div>
              <div class="order-detail-wrapper">
                <i class="fa fa-note-sticky"></i>
                <span>Note: -</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}