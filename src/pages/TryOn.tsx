import React, { useState, Fragment } from 'react';
import Button from '../components/Button';
import { Camera, RefreshCw, CheckCircle, ChevronRight, ChevronLeft, Heart, Share2 } from 'lucide-react';
const TryOn = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const wigStyles = [{
    id: 1,
    name: 'Elegant Waves',
    image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: 'Chestnut Brown',
    length: 'Medium',
    texture: 'Wavy'
  }, {
    id: 2,
    name: 'Sleek Bob',
    image: 'https://images.unsplash.com/photo-1605980776545-037f70c2526b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: 'Deep Black',
    length: 'Short',
    texture: 'Straight'
  }, {
    id: 3,
    name: 'Volume Curls',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: 'Auburn',
    length: 'Long',
    texture: 'Curly'
  }];
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return <div className="w-full bg-[#faf7f5] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Virtual Try-On Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your perfect look with our gentle AR technology in the
            privacy of your own space.
          </p>
        </div>
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center max-w-xl mx-auto">
            {[1, 2, 3].map(step => <Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-[#8b5e83] text-white' : 'bg-[#e6d7e3] text-gray-500'}`}>
                    {currentStep > step ? <CheckCircle size={20} /> : step}
                  </div>
                  <span className="text-xs text-gray-600 mt-2">
                    {step === 1 ? 'Select Style' : step === 2 ? 'Try On' : 'Save & Share'}
                  </span>
                </div>
                {step < 3 && <div className={`w-20 h-1 ${currentStep > step ? 'bg-[#8b5e83]' : 'bg-[#e6d7e3]'} mx-2`} />}
              </Fragment>)}
          </div>
        </div>
        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-6xl mx-auto">
          {currentStep === 1 && <div>
              <h2 className="font-medium text-2xl text-gray-900 mb-6">
                Choose a Style to Try
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {wigStyles.map(style => <div key={style.id} onClick={() => setSelectedStyle(style)} className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${selectedStyle?.id === style.id ? 'border-[#8b5e83] ring-2 ring-[#f0e6ee]' : 'border-gray-200 hover:border-[#8b5e83]'}`}>
                    <img src={style.image} alt={style.name} className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <h3 className="font-medium text-lg text-gray-900 mb-2">
                        {style.name}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Color: {style.color}</p>
                        <p>Length: {style.length}</p>
                        <p>Texture: {style.texture}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>}
          {currentStep === 2 && <div>
              <h2 className="font-medium text-2xl text-gray-900 mb-6">
                Try On Your Selected Style
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Camera size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-4">
                        Enable your camera to see how this style looks on you
                      </p>
                      <Button variant="primary" size="md" icon={<Camera size={18} />}>
                        Enable Camera
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-xl text-gray-900 mb-4">
                    {selectedStyle?.name || 'Your Selected Style'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Use the controls below to adjust the fit and position for
                    the most realistic preview.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adjust Size
                      </label>
                      <input type="range" min="1" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8b5e83]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adjust Position
                      </label>
                      <input type="range" min="1" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8b5e83]" />
                    </div>
                    <div className="pt-4">
                      <Button variant="secondary" size="md" icon={<RefreshCw size={16} />} className="mr-3">
                        Try Another Style
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {currentStep === 3 && <div>
              <h2 className="font-medium text-2xl text-gray-900 mb-6">
                Save Your Look
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                  <img src={selectedStyle?.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-xl text-gray-900 mb-4">
                    {selectedStyle?.name || 'Your Perfect Match'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Love this look? Save it to your profile or share with a
                    trusted friend for their opinion.
                  </p>
                  <div className="space-y-4 mb-8">
                    <Button variant="primary" size="md" fullWidth icon={<Heart size={16} />}>
                      Save to Favorites
                    </Button>
                    <Button variant="outline" size="md" fullWidth icon={<Share2 size={16} />}>
                      Share Look
                    </Button>
                  </div>
                  <div className="bg-[#f9f4f8] p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Ready to take the next step?
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Schedule a personal consultation with one of our expert
                      stylists to discuss this style.
                    </p>
                    <Button variant="secondary" size="sm">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
            <Button variant="outline" size="md" onClick={prevStep} disabled={currentStep === 1} icon={<ChevronLeft size={16} />}>
              Previous
            </Button>
            <Button variant="primary" size="md" onClick={nextStep} disabled={currentStep === 1 && !selectedStyle || currentStep === 3} icon={currentStep < 3 ? <ChevronRight size={16} className="ml-1 order-2" /> : null}>
              {currentStep < 3 ? 'Continue' : 'Complete'}
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default TryOn;