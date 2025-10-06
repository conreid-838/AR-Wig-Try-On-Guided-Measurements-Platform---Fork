import React, { useState } from 'react';
import Button from '../components/Button';
import { BookOpen, Play, Video, FileText, Download, Search, Heart, Share2, ChevronDown, ChevronUp, Clock } from 'lucide-react';
const Education = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedResource, setExpandedResource] = useState(null);
  const categories = [{
    id: 'all',
    name: 'All Resources'
  }, {
    id: 'care',
    name: 'Wig Care'
  }, {
    id: 'wellness',
    name: 'Hair Wellness'
  }, {
    id: 'styling',
    name: 'Styling Tips'
  }, {
    id: 'confidence',
    name: 'Confidence Building'
  }];
  const resources = [{
    id: 1,
    title: 'Gentle Wig Care Routine',
    description: 'Learn the proper techniques for washing, conditioning, and maintaining your wig for longevity and natural appearance.',
    category: 'care',
    type: 'video',
    duration: '12 min',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    content: 'This comprehensive guide covers everything from selecting the right products to proper washing techniques that extend the life of your wig while maintaining its natural appearance.'
  }, {
    id: 2,
    title: 'Scalp Health & Wellness',
    description: 'Discover soothing techniques and products to maintain optimal scalp health while wearing wigs.',
    category: 'wellness',
    type: 'article',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    content: 'This article explores the importance of scalp care when wearing wigs, including gentle cleansing routines, moisturizing techniques, and protective measures to ensure comfort and health.'
  }, {
    id: 3,
    title: 'Styling Your Wig: Natural Looks',
    description: 'Expert styling tips to achieve natural-looking results with minimal heat and manipulation.',
    category: 'styling',
    type: 'video',
    duration: '15 min',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    content: 'Our styling expert demonstrates techniques for creating natural-looking styles while minimizing damage to your wig. Learn about heat-free styling methods and gentle product application.'
  }, {
    id: 4,
    title: 'Finding Confidence in Your New Look',
    description: 'Emotional wellness tips for embracing change and feeling confident in your wig.',
    category: 'confidence',
    type: 'guide',
    pages: '10 pages',
    image: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    content: 'This supportive guide addresses the emotional aspects of wearing a wig, with practical exercises and mindfulness techniques to help you embrace your new look with confidence.'
  }, {
    id: 5,
    title: 'Seasonal Wig Care: Summer Edition',
    description: 'Special care tips for maintaining your wig during hot and humid summer months.',
    category: 'care',
    type: 'article',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1523283353542-4270a3b3c9ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    content: 'Learn how to protect and care for your wig during summer activities, including swimming, sun exposure, and dealing with humidity. Includes product recommendations and quick styling solutions.'
  }, {
    id: 6,
    title: 'Mindfulness Practices for Hair Loss Journey',
    description: 'Supportive wellness practices to nurture emotional health during hair loss experiences.',
    category: 'wellness',
    type: 'guide',
    pages: '12 pages',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    content: 'This comprehensive wellness guide offers meditation techniques, journaling prompts, and self-care practices specifically designed for those experiencing hair loss and adjusting to wearing wigs.'
  }];
  const filteredResources = activeCategory === 'all' ? resources : resources.filter(resource => resource.category === activeCategory);
  const toggleResource = id => {
    if (expandedResource === id) {
      setExpandedResource(null);
    } else {
      setExpandedResource(id);
    }
  };
  const getResourceIcon = type => {
    switch (type) {
      case 'video':
        return <Video size={18} />;
      case 'article':
        return <FileText size={18} />;
      case 'guide':
        return <BookOpen size={18} />;
      default:
        return <FileText size={18} />;
    }
  };
  return <div className="w-full bg-[#faf7f5] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Wellness & Educational Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of supportive materials designed to enhance
            your comfort, confidence, and knowledge.
          </p>
        </div>
        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="relative w-full md:w-auto md:min-w-[320px]">
              <input type="text" placeholder="Search resources..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e83] focus:border-transparent" />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category.id ? 'bg-[#8b5e83] text-white' : 'bg-white text-gray-700 hover:bg-[#f0e6ee] hover:text-[#8b5e83]'}`}>
                  {category.name}
                </button>)}
            </div>
          </div>
        </div>
        {/* Featured Resource */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            <div className="order-2 md:order-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="inline-block bg-[#f0e6ee] text-[#8b5e83] text-xs font-medium px-2.5 py-1 rounded-full mb-4">
                Featured Resource
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                The Complete Guide to Wig Confidence
              </h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive guide combines practical styling tips, care
                instructions, and emotional wellness techniques to help you feel
                your most confident self.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Video size={16} className="mr-2 text-[#8b5e83]" />
                <span>Video Series • 4 parts • 45 min total</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="md" icon={<Play size={16} />}>
                  Watch Now
                </Button>
                <Button variant="outline" size="md" icon={<Download size={16} />}>
                  Download Guide
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Woman with elegant hairstyle smiling confidently" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map(resource => <div key={resource.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="relative">
                <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#8b5e83] text-xs font-medium px-2.5 py-1 rounded-full">
                  <div className="flex items-center">
                    {getResourceIcon(resource.type)}
                    <span className="ml-1 capitalize">{resource.type}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-medium text-xl text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  {resource.duration && <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {resource.duration}
                    </span>}
                  {resource.readTime && <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {resource.readTime} read
                    </span>}
                  {resource.pages && <span className="flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      {resource.pages}
                    </span>}
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <button onClick={() => toggleResource(resource.id)} className="text-[#8b5e83] font-medium text-sm flex items-center hover:underline">
                  {expandedResource === resource.id ? 'View Less' : 'View More'}
                  {expandedResource === resource.id ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                </button>
                {expandedResource === resource.id && <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-700 mb-4">
                      {resource.content}
                    </p>
                    <div className="flex justify-between">
                      <Button variant="secondary" size="sm" icon={resource.type === 'video' ? <Play size={14} /> : <BookOpen size={14} />}>
                        {resource.type === 'video' ? 'Watch' : 'Read'}
                      </Button>
                      <div className="flex space-x-2">
                        <button aria-label="Save" className="text-gray-400 hover:text-[#8b5e83] transition-colors duration-300">
                          <Heart size={18} />
                        </button>
                        <button aria-label="Share" className="text-gray-400 hover:text-[#8b5e83] transition-colors duration-300">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>)}
        </div>
        {/* Newsletter */}
        <div className="bg-[#8b5e83] text-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
            Stay Updated with Wellness Tips
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter for exclusive educational content, care
            tips, and supportive resources delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none" />
            <Button variant="secondary" size="md">
              Subscribe
            </Button>
          </div>
          <p className="text-white/80 text-xs mt-4">
            We respect your privacy and will never share your information.
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>;
};
export default Education;