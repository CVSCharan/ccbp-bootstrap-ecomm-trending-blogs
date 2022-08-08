import './App.css';

function App() {
  return (
    <div className="bg-container">
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <h1 className="h1">Trending Blogs</h1>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card1">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-1-img.png" className="img1" alt="img1" />
                        <div className="card2 shadow">
                            <h1 className="h2">Fountain Pens</h1>
                            <h1 className="h3">Guide to Fountain Pen Nibs</h1>
                            <p className="p1">
                                If you're having trouble with a fountain pen whether it's
                                scratchy, too dry, or too wet...
                            </p>
                            <a className="p2" href="!#">
                                READ MORE <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#ff9f00" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card1">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-2-img.png" className="img1" alt="img2" />

                        <div className="card2 shadow">
                            <h1 className="h2">Productivity</h1>
                            <h1 className="h3">How to Craft a Better Todo List</h1>
                            <p className="p1">
                                A well-crafted Todo list acts as a guding light for your day.
                                It helps you overcome...
                            </p>
                            <a className="p2" href="!#">
                                READ MORE <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#ff9f00" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
