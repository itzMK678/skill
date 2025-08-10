"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { ref, onValue, query, orderByChild, equalTo } from "firebase/database"
import { db } from "../../../lib/firebase"
import Link from "next/link"
import Loading from "../../../components/Loading";
import { useParams, useRouter } from "next/navigation"
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  User,
  Loader2,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"

interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  createdAt: string
  slug: string
  author?: string
  tags?: string[]
  readTime?: number
}

interface RelatedPost {
  id: string
  title: string
  slug: string
  createdAt: string
}

const BlogDetailPage: React.FC = () => {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [loader, setLoader] = useState(true);
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  // Fetch blog post by slug
  useEffect(() => {
    if (!slug) return

    setLoading(true)
    const postsRef = query(ref(db, "blogs"), orderByChild("slug"), equalTo(slug))

    onValue(
      postsRef,
      (snapshot) => {
        const data = snapshot.val()
        if (data) {
          const postData = Object.values(data)[0] as any
          const postId = Object.keys(data)[0]
          setPost({
            id: postId,
            title: postData.title,
            description: postData.description,
            content: postData.content || postData.description,
            createdAt: postData.createdAt,
            slug: postData.slug,
            author: postData.author || "Anonymous",
            tags: postData.tags || [],
            readTime: postData.readTime || Math.ceil((postData.content || postData.description).length / 200),
          })
        } else {
          setError("Post not found")
        }
        setLoading(false)
      },
      (error) => {
        setError("Failed to load post")
        setLoading(false)
      },
    )
  }, [slug])
const handleshareurl=()=>{
    alert("copy")
}
  // Fetch related posts
  useEffect(() => {
    const postsRef = ref(db, "blogs")
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const posts = Object.entries(data)
          .map(([id, post]: [string, any]) => ({
            id,
            title: post.title,
            slug: post.slug,
            createdAt: post.createdAt,
          }))
          .filter((p) => p.slug !== slug)
          .slice(0, 3)
        setRelatedPosts(posts)
      }
    })
  }, [slug])

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Share functions
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = post?.title || ""

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl)
      // You could add a toast notification here
    } else {
      window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400")
    }
   
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <MessageCircle className="w-12 h-12 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
        {loader ? <Loading /> : null}
      {/* Navigation Bar */}
      <nav className="bg-black backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-white hover:text-purple-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center space-x-4">
             

               
              <div className="relative">
                <button
                  onClick={() => handleshareurl()}
                  className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
                >
                  <Share2 className="w-5 h-5" />
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Gradient divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{formatDate(relatedPost.createdAt)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section Placeholder */}
       
        </div>
      </div>

    </div>
  )
}

export default BlogDetailPage
