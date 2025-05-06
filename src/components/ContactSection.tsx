
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out to me through the form below 
            or connect with me on social media.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-tech-purple/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-tech-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:maisserhan09@gmail.com" className="text-gray-600 hover:text-tech-purple transition-colors">
                    maisserhan09@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tech-purple/10 p-3 rounded-full">
                  <Github className="h-5 w-5 text-tech-purple" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a href="https://github.com/MaisSerhan" className="text-gray-600 hover:text-tech-purple transition-colors">
                    github.com/MaisSerhan
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tech-purple/10 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-tech-purple" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/mais-anwer/" className="text-gray-600 hover:text-tech-purple transition-colors">
                    ‏Mais Sarhan‏
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-gray-700 mb-2 block">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-700 mb-2 block">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="text-gray-700 mb-2 block">Subject</label>
                <Input id="subject" placeholder="How can I help you?" />
              </div>
              
              <div>
                <label htmlFor="message" className="text-gray-700 mb-2 block">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  rows={5} 
                  className="resize-none"
                />
              </div>
              
              <Button className="w-full bg-tech-purple hover:bg-tech-purple/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
