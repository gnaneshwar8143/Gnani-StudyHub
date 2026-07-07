import axios from 'axios';

// Create a configured axios instance using your environment variable
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept every outgoing request and inject the authorization token dynamically
api.interceptors.request.use(
  (config) => {
    // Look for the auth token your login/register process saved to local storage
    const token = localStorage.getItem('token') || localStorage.getItem('accessToken'); 
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept responses to handle authorization failures (e.g. token expiration)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Determine if the request was to the auth endpoints
    const isAuthRequest = error.config && error.config.url && (
      error.config.url.includes('/auth/login') || 
      error.config.url.includes('/auth/signup')
    );

    // If the backend returns a 401 and it's not an auth request, the token is invalid or expired
    if (error.response && error.response.status === 401 && !isAuthRequest) {
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('token');
      // Reloading the page will force the App component to redirect to the guest login screen
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;