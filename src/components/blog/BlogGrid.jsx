import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogPosts, blogCategories } from "../../data/blogData";
import "./BlogGrid.css";

function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (
    <section className="blog-grid-section">
      <div className="blog-grid-container">
        {/* Category Filters */}
        <div className="blog-filters">
          {blogCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-posts-grid">
          {filteredPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image-wrapper">
                <span className="blog-category-tag">{post.category}</span>
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-post-image"
                />
              </div>
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span>
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <span>
                    <FaUser /> {post.author}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more-link">
                  Read Full Article <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
