import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./BlogGrid.css";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for a Healthier Heart",
    excerpt:
      "Maintaining heart health is crucial for long-term well-being. Learn about the best foods, exercises, and lifestyle habits to keep your heart strong.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    category: "Health Tips",
    author: "Dr. Sarah Johnson",
    date: "May 15, 2025",
  },
  {
    id: 2,
    title: "Understanding Modern Dental Technology",
    excerpt:
      "From digital X-rays to advanced laser treatments, dental care has come a long way. Discover how these technologies improve your patient experience.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    category: "Medical News",
    author: "Dr. Michael Chen",
    date: "May 12, 2025",
  },
  {
    id: 3,
    title: "Childhood Immunization: A Complete Guide",
    excerpt:
      "Vaccinations are the first line of defense against many childhood diseases. We break down the recommended schedule and answer common parent concerns.",
    image:
      "https://images.unsplash.com/photo-1632053001835-512c011e5a87?q=80&w=800&auto=format&fit=crop",
    category: "Pediatrics",
    author: "Dr. Emily Parker",
    date: "May 10, 2025",
  },
  {
    id: 4,
    title: "Managing Stress in a High-Pressure World",
    excerpt:
      "Stress affects both your mental and physical health. Explore effective techniques for mindfulness and stress reduction in your daily life.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    category: "Lifestyle",
    author: "Dr. Lisa Wong",
    date: "May 08, 2025",
  },
  {
    id: 5,
    title: "The Future of Neurological Care",
    excerpt:
      "Recent breakthroughs in brain research are paving the way for revolutionary treatments for Alzheimer's and other neurological conditions.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    category: "Medical News",
    author: "Dr. James Wilson",
    date: "May 05, 2025",
  },
  {
    id: 6,
    title: "Proper Ergonomics for Office Workers",
    excerpt:
      "Are you sitting comfortably? Poor desk habits can lead to chronic back and neck pain. Here's how to set up your workspace for Success.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop",
    category: "Health Tips",
    author: "Dr. Robert Martinez",
    date: "May 02, 2025",
  },
];

const categories = [
  "All",
  "Health Tips",
  "Medical News",
  "Pediatrics",
  "Lifestyle",
];

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
          {categories.map((category) => (
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
