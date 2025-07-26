import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  Calendar,
  DollarSign,
  Zap,
  Instagram,
  Youtube,
  Twitter,
  Star,
  TrendingUp,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Play,
  Mail,
  Bell,
  Globe,
  AlertCircle,
} from "lucide-react";

const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  // Mock Formspree URL for demo
  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;
  const FORMSPREE_URL1 = import.meta.env.VITE_FORMSPREE_URL1;
  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (email.length < 3) return "Email is too short";
    if (!email.includes("@")) return "Please include '@' in your email";
    if (!email.includes(".")) return "Please include a valid domain";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Don't validate while typing - only clear existing errors
  };

  const handleEmailFocus = () => {
    setEmailError(""); // Clear error when user focuses back
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission and validation

    const error = validateEmail(email);

    if (error) {
      setEmailError(error);
      setTouched(true);
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      // First submission
      const res1 = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      // Second submission
      const res2 = await fetch(FORMSPREE_URL1, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      // Check if both succeeded
      if (res1.ok && res2.ok) {
        setIsSubmitted(true);
        setEmail("");
        setTouched(false);
        setEmailError("");
      } else {
        const data1 = await res1.json();
        const data2 = await res2.json();
        const msg =
          data1?.errors?.[0]?.message ||
          data2?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        setEmailError(msg);
      }
    } catch (error) {
      setEmailError("Something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/60 rounded-2xl p-8 text-center shadow-lg backdrop-blur-sm">
        <div className="relative">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
          <div className="absolute inset-0 w-16 h-16 mx-auto bg-green-500/20 rounded-full animate-ping"></div>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">You're In!</h3>
        <p className="text-green-700/80 font-medium">
          We'll notify you when Crelyzor launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto" noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <div className="relative group">
            <Mail
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 z-10 ${
                emailError
                  ? "text-red-400"
                  : "text-gray-400 group-focus-within:text-purple-500"
              }`}
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              placeholder="Enter your email"
              className={`w-full pl-11 pr-12 py-4 rounded-xl border-2 transition-all duration-300 text-gray-800 placeholder-gray-500 bg-white/90 backdrop-blur-sm relative z-10 ${
                emailError
                  ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100/60 shadow-red-100/50"
                  : "border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100/60 hover:border-purple-300"
              } shadow-sm hover:shadow-md focus:shadow-lg focus:outline-none`}
            />

            {emailError && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20">
                <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
              </div>
            )}
          </div>

          {/* Custom Error Display - Absolute positioned to not affect layout */}
          <div
            className={`absolute top-full left-0 right-0 z-30 transition-all duration-500 ease-out ${
              emailError
                ? "opacity-100 translate-y-2"
                : "opacity-0 translate-y-0 pointer-events-none"
            }`}
          >
            <div className="relative mt-1">
              <div className="absolute -top-2 left-6 w-4 h-4 bg-red-50 border-l border-t border-red-200/60 transform rotate-45"></div>
              <div className="bg-gradient-to-r from-red-50 via-red-50 to-rose-50 border border-red-200/60 rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 text-sm font-medium leading-relaxed">
                      {emailError}
                    </p>
                    <p className="text-red-600/70 text-xs mt-1">
                      Please check your email format
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-4 bg-gradient-to-r from-black to-gray-700 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[140px] backdrop-blur-sm"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="text-sm">Joining...</span>
            </div>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

// Enhanced FeatureCard component
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <div
    className="group relative bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const EnhancedCreatorLanding = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: BarChart3,
      title: "Unified Analytics Dashboard",
      description:
        "Track performance across Instagram, YouTube, TikTok & more with advanced insights and real-time metrics",
    },
    {
      icon: Users,
      title: "Team Collaboration Hub",
      description:
        "Seamlessly work with managers, editors & assistants using role-based permissions and workflow automation",
    },
    {
      icon: Calendar,
      title: "AI-Powered Scheduling",
      description:
        "Plan content strategically, track deadlines, and optimize posting times with intelligent recommendations",
    },
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description:
        "Manage brand partnerships, contracts, and multiple revenue streams with automated tracking and reporting",
    },
    {
      icon: Zap,
      title: "Cross-Platform Publishing",
      description:
        "Create once, distribute everywhere. Schedule content across all platforms with custom formatting",
    },
    {
      icon: TrendingUp,
      title: "Growth Intelligence",
      description:
        "Get AI-driven insights and actionable recommendations to scale your creator business exponentially",
    },
  ];

  const platforms = [
    {
      icon: Instagram,
      name: "Instagram",
      color: "from-pink-500 to-purple-500",
    },
    { icon: Youtube, name: "YouTube", color: "from-red-500 to-red-600" },
    { icon: Twitter, name: "X (Twitter)", color: "from-gray-800 to-gray-900" },
    { icon: Smartphone, name: "More...", color: "from-pink-600 to-red-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative">
      <FloatingParticles />

      {/* Navigation */}
      <nav className="relative z-50 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Crelyzor
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 animate-pulse">
                  <Star className="w-4 h-4 text-purple-600 mr-2 animate-spin" />
                  <span className="text-sm font-semibold text-purple-700">
                    🚀 Launching Soon
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black leading-none">
                  Your Creator
                  <span className="block text-transparent bg-gradient-to-r from-black via-gray-600 to-gray-800 bg-clip-text animate-pulse">
                    Empire Hub
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform chaos into clarity. One powerful dashboard to rule
                  your entire creator business across all platforms.
                </p>
              </div>

              <div className="space-y-6">
                <WaitingListForm />

                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free to join</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Early access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Exclusive perks</span>
                  </div>
                </div>
              </div>
              <div className="my-4"></div>
              <div className="flex flex-wrap gap-2 sm:gap-3 animate-bounce">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center`}
                    >
                      <platform.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      {platform.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="w-full h-96 bg-gradient-to-br from-black via-gray-600 to-gray-800 rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
                  <div className="text-center space-y-4">
                    <Play className="w-16 h-16 text-gray-600 mx-auto" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Dashboard Preview
                    </h3>
                    <p className="text-gray-600">Coming Soon...</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Sparkles className="w-8 h-8 text-yellow-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800">
              Everything Creators Need
              <span className="block text-transparent bg-gradient-to-r from-black to-gray-300 bg-clip-text">
                In One Place
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop juggling 15+ different tools. Crelyzor brings your entire
              creator ecosystem together with AI-powered automation and
              insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-black via-gray-600 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to Transform Your
              <span className="block text-yellow-300">Creator Business?</span>
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed">
              Join thousands of creators who are already on the waitlist. Be the
              first to experience the future of creator management.
            </p>
            <div className="max-w-md mx-auto">
              <WaitingListForm />
            </div>
            <div className="flex items-center justify-center space-x-8 text-purple-200 text-sm">
              <span>✨ No spam, ever</span>
              <span>🚀 Early access guaranteed</span>
              <span>💎 Exclusive founder perks</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2025 Crelyzor. All rights reserved. Built for creators, by
              creators.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EnhancedCreatorLanding;
