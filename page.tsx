'use client';

import { motion } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import OrderForm from './components/OrderForm';
import StatsCounter from './components/StatsCounter';

// SVG Icons
const ViewsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const LikesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const FollowersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 max-w-6xl mx-auto">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Boost <span className="gradient-text">TikTok</span> Account
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Tingkatkan views, likes, dan followers secara instan dengan teknologi terbaru 2026
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        <StatsCounter target={15724} label="Total Boost" delay={0.1} />
        <StatsCounter target={8437} label="Client Aktif" delay={0.2} />
        <StatsCounter target={99.8} label="Success Rate" suffix="%" delay={0.3} />
      </div>

      {/* Services */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <ServiceCard
          icon={<ViewsIcon />}
          title="Views"
          price="Rp 2.000"
          description="1.000 views instan, gradual delivery"
          delay={0.1}
        />
        <ServiceCard
          icon={<LikesIcon />}
          title="Likes"
          price="Rp 3.500"
          description="100 likes real, retention guarantee"
          delay={0.2}
        />
        <ServiceCard
          icon={<FollowersIcon />}
          title="Followers"
          price="Rp 5.000"
          description="50 followers berkualitas, aman"
          delay={0.3}
        />
      </div>

      {/* Order Form */}
      <OrderForm />

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm border-t border-white/5 pt-8">
        <p>© 2026 TikBoost — All rights reserved</p>
      </footer>
    </div>
  );
    }
