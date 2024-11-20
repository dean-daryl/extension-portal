import React from 'react';
import { X, Github, Chrome } from 'lucide-react';



export function AuthModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl p-8 w-full max-w-md relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">
          {type === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {type === 'register' && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
            {type === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-500 transition-colors">
            <Chrome className="w-5 h-5" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-500 transition-colors">
            <Github className="w-5 h-5" />
            GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-gray-400 text-sm">
          {type === 'login' ? (
            <>
              Don't have an account?{' '}
              <button onClick={onClose} className="text-purple-400 hover:text-purple-300">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={onClose} className="text-purple-400 hover:text-purple-300">
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}