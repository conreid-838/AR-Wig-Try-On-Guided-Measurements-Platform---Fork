import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Camera, Ruler, CalendarClock, BookOpen, ArrowRight, Star } from 'lucide-react';
const Home = () => {
  const navigate = useNavigate();
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#f9f4f8] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Your journey to confidence begins with a perfect fit
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Experience our luxury virtual wig salon where comfort, privacy,
              and personalized care come together to help you look and feel your
              best.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" onClick={() => navigate('/try-on')}>
                Try On Virtually
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/consultation')}>
                Book Consultation
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Woman with elegant hairstyle" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-[#f3c06b] text-[#f3c06b]" />)}
              </div>
              <p className="mt-1 text-sm text-gray-700">
                "The virtual try-on was so helpful. I found my perfect style!"
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              A Supportive Journey Every Step of the Way
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to provide you with comfort, confidence,
              and expert guidance throughout your wig selection process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#faf7f5] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mb-4">
                <Camera size={24} className="text-[#8b5e83]" />
              </div>
              <h3 className="font-medium text-xl text-gray-900 mb-2">
                Virtual Try-On
              </h3>
              <p className="text-gray-600 mb-4">
                Our AR technology lets you visualize different styles in the
                comfort of your home.
              </p>
              <button onClick={() => navigate('/try-on')} className="text-[#8b5e83] font-medium text-sm flex items-center hover:underline">
                Try it now <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="bg-[#faf7f5] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mb-4">
                <Ruler size={24} className="text-[#8b5e83]" />
              </div>
              <h3 className="font-medium text-xl text-gray-900 mb-2">
                Guided Measurements
              </h3>
              <p className="text-gray-600 mb-4">
                Easy-to-follow instructions ensure you get the perfect fit for
                maximum comfort.
              </p>
              <button onClick={() => navigate('/measurement')} className="text-[#8b5e83] font-medium text-sm flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="bg-[#faf7f5] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mb-4">
                <CalendarClock size={24} className="text-[#8b5e83]" />
              </div>
              <h3 className="font-medium text-xl text-gray-900 mb-2">
                Expert Consultations
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with our luxury stylists for personalized advice and
                recommendations.
              </p>
              <button onClick={() => navigate('/consultation')} className="text-[#8b5e83] font-medium text-sm flex items-center hover:underline">
                Book now <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="bg-[#faf7f5] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-[#8b5e83]" />
              </div>
              <h3 className="font-medium text-xl text-gray-900 mb-2">
                Wellness Resources
              </h3>
              <p className="text-gray-600 mb-4">
                Educational materials focused on hair wellness, care tips, and
                styling guides.
              </p>
              <button onClick={() => navigate('/education')} className="text-[#8b5e83] font-medium text-sm flex items-center hover:underline">
                Explore <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-20 px-6 md:px-12 bg-[#f9f4f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Stories from Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from clients who have found confidence and comfort through
              our personalized services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'Sarah T.',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            quote: 'The virtual try-on feature helped me find a style that truly suits me. The consultation was so supportive and understanding of my needs.'
          }, {
            name: 'Michelle K.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            quote: 'I was nervous about measurements, but the guided process was simple and the fit is perfect. I feel like myself again!'
          }, {
            name: 'Jennifer R.',
            image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            quote: 'The educational resources helped me understand how to care for my new wig. The private consultation made me feel heard and respected.'
          }].map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#f3c06b] text-[#f3c06b]" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#8b5e83] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Begin Your Transformation Today
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Take the first step towards renewed confidence with our supportive,
            private, and personalized services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" onClick={() => navigate('/try-on')}>
              Try On Virtually
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/consultation')} className="border-white text-white hover:bg-white/10">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;