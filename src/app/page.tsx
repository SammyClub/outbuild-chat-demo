"use client";
import Chat from "@/components/sammy-chat/chat";
import { useState } from "react";
import { FormEvent } from "react";
import Image from "next/image";
import "./outbuild.css";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 z-10">
        <Chat />
      </div>
      <div className="outbuild-bg">
        <div className="login-card">
          <div className="flex justify-center mb-8">
            <Image src="/images/outbuild-logo.svg" alt="Outbuild Logo" width={120} height={40} className="h-10" />
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="input-field"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="input-field"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={!isFormValid}
                className="submit-button"
              >
                Sign in
              </button>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
            </div>

            <div className="signup-text">
              <span>Don&apos;t have an account yet? <a href="/signup" className="signup-link">Sign up</a></span>
            </div>

            <div className="divider">
              <span>Or</span>
            </div>

            <div className="procore-btn">
              <div className="procore-icon">
                <Image
                  src="/images/procore-icon.svg"
                  alt="Procore icon"
                  width={16}
                  height={17}
                />
              </div>
              <span>Sign in with PROCORE</span>
            </div>
          </form>
        </div>

        <div className="version-text">
          v 2.61.17
        </div>
      </div>
    </div>
  );
}


