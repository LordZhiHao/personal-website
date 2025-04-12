// API configuration for the application
// Change this value based on your environment (development, production, etc.)

// Base URL for API endpoints
export const API_URL = "https://personal-chatbot-4vai.onrender.com";

// Specific endpoint paths
export const ENDPOINTS = {
  CHAT: "/chat",
  UPLOAD_AUDIO: "/upload-audio",
  END_CONVERSATION: "/end-conversation",
  STATUS: "/status",
};

// Helper function to get full endpoint URL
export const getEndpointUrl = (endpoint) => `${API_URL}${endpoint}`;
