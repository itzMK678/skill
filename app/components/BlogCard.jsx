const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-2">{blog.excerpt}</p>
        <p className="text-sm text-gray-500">{blog.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
