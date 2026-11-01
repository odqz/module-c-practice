import '../css/events.css'

export function Events() {
  return (
    <>
      {/* <!-- Events Section --> */}
      <div class="events-section container">
        <div class="page-header">
          <h2>Public Events</h2>
          <h3>Browse from our publicly available events!</h3>
        </div>
        {/* <!-- Filters --> */}
        <div class="filters">
          <div class="filter-inner">
            <div class="filter-boxes">
              <div class="filter-group-wrapper wrapper-1">
                <div class="filter-group">
                  <label for="search">Search</label>
                  <input
                    type="text"
                    id="search"
                    placeholder="City or event name"
                  />
                </div>
              </div>
              <div class="filter-group-wrapper wrapper-2">
                <div class="filter-group">
                  <label for="date">Date</label>
                  <input type="date" id="date" />
                </div>
              </div>
              <div class="filter-group-wrapper wrapper-3">
                <div class="filter-group">
                  <label for="category">Category</label>
                  <select id="category">
                    <option value="">---Select a category---</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                  </select>
                </div>
                <div class="filter-group">
                  <label for="sort">Sort by Date</label>
                  <select id="sort">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </div>
            </div>
            <button class="clear-btn button-primary">Clear Filter</button>
          </div>
        </div>
        {/* <!-- Event Grid --> */}
        <div class="event-grid">
          {/* <!-- Repeat for 6 placeholder events --> */}
          <div class="event-box">
            <div class="event-image">
              <div class="event-image-overlay"></div>
              <img src="images/placeholder.png" alt="Event 1" />
              <p class="event-category">Category 1</p>
            </div>
            <div class="event-info">
              <h2>Event 1</h2>
              <p>
                <i class="fa fa-map-pin"></i>
                City 1
              </p>
              <p>
                <i class="fa fa-calendar"></i>
                2025-09-22
              </p>
              <p>
                <i class="fa fa-clock"></i>
                12:00
              </p>
              <p>
                <i class="fa fa-camera"></i>
                5 pictures available
              </p>
              <a href="#" class="button-primary">View Pictures</a>
            </div>
          </div>
          {/* <!-- Copy for Events 2–6 --> */}
          <div class="event-box">
            <div class="event-image">
              <div class="event-image-overlay"></div>
              <img src="images/placeholder.png" alt="Event 2" />
              <p class="event-category">Category 2</p>
            </div>
            <div class="event-info">
              <h2>Event 2</h2>
              <p>
                <i class="fa fa-map-pin"></i>
                City 2
              </p>
              <p>
                <i class="fa fa-calendar"></i>
                2025-09-23
              </p>
              <p>
                <i class="fa fa-clock"></i>
                14:00
              </p>
              <p>
                <i class="fa fa-camera"></i>
                8 pictures available
              </p>
              <a href="#" class="button-primary">View Pictures</a>
            </div>
          </div>
          <div class="event-box">
            <div class="event-image">
              <div class="event-image-overlay"></div>
              <img src="images/placeholder.png" alt="Event 3" />
              <p class="event-category">Category 3</p>
            </div>
            <div class="event-info">
              <h2>Event 3</h2>
              <p>
                <i class="fa fa-map-pin"></i>
                City 3
              </p>
              <p>
                <i class="fa fa-calendar"></i>
                2025-09-24
              </p>
              <p>
                <i class="fa fa-clock"></i>
                16:00
              </p>
              <p>
                <i class="fa fa-camera"></i>
                10 pictures available
              </p>
              <a href="#" class="button-primary">View Pictures</a>
            </div>
          </div>
          <div class="event-box">
            <div class="event-image">
              <div class="event-image-overlay"></div>
              <img src="images/placeholder.png" alt="Event 4" />
              <p class="event-category">Category 4</p>
            </div>
            <div class="event-info">
              <h2>Event 4</h2>
              <p>
                <i class="fa fa-map-pin"></i>
                City 4
              </p>
              <p>
                <i class="fa fa-calendar"></i>
                2025-09-25
              </p>
              <p>
                <i class="fa fa-clock"></i>
                18:00
              </p>
              <p>
                <i class="fa fa-camera"></i>
                6 pictures available
              </p>
              <a href="#" class="button-primary">View Pictures</a>
            </div>
          </div>
          <div class="event-box">
            <div class="event-image">
              <div class="event-image-overlay"></div>
              <img src="images/placeholder.png" alt="Event 5" />
              <p class="event-category">Category 5</p>
            </div>
            <div class="event-info">
              <h2>Event 5</h2>
              <p>
                <i class="fa fa-map-pin"></i>
                City 5
              </p>
              <p>
                <i class="fa fa-calendar"></i>
                2025-09-26
              </p>
              <p>
                <i class="fa fa-clock"></i>
                10:00
              </p>
              <p>
                <i class="fa fa-camera"></i>
                3 pictures available
              </p>
              <a href="#" class="button-primary">View Pictures</a>
            </div>
          </div>
          <div class="event-box">
            <div class="event-image">
              <div class="event-image-overlay"></div>
              <img src="images/placeholder.png" alt="Event 6" />
              <p class="event-category">Category 6</p>
            </div>
            <div class="event-info">
              <h2>Event 6</h2>
              <p>
                <i class="fa fa-map-pin"></i>
                City 6
              </p>
              <p>
                <i class="fa fa-calendar"></i>
                2025-09-27
              </p>
              <p>
                <i class="fa fa-clock"></i>
                20:00
              </p>
              <p>
                <i class="fa fa-camera"></i>
                7 pictures available
              </p>
              <a href="#" class="button-primary">View Pictures</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}