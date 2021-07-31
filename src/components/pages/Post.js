import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import sanityClient from "../../client";

export default function Post() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{title,slug,mainImage{asset->{_id,url}alt}}`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [])
  return (
    <main>
      <h2>DEPLOYED PROJECTS</h2>
      <div className="grid md:grid-cols-2 lg:grid-3 gap-8 ">
      {postData && postData.map((post, index)=>(
        <section>
          test 1
          <Link
            to={"/post/:" + post.slug.current}
            key={post.slug.current}
          >
            <span key={index}>
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
              />
              <h3>{post.title}</h3>
            </span>
          </Link>
        </section>
      ))}
      </div>
    </main>
  );
}
