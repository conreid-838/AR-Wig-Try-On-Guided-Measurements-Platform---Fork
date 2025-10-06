import React, { useState } from 'react';
import Button from '../components/Button';
import { Ruler, CheckCircle, Info, ChevronDown, ChevronUp, HelpCircle, Download, Mail } from 'lucide-react';
const Measurement = () => {
  const [expandedSection, setExpandedSection] = useState('head');
  const toggleSection = section => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  const measurementSections = [{
    id: 'head',
    title: 'Head Circumference',
    description: 'The most important measurement for a comfortable fit',
    steps: ['Find a soft measuring tape.', 'Place the tape around your head where you want the wig to sit, typically about 1/2 inch above your ears.', 'Bring the tape across your forehead, just above your eyebrows.', 'Make sure the tape is snug but not tight.', 'Note the measurement in inches or centimeters.'],
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tip: 'For the most accurate measurement, have someone help you or use a mirror.'
  }, {
    id: 'ear',
    title: 'Ear to Ear Across Forehead',
    description: 'Ensures the wig frames your face properly',
    steps: ['Place the measuring tape at the top of one ear.', 'Measure across your forehead to the top of the other ear.', 'Follow the natural hairline.', 'Keep the tape slightly taut but not tight.'],
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tip: 'This measurement helps determine how the wig will frame your face.'
  }, {
    id: 'nape',
    title: 'Nape of Neck to Hairline',
    description: 'Determines the proper length at the back',
    steps: ['Locate the nape of your neck where your hairline ends.', 'Measure from this point up to your crown.', 'Continue to your front hairline.', 'Follow the natural curve of your head.'],
    image: 'https://images.unsplash.com/photo-1576520491877-2f1967f45c35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tip: 'This measurement ensures the wig has proper coverage at the back of your head.'
  }, {
    id: 'temple',
    title: 'Temple to Temple',
    description: 'Ensures proper width across the back of the head',
    steps: ['Place the measuring tape at your right temple.', 'Measure across the back of your head to your left temple.', 'Follow the natural curve of your head.', 'Keep the tape slightly taut but not tight.'],
    image: 'https://images.unsplash.com/photo-1516522973472-f009f23bba59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tip: 'This helps ensure the wig fits properly around the back of your head.'
  }];
  return <div className="w-full bg-[#faf7f5] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Guided Measurement Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our simple step-by-step guide to ensure your perfect fit.
            Accurate measurements lead to maximum comfort.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#f0e6ee] rounded-full flex items-center justify-center mr-4">
              <Info size={24} className="text-[#8b5e83]" />
            </div>
            <div>
              <h2 className="font-medium text-xl text-gray-900">
                Before You Begin
              </h2>
              <p className="text-gray-600">
                A few helpful tips for accurate measurements
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-[#f0e6ee] rounded-full flex items-center justify-center mr-3">
                <span className="text-[#8b5e83] font-medium">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Use the right tools
                </h3>
                <p className="text-sm text-gray-600">
                  A soft cloth measuring tape will give you the most accurate
                  results.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-[#f0e6ee] rounded-full flex items-center justify-center mr-3">
                <span className="text-[#8b5e83] font-medium">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Ask for help</h3>
                <p className="text-sm text-gray-600">
                  Having someone assist you will make the process easier and
                  more accurate.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-[#f0e6ee] rounded-full flex items-center justify-center mr-3">
                <span className="text-[#8b5e83] font-medium">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Measure twice
                </h3>
                <p className="text-sm text-gray-600">
                  Take each measurement at least twice to ensure accuracy.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-[#f0e6ee] rounded-full flex items-center justify-center mr-3">
                <span className="text-[#8b5e83] font-medium">4</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Record your results
                </h3>
                <p className="text-sm text-gray-600">
                  Write down each measurement as you go through the guide.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="secondary" size="sm" icon={<Download size={16} />}>
              Download Measurement Guide
            </Button>
            <Button variant="outline" size="sm" icon={<Mail size={16} />}>
              Email Instructions
            </Button>
          </div>
        </div>
        {/* Measurement Sections */}
        <div className="space-y-4 mb-12">
          {measurementSections.map(section => <div key={section.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => toggleSection(section.id)}>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#f0e6ee] rounded-full flex items-center justify-center mr-4">
                    <Ruler size={20} className="text-[#8b5e83]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </div>
                <div>
                  {expandedSection === section.id ? <ChevronUp size={20} className="text-[#8b5e83]" /> : <ChevronDown size={20} className="text-gray-400" />}
                </div>
              </div>
              {expandedSection === section.id && <div className="p-4 pt-0 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        How to Measure:
                      </h4>
                      <ol className="space-y-2 mb-4">
                        {section.steps.map((step, index) => <li key={index} className="flex text-sm">
                            <span className="text-[#8b5e83] font-medium mr-2">
                              {index + 1}.
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>)}
                      </ol>
                      <div className="bg-[#f9f4f8] p-3 rounded-lg flex items-start">
                        <HelpCircle size={18} className="text-[#8b5e83] mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{section.tip}</p>
                      </div>
                    </div>
                    <div>
                      <img src={section.image} alt={`How to measure ${section.title}`} className="w-full h-auto rounded-lg" />
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <label className="block text-sm font-medium text-gray-700 mr-3">
                        Your Measurement:
                      </label>
                      <input type="text" className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5e83] focus:border-transparent" placeholder="Enter measurement" />
                      <select className="ml-2 border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5e83] focus:border-transparent">
                        <option>inches</option>
                        <option>cm</option>
                      </select>
                      <Button variant="secondary" size="sm" className="ml-3">
                        Save
                      </Button>
                    </div>
                  </div>
                </div>}
            </div>)}
        </div>
        {/* Next Steps */}
        <div className="bg-[#8b5e83] text-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="font-medium text-2xl mb-4">
            Ready for Your Perfect Fit?
          </h2>
          <p className="mb-6">
            Now that you have your measurements, our stylists can help you find
            the perfect wig that fits comfortably and looks natural.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="md" onClick={() => {}}>
              Book a Consultation
            </Button>
            <Button variant="outline" size="md" className="border-white text-white hover:bg-white/10" onClick={() => {}}>
              Browse Collection
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Measurement;