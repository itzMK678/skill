"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { ref, onValue, query, orderByChild, startAt, limitToFirst } from "firebase/database"
import { db } from "../../lib/firebase"
import Loading from "../../components/Loading";
import Link from "next/link"
import { Calendar, ArrowRight, Share2, FileText, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
 
interface BlogPost {
  id: string
  title: string
  description: string
  createdAt: string
  slug: string
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const postsPerPage = 5
  const [loading, setLoading] = useState(true)

  // Fetch total number of posts for pagination
  useEffect(() => {
    const postsRef = ref(db, "blogs")
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        setTotalPosts(Object.keys(data).length)
      }
    })
  }, [])
 useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // Fetch posts for the current page
  useEffect(() => {
    setLoading(true)
    const postsRef = query(
      ref(db, "blogs"),
      orderByChild("createdAt"),
      startAt((currentPage - 1) * postsPerPage),
      limitToFirst(postsPerPage),
    )

    onValue(postsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const postsArray: BlogPost[] = Object.entries(data).map(([id, post]: [string, any]) => ({
          id,
          title: post.title,
          description: post.description,
          createdAt: post.createdAt,
          slug: post.slug,
        }))
        setPosts(postsArray)
      } else {
        setPosts([])
      }
      setLoading(false)
    })
  }, [currentPage])

  // Calculate total pages
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Handle pagination
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // Strip HTML tags for description snippet
  const stripHtml = (html: string) => {
    const div = document.createElement("div")
    div.innerHTML = html
    return div.textContent || div.innerText || ""
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-black">
       {loading ? <Loading /> : null}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-white bg-clip-text text-transparent mb-4">
            Latest Articles
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-white mt-6 text-lg max-w-2xl mx-auto">
            Discover insights, tutorials, and stories from our community
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
            </div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FileText className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Articles Yet</h3>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 leading-tight">
                        {post.title}
                      </h2>

                      {/* Date badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.createdAt)}
                      </div>
                    </div>

                    {/* Reading time estimate */}
                    <div className="ml-4 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      {Math.ceil(stripHtml(post.description).length / 200)} min read
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {stripHtml(post.description).substring(0, 200)}
                    {stripHtml(post.description).length > 200 && "..."}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Read Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Share button */}
                    <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </article>
            ))}
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <nav className="flex items-center space-x-2 bg-white rounded-2xl shadow-lg p-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>

              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl font-semibold transition-all duration-200 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-600"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default BlogList
