// Type definitions for the personal website

export interface Profile {
  name: string;
  short_name: string;
  title: string;
  quick_bio: string;
  bio: string;
  email: string;
  location: string;
  skills: string[];
  social: {
    github: string;
    linkedin: string;
  };
}

export interface CaptchaResponse {
  question: string;
  session_id: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  captcha_answer: string;
}

export interface ApiResponse<T = any> {
  message?: string;
  error?: string;
  data?: T;
}
