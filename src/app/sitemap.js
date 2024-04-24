export default async function sitemap() {
  const baseUrl = "https://good-housekeeping-clone-red.vercel.app";

  const response = await fetch(baseUrl + "/api/getallpublishedblogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { result } = await response.json();

  const blogPosts = result?.map((post) => {
    return {
      url: `${baseUrl}/blog/${post?.slug}`,
      lastModified: post?.createdAt,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
}
