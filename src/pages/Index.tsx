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
} from "lucide-react";

// Mock WaitingListForm component
const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center animate-pulse">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          You're In!
        </h3>
        <p className="text-green-600">
          We'll notify you when Crelyzor launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 placeholder-gray-500"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-gradient-to-r from-black to-gray-600 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
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

              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center`}
                    >
                      <platform.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">
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
