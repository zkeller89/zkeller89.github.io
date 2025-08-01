// Type definitions for the personal website

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  skills: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
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
