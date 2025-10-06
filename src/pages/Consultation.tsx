import React, { useState } from 'react';
import Button from '../components/Button';
import { Calendar, Clock, User, MessageSquare, Phone, Video, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
const Consultation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [consultationType, setConsultationType] = useState('video');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const stylists = [{
    id: 1,
    name: 'Emma Thompson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    specialty: 'Color Matching & Fine Hair',
    experience: '15 years',
    bio: 'Emma specializes in creating natural-looking solutions for those with fine hair or experiencing hair loss. Her gentle approach has helped countless clients regain their confidence.'
  }, {
    id: 2,
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    specialty: 'Custom Styling & Texture',
    experience: '12 years',
    bio: 'Michael is known for his creative styling techniques and deep understanding of different hair textures. He excels at finding solutions that match your personal style and comfort needs.'
  }, {
    id: 3,
    name: 'Sophia Rodriguez',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    specialty: 'Medical Hair Loss Solutions',
    experience: '10 years',
    bio: 'Sophia has dedicated her career to helping clients with medical hair loss. Her compassionate approach and extensive knowledge make her an ideal consultant for sensitive situations.'
  }];
  const availableDates = [{
    date: 'May 15, 2023',
    day: 'Monday'
  }, {
    date: 'May 16, 2023',
    day: 'Tuesday'
  }, {
    date: 'May 17, 2023',
    day: 'Wednesday'
  }, {
    date: 'May 18, 2023',
    day: 'Thursday'
  }, {
    date: 'May 19, 2023',
    day: 'Friday'
  }];
  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  const faqs = [{
    id: 1,
    question: 'What happens during a consultation?',
    answer: "During your consultation, our expert stylist will discuss your needs, preferences, and any concerns you may have. They'll help you understand different wig options, materials, and styles that would work best for you. You'll also have the opportunity to ask questions and get personalized advice."
  }, {
    id: 2,
    question: 'How long does a consultation typically last?',
    answer: 'Our consultations typically last 30-45 minutes, giving you plenty of time to discuss your needs and get expert advice without feeling rushed.'
  }, {
    id: 3,
    question: 'Is there a fee for consultations?',
    answer: 'Initial consultations are complimentary. If you decide to purchase a wig after your consultation, the stylist will guide you through that process separately.'
  }, {
    id: 4,
    question: 'How should I prepare for my consultation?',
    answer: "It's helpful to have your measurements ready (you can use our measurement guide), think about styles and colors you're interested in, and prepare any questions you have. If you have specific health concerns or needs, having that information ready will help your stylist provide better guidance."
  }, {
    id: 5,
    question: 'Can I bring someone with me to the virtual consultation?',
    answer: 'Absolutely! Having a trusted friend or family member join your virtual consultation can be helpful. Just let us know in advance so we can make sure the technical setup accommodates everyone.'
  }];
  const toggleFaq = id => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };
  return <div className="w-full bg-[#faf7f5] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Book Your Private Consultation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our expert stylists for personalized guidance in a
            supportive, private environment.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={24} className="text-[#8b5e83]" />
            </div>
            <h2 className="font-medium text-xl text-gray-900 mb-2">
              Select a Stylist
            </h2>
            <p className="text-gray-600 text-sm">
              Choose from our team of certified experts specializing in
              different needs.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={24} className="text-[#8b5e83]" />
            </div>
            <h2 className="font-medium text-xl text-gray-900 mb-2">
              Choose a Date & Time
            </h2>
            <p className="text-gray-600 text-sm">
              Select a convenient time for your private consultation session.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={24} className="text-[#8b5e83]" />
            </div>
            <h2 className="font-medium text-xl text-gray-900 mb-2">
              Consultation Method
            </h2>
            <p className="text-gray-600 text-sm">
              Choose between video, phone, or text-based consultation options.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stylist Selection */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-medium text-xl text-gray-900 mb-6">
                Choose Your Stylist
              </h2>
              <div className="space-y-4">
                {stylists.map(stylist => <div key={stylist.id} onClick={() => setSelectedStylist(stylist)} className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${selectedStylist?.id === stylist.id ? 'border-[#8b5e83] ring-2 ring-[#f0e6ee]' : 'border-gray-200 hover:border-[#8b5e83]'}`}>
                    <div className="flex items-center">
                      <img src={stylist.image} alt={stylist.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {stylist.name}
                        </h3>
                        <p className="text-sm text-[#8b5e83]">
                          {stylist.specialty}
                        </p>
                        <p className="text-xs text-gray-500">
                          {stylist.experience} experience
                        </p>
                      </div>
                      {selectedStylist?.id === stylist.id && <CheckCircle size={20} className="ml-auto text-[#8b5e83]" />}
                    </div>
                    {selectedStylist?.id === stylist.id && <p className="text-sm text-gray-600 mt-3">
                        {stylist.bio}
                      </p>}
                  </div>)}
              </div>
            </div>
          </div>
          {/* Date and Time Selection */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 h-full">
              <h2 className="font-medium text-xl text-gray-900 mb-6">
                Select Date & Time
              </h2>
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                  <Calendar size={16} className="mr-2 text-[#8b5e83]" />
                  Available Dates
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {availableDates.map(item => <button key={item.date} onClick={() => setSelectedDate(item.date)} className={`text-left px-4 py-3 rounded-lg border ${selectedDate === item.date ? 'border-[#8b5e83] bg-[#f9f4f8]' : 'border-gray-200 hover:border-[#8b5e83]'}`}>
                      <div className="font-medium text-gray-900">
                        {item.date}
                      </div>
                      <div className="text-sm text-gray-500">{item.day}</div>
                    </button>)}
                </div>
              </div>
              {selectedDate && <div>
                  <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Clock size={16} className="mr-2 text-[#8b5e83]" />
                    Available Times
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map(time => <button key={time} onClick={() => setSelectedTime(time)} className={`text-center px-3 py-2 rounded-lg border ${selectedTime === time ? 'border-[#8b5e83] bg-[#f9f4f8]' : 'border-gray-200 hover:border-[#8b5e83]'}`}>
                        {time}
                      </button>)}
                  </div>
                </div>}
            </div>
          </div>
          {/* Consultation Type and Booking */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-medium text-xl text-gray-900 mb-6">
                Consultation Details
              </h2>
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">
                  Consultation Type
                </h3>
                <div className="space-y-3">
                  <button onClick={() => setConsultationType('video')} className={`w-full flex items-center px-4 py-3 rounded-lg border ${consultationType === 'video' ? 'border-[#8b5e83] bg-[#f9f4f8]' : 'border-gray-200 hover:border-[#8b5e83]'}`}>
                    <Video size={20} className="mr-3 text-[#8b5e83]" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">
                        Video Call
                      </div>
                      <div className="text-xs text-gray-500">
                        Face-to-face conversation via secure video
                      </div>
                    </div>
                  </button>
                  <button onClick={() => setConsultationType('phone')} className={`w-full flex items-center px-4 py-3 rounded-lg border ${consultationType === 'phone' ? 'border-[#8b5e83] bg-[#f9f4f8]' : 'border-gray-200 hover:border-[#8b5e83]'}`}>
                    <Phone size={20} className="mr-3 text-[#8b5e83]" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">
                        Phone Call
                      </div>
                      <div className="text-xs text-gray-500">
                        Private conversation by phone
                      </div>
                    </div>
                  </button>
                  <button onClick={() => setConsultationType('message')} className={`w-full flex items-center px-4 py-3 rounded-lg border ${consultationType === 'message' ? 'border-[#8b5e83] bg-[#f9f4f8]' : 'border-gray-200 hover:border-[#8b5e83]'}`}>
                    <MessageSquare size={20} className="mr-3 text-[#8b5e83]" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Messaging</div>
                      <div className="text-xs text-gray-500">
                        Text-based consultation at your pace
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">
                  Special Requests
                </h3>
                <textarea className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5e83] focus:border-transparent" placeholder="Any specific concerns or topics you'd like to discuss..." rows={3}></textarea>
              </div>
              <Button variant="primary" size="lg" fullWidth disabled={!selectedStylist || !selectedDate || !selectedTime}>
                Confirm Booking
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4">
                You can reschedule or cancel up to 24 hours before your
                appointment.
              </p>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map(faq => <div key={faq.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button className="flex items-center justify-between w-full p-4 text-left" onClick={() => toggleFaq(faq.id)}>
                  <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  {expandedFaq === faq.id ? <ChevronUp size={20} className="text-[#8b5e83]" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                {expandedFaq === faq.id && <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default Consultation;