export function Home() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="jumbotron">
        <h1 className="display-4 mx-4">Welcome to MyStore!</h1>
        <p className="lead mx-4 my-2">Discover amazing vintage products & beyond</p>
        <a
          className="btn btn-primary btn-lg mx-4 my-3"
          href="/store"
          role="button"
          style={{ backgroundColor: '#007BFF', border: 'none' }}
        >
          Shop Now
        </a>
      </div>

      <div className="container">
        <div className="card mb-3" style={{ margin: '0 13px' }}>
          <img
            src="/imgs/versatileDesk.jpg"
            className="card-img-top"
            alt="Versatile Desk"
          />
          <div className="card-body">
            <h5 className="card-title">Versatile Desk</h5>
            <p className="card-text">
              L Shaped Desk with Shelves, Corner Computer Office Desk for Home Office
            </p>
            <a href="/store" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>

        <div className="card mb-3" style={{ margin: '0 13px' }}>
          <img
            src="/imgs/car2.jpg"
            className="card-img-top"
            alt="Yellow Beetle"
          />
          <div className="card-body">
            <h5 className="card-title">Yellow Beetle</h5>
            <p className="card-text">1974 Volkswagen Super Beetle</p>
            <a href="/store" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">© 2023 MyStore</span>
        </div>
      </footer>
    </div>
  );
}
