import React, { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';

interface RegistrationFormData {
  email: string;
  fullName: string;
  gender: string;
  whatsapp: string;
  faculty: string;
  otherContact: string;
  department: string;
  whyJoin: string;
  paymentMade: string;
  paymentProof: File | null;
}

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: '',
    fullName: '',
    gender: '',
    whatsapp: '',
    faculty: '',
    otherContact: '',
    department: '',
    whyJoin: '',
    paymentMade: '',
    paymentProof: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const faculties = [
    'Faculty of Arts',
    'Faculty of Agriculture',
    'Basic Medical Science',
    'School of Dentistry',
    'Faculty of Education',
    'Faculty of Engineering',
    'Faculty of Environmental Science',
    'Faculty of Law',
    'Faculty of Management Science',
    'Faculty of Pharmacy',
    'Faculty of Physical Science',
    'Faculty of Social Science',
    'School of Medical Science',
    'College of Medicine',
    'Veterinary Medicine',
    'Faculty of Life Science',
    'Other'
  ];

  const departments = [
    'Social Media',
    'My friend',
    'JCIN UNIBEN ALUMNI',
    'Other...'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        paymentProof: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission to Google Sheets
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with Google Sheets API
      // For now, we'll just show success message
      setShowSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          email: '',
          fullName: '',
          gender: '',
          whatsapp: '',
          faculty: '',
          otherContact: '',
          department: '',
          whyJoin: '',
          paymentMade: '',
          paymentProof: null
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Join JCIN UNIBEN</h2>
              <p className="text-white/90 mt-1">Complete your registration to get started</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-gradient-to-r from-jcin-yellow/10 to-jcin-yellow/20 p-4 mx-6 mt-4 rounded-xl border border-jcin-yellow/30">
          <h3 className="font-semibold text-jcin-dark-blue mb-2">Payment Details</h3>
          <div className="text-sm text-slate-700 space-y-1">
            <p><strong>Account Number:</strong> 6230221708</p>
            <p><strong>Account Name:</strong> Junior Chamber Int'l UNIBEN</p>
            <p><strong>Bank:</strong> Fidelity</p>
            <p><strong>Amount:</strong> ₦1,000</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {showSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-green-800">Registration Successful!</div>
                <div className="text-green-700 text-sm">Welcome to JCIN UNIBEN! We'll contact you soon.</div>
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
              placeholder="Enter your email address"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name (Surname First) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
              placeholder="Enter your full name (surname first)"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              WhatsApp Contact <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
              placeholder="Enter your WhatsApp number"
            />
          </div>

          {/* Faculty */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              What faculty do you belong to? <span className="text-red-500">*</span>
            </label>
            <select
              name="faculty"
              value={formData.faculty}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
            >
              <option value="">Select faculty</option>
              {faculties.map((faculty) => (
                <option key={faculty} value={faculty}>{faculty}</option>
              ))}
            </select>
          </div>

          {/* Other Contact */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Other Contact <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="otherContact"
              value={formData.otherContact}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
              placeholder="Enter alternative contact number"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              How did you hear about us? <span className="text-red-500">*</span>
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
            >
              <option value="">Select option</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Why Join */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Why do you want to join JCIN UNIBEN? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="whyJoin"
              value={formData.whyJoin}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all resize-none"
              placeholder="Tell us why you want to join JCIN UNIBEN"
            />
          </div>

          {/* Payment Made */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Have you made the ₦1000 payment? <span className="text-red-500">*</span>
            </label>
            <select
              name="paymentMade"
              value={formData.paymentMade}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
            >
              <option value="">Select option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Payment Proof */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Proof of Payment <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-jcin-light-blue transition-colors">
              <input
                type="file"
                name="paymentProof"
                onChange={handleFileChange}
                required
                accept="image/*,.pdf"
                className="hidden"
                id="paymentProof"
              />
              <label htmlFor="paymentProof" className="cursor-pointer">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-600 mb-1">
                  <span className="text-jcin-light-blue font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-slate-500 text-sm">PNG, JPG, PDF up to 10MB</p>
                {formData.paymentProof && (
                  <p className="text-green-600 text-sm mt-2 font-medium">
                    ✓ {formData.paymentProof.name}
                  </p>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white font-bold py-4 px-6 rounded-xl hover:from-jcin-dark-blue hover:to-jcin-light-blue transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
