"use client";
import { useState } from "react";
import { Mail, Search } from "lucide-react";

export default function ContactPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const contacts = [
    {
      name: "John Doe",
      topic: "Mastering React Hooks",
      email: "john.doe@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Jane Smith",
      topic: "Advanced CSS Techniques",
      email: "jane.smith@example.com",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Alex Johnson",
      topic: "UI/UX Design Trends 2025",
      email: "alex.johnson@example.com",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-purple-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-purple-400">Contact Us</h2>

      {/* Search Input */}
      <div className="relative mb-8 max-w-xl">
        <input
          type="text"
          placeholder="Search by name or blog topic..."
          className="w-full px-4 py-2 pl-10 rounded-md bg-gray-800 border border-purple-600 text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-purple-400" size={20} />
      </div>

      {/* Contact Cards */}
      <div className="space-y-4">
        {filteredContacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-gray-900 border border-purple-700 rounded-lg shadow hover:shadow-purple-800 transition-shadow max-w-4xl"
          >
            <img
              src={contact.avatar}
              alt={`${contact.name} avatar`}
              className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-purple-200">{contact.name}</h3>
              <p className="text-sm text-purple-400">{contact.topic}</p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-4 py-2 text-purple-100 border border-purple-500 rounded-md hover:bg-purple-700 hover:text-white transition"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
