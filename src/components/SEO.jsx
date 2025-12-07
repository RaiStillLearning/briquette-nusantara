import { useEffect } from "react";

export default function SEO({ title, description, image, url }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // Open Graph Title
    if (title) {
      let ogTitle = document.querySelector("meta[property='og:title']");
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute("content", title);
    }

    // Open Graph Description
    if (description) {
      let ogDesc = document.querySelector("meta[property='og:description']");
      if (!ogDesc) {
        ogDesc = document.createElement("meta");
        ogDesc.setAttribute("property", "og:description");
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute("content", description);
    }

    // Open Graph Image
    if (image) {
      let ogImg = document.querySelector("meta[property='og:image']");
      if (!ogImg) {
        ogImg = document.createElement("meta");
        ogImg.setAttribute("property", "og:image");
        document.head.appendChild(ogImg);
      }
      ogImg.setAttribute("content", image);
    }

    // Open Graph URL
    if (url) {
      let ogUrl = document.querySelector("meta[property='og:url']");
      if (!ogUrl) {
        ogUrl = document.createElement("meta");
        ogUrl.setAttribute("property", "og:url");
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute("content", url);
    }
  }, [title, description, image, url]);

  return null;
}
