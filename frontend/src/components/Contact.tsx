import React, { useState, useEffect } from 'react';
import './Contact.css';
import { ContactFormData } from '../types';

interface CaptchaState {
  question: string;
  loading: boolean;
}

type StatusType = '' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    captcha_answer: ''
  });
  const [status, setStatus] = useState<StatusType>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<CaptchaState>({ question: '', loading: true });

  // Load captcha on component mount
  useEffect(() => {
    loadCaptcha();
  }, []);

  const loadCaptcha = async (): Promise<void> => {
    try {
      setCaptcha({ question: '', loading: true });
      const response = await fetch('http://localhost:5001/api/captcha', {
        credentials: 'include' // Include cookies for session
      });
      const data = await response.json();
      setCaptcha({ question: data.question, loading: false });
    } catch (error) {
      console.error('Error loading captcha:', error);
      setCaptcha({ question: 'Error loading captcha', loading: false });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies for session
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', captcha_answer: '' });
        loadCaptcha(); // Load new captcha after successful submission
      } else {
        const errorData = await response.json();
        setStatus('error');
        // If captcha error, reload captcha
        if (errorData.error && errorData.error.includes('captcha')) {
          loadCaptcha();
          setFormData({ ...formData, captcha_answer: '' });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
            <div className="contact-methods">
              <div className="contact-method">
                <strong>Email:</strong> contact@example.com
              </div>
              <div className="contact-method">
                <strong>Location:</strong> Your Location
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="form-group captcha-group">
              <label htmlFor="captcha_answer">Security Check</label>
              <div className="captcha-container">
                <div className="captcha-question">
                  {captcha.loading ? 'Loading...' : captcha.question}
                </div>
                <div className="captcha-input-container">
                  <input
                    type="number"
                    id="captcha_answer"
                    name="captcha_answer"
                    value={formData.captcha_answer}
                    onChange={handleChange}
                    placeholder="Your answer"
                    required
                    disabled={captcha.loading}
                  />
                  <button
                    type="button"
                    className="captcha-refresh"
                    onClick={loadCaptcha}
                    disabled={captcha.loading}
                    title="Get new question"
                  >
                    🔄
                  </button>
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="status-message success">Thank you! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="status-message error">Sorry, there was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
