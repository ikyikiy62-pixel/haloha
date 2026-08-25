'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function OrderForm() {
  const [url, setUrl] = useState('');
  const [quantity, setQuantity] = useState(1000);
  const [service, setService] = useState('views');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ url, quantity, service });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      onSubmit={handleSubmit}
      className="glass-card p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold">Boost Sekarang</h2>
      
      <div>
        <label className="block text-sm text-gray-400 mb-2">Link Video TikTok</label>
        <input
          type="url"
          placeholder="https://tiktok.com/@user/video/xxxxx"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-white/10 focus:border-primary outline-none transition-colors"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Layanan</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-white/10 focus:border-primary outline-none transition-colors"
          >
            <option value="views">Views</option>
            <option value="likes">Likes</option>
            <option value="followers">Followers</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-gray-400 mb-2">Jumlah</label>
          <input
            type="number"
            min="100"
            max="100000"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-white/10 focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-xl shadow-primary/30"
      >
        Proses Boost
      </motion.button>
    </motion.form>
  );
      }
