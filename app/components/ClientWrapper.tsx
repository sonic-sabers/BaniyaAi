"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <Script
          id="particles-js"
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        />
        <Script id="chart-js" src="https://cdn.jsdelivr.net/npm/chart.js" />
        <Script
          id="lottie-player"
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-y-scroll`}
      >
        <div className="particles-container absolute inset-0 z-0 opacity-30">
          <div id="particles-js" className="w-full h-full"></div>
          <Script id="init-particles">
            {`
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof particlesJS !== 'undefined') {
                  particlesJS('particles-js', {
                    "particles": {
                      "number": {
                        "value": 80,
                        "density": {
                          "enable": true,
                          "value_area": 1000
                        }
                      },
                      "color": {
                        "value": ["#3b82f6", "#6366f1", "#8b5cf6"]
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 0.5,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 2,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#3b82f6",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 1.5,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": true,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "grab"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 140,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "push": {
                          "particles_nb": 4
                        }
                      }
                    },
                    "retina_detect": true
                  });
                }
                if (typeof Chart !== 'undefined') {
                  const ctx = document.getElementById('financeChart');
                  if (ctx) {
                    new Chart(ctx, {
                      type: 'line',
                      data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Savings Growth',
                          data: [12, 19, 18, 25, 27, 35],
                          borderColor: '#3b82f6',
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          tension: 0.4,
                          fill: true
                        }]
                      },
                      options: {
                        responsive: true,
                        animation: {
                          duration: 2000,
                          easing: 'easeOutQuart'
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          },
                          x: {
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          }
                        },
                        plugins: {
                          legend: {
                            labels: {
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          }
                        }
                      }
                    });
                  }
                }
              });
            `}
          </Script>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-blue-500/20 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-center items-center">
            <div className="flex items-center">
              <div className="relative group">
                <h1 className="text-3xl font-bold font-montserrat bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text animate-gradient">
                  BaniyaAI
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
              <div className="ml-2 flex items-center">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300">
                  AI-Powered
                </span>
              </div>
            </div>

            <div className="md:hidden absolute right-4">
              {/* Mobile menu button placeholder */}
              <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900/90 border-t border-blue-500/20 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold font-montserrat bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
                  BaniyaAI
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Your personal finance advisor
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/ashish-gupta-2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Ashish Gupta LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sanyam-jain-a5a15a220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Sanyam Jain LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-blue-500/10 pt-8 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} BaniyaAI. All rights reserved.</p>
              <p className="mt-2">
                <span className="font-medium">Leadership:</span> Sanyam Jain
                (CEO) & Ashish Gupta (CTO)
              </p>
            </div>
          </div>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </>
  );
}
