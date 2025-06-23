// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
//       <div className="container mx-auto px-6 py-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center">
//           Contact Us
//         </h1>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-green-800 mb-6">Get In Touch</h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="text-2xl">📍</div>
//                   <div>
//                     <h3 className="font-semibold text-green-700 mb-1">Address</h3>
//                     <p className="text-gray-700">
//                       Dehradun, Uttarakhand - 248001
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="text-2xl">📞</div>
//                   <div>
//                     <h3 className="font-semibold text-green-700 mb-1">Phone</h3>
//                     <p className="text-gray-700">
//                       +91-987-076-5758
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="text-2xl">📧</div>
//                   <div>
//                     <h3 className="font-semibold text-green-700 mb-1">Email</h3>
//                     <p className="text-gray-700">
//                       contact@tathaagatfoundation.com
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 pt-8 border-t border-gray-200">
//                 <h3 className="font-semibold text-green-700 mb-4">Follow Us</h3>
//                 <div className="flex space-x-4">
//                   <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">
//                     <span className="text-sm">f</span>
//                   </div>
//                   <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-pink-600 transition-colors">
//                     <span className="text-sm">📷</span>
//                   </div>
//                   <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition-colors">
//                     <span className="text-sm">💬</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form Placeholder */}
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-green-800 mb-6">Send us a Message</h2>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                   <div className="w-full h-10 bg-gray-100 rounded-md border border-gray-300"></div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <div className="w-full h-10 bg-gray-100 rounded-md border border-gray-300"></div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                   <div className="w-full h-10 bg-gray-100 rounded-md border border-gray-300"></div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <div className="w-full h-32 bg-gray-100 rounded-md border border-gray-300"></div>
//                 </div>

//                 <div className="w-full h-12 bg-green-600 rounded-md flex items-center justify-center text-white font-medium cursor-pointer hover:bg-green-700 transition-colors">
//                   Send Message
//                 </div>
//               </div>

//               <p className="text-sm text-gray-500 mt-4">
//                 Form functionality will be implemented in the next phase.
//               </p>
//             </div>
//           </div>

//           {/* Additional Information */}
//           <div className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8 text-center">
//             <h2 className="text-2xl font-bold text-green-800 mb-4">
//               Ready to Make a Difference?
//             </h2>
//             <p className="text-lg text-gray-700 mb-6">
//               Whether you want to volunteer, partner with us, or simply learn more about our work, 
//               we'd love to hear from you. Together, we can create sustainable change, one village at a time.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" onClick={() => window.location.href = '/get-involved'}>
//                 Volunteer Today
//               </button>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" onClick={() => window.location.href = '/get-involved'}>
//                 Become a Partner
//               </button>
//               <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//                 Make a Donation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://tathaagat-2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast({ title: "Success", description: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ title: "Error", description: data.error || "Failed to send message." });
      }
    } catch (error) {
      toast({ title: "Network Error", description: "Could not reach the server." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center">Contact Us</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Address</h3>
                    <p className="text-gray-700">Dehradun, Uttarakhand - 248001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Phone</h3>
                    <p className="text-gray-700">+91-987-076-5758</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Email</h3>
                    <p className="text-gray-700">contact@tathaagatfoundation.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-green-700 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">f</div>
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-pink-600 transition-colors">📷</div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition-colors">💬</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Write your message here..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
