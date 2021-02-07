import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";

function Blog() {
  const [data, setData] = useState("");
  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://dummyapi.io/data/api/user?limit=10",
      headers: {
        "app-id": "601f93746b1dd03e90ebc7a7",
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(data);

  return (
    <div>
      <div className="section-vcardbody section-page" id="page-blog">
        <div className="section-blog">
          {/* Section title */}
          <h2 className="section-title">Blog</h2>
          {/* /Section title */}

          {/* BLOG POSTS */}
          <div className="blog-posts">
            {data &&
              data.data.map((item, i) => {
                return (
                  <div className="blog-item" key={i}>
                    <div className="blog-item-wrapper">
                      {/* blog item thumbnail */}
                      <div className="blog-item-thumb">
                        <a href="single.html" className="loadPost">
                          <img src={item.picture} alt="" />
                        </a>
                      </div>
                      {/* /blog item thumbnail */}
                      {/* Blog item - infos */}
                      <div className="blog-item-infos">
                        {/* blog-item-title */}
                        <div className="blog-item-title-wrapper">
                          <h2 className="blog-item-title title-border">
                            <a href="single.html" className="loadPost">
                              Firstname: {item.firstName}
                            </a>
                          </h2>
                        </div>
                        {/* /blog-item-title */}
                        {/* blog item - description */}
                        <div className="blog-item-description">
                          <p>
                            <a href="single.html" className="loadPost">
                              Email: {item.email}
                            </a>
                          </p>
                        </div>
                        {/* /blog-item-description */}
                      </div>
                      {/* /blog item - infos */}
                    </div>
                  </div>
                );
              })}
          </div>
          {/* /BLOG POSTS */}

          {/* Pagination */}
          <div className="section-pagination">
            <div className="row">
              <div className="col-xs-12">
                <span className="pagination-numbers">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                </span>
              </div>
            </div>
          </div>
          {/* /Pagination */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
