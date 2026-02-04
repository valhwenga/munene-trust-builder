import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const enquiryTypes = [
  "Personal Insurance Quote",
  "Commercial Insurance Quote",
  "Corporate Insurance Quote",
  "Public Sector Insurance Quote",
  "General Enquiry",
  "Claims Assistance",
  "Partnership Opportunity",
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production this would send to backend
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create mailto link as fallback
    const subject = encodeURIComponent(`${formData.enquiryType || 'Website Enquiry'} from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEnquiry Type: ${formData.enquiryType}\n\nMessage:\n${formData.message}`
    );
    
    // Open mailto as fallback
    window.location.href = `mailto:admin@munenerisk.co.za?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Prepared",
      description: "Your email client will open to send your enquiry.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ready to protect what matters most? Contact our expert team today for a 
              comprehensive risk assessment and personalized insurance quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <a 
                  href="tel:+27123456789"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground">+27 12 345 6789</p>
                  </div>
                </a>

                <a 
                  href="mailto:admin@munenerisk.co.za"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">admin@munenerisk.co.za</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Location</h4>
                    <p className="text-muted-foreground">Johannesburg, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Client Portal CTA */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h4 className="font-display font-semibold text-lg mb-2">Existing Client?</h4>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Access your policies and manage your insurance through our client portal.
                </p>
                <a
                  href="https://munene.allbroker.co.za/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-gold border-0">
                    Client Portal
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your enquiry has been prepared. Please complete sending the email 
                      through your email client.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Email Address *
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          placeholder="+27 12 345 6789"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Type of Enquiry *
                        </label>
                        <Select
                          value={formData.enquiryType}
                          onValueChange={(value) => handleChange("enquiryType", value)}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select enquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {enquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        placeholder="Tell us about your insurance needs..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="min-h-[150px] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gold border-0 h-14 text-lg"
                    >
                      {isSubmitting ? (
                        "Preparing..."
                      ) : (
                        <>
                          Submit Enquiry
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by Munene Risk Services 
                      regarding your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
