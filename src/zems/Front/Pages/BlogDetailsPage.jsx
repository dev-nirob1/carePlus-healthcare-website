import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowLeft } from "react-icons/fa";
import { blogPosts } from "../../../data/blogData";
import PageHero from "../Components/Widget/PageHero";
import "../Components/Section/BlogDetails.css";

function BlogDetailsPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | CarePlus Clinic`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="blog-details-section">
        <div
          className="blog-details-container"
          style={{ textAlign: "center", padding: "5rem 0" }}
        >
          <h1>Article Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="back-to-blog"
            style={{ justifyContent: "center", marginTop: "2rem" }}
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-details-page">
      <PageHero
        title="Article Details"
        bgImage={post.image}
        pageTitle="Blog Details"
      />

      <section className="blog-details-section">
        <div className="blog-details-container">
          <div className="blog-details-header">
            <span className="blog-details-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-details-meta">
              <span>
                <FaCalendarAlt /> {post.date}
              </span>
              <span>
                <FaUser /> {post.author}
              </span>
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="blog-details-image"
          />

          <div
            className="blog-details-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="blog-details-footer">
            <Link to="/blog" className="back-to-blog">
              <FaArrowLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetailsPage;
