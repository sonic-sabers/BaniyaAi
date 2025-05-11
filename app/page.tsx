import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="animate-float mb-6">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <lottie-player
                    src="https://assets7.lottiefiles.com/packages/lf20_xvrofzfk.json"
                    background="transparent"
                    speed="1"
                    style="width: 320px; height: 120px;"
                    loop
                    autoplay
                  ></lottie-player>
                `,
              }}
            />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
            AI-Powered Financial Intelligence for Everyone
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-blue-100 leading-relaxed animate-fade-in">
            Your personal finance advisor that works like a trusted "Baniya" —
            smart, frugal, and always watching your bottom line.
          </p>

          <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-glow max-w-4xl w-full border border-blue-500/20 transform transition-all duration-500 hover:shadow-glow-intense animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="w-full md:w-1/2">
                <div className="relative h-64 w-full rounded-lg overflow-hidden border border-blue-500/30 bg-slate-900/50 backdrop-blur-sm">
                  <canvas id="financeChart" className="w-full h-full"></canvas>
                  <div className="absolute top-2 left-2 flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-blue-300">Live Data</span>
                  </div>
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button className="px-2 py-1 text-xs bg-blue-600/50 hover:bg-blue-600/80 text-white rounded transition-colors">
                      1D
                    </button>
                    <button className="px-2 py-1 text-xs bg-blue-600/30 hover:bg-blue-600/80 text-white rounded transition-colors">
                      1W
                    </button>
                    <button className="px-2 py-1 text-xs bg-blue-600/30 hover:bg-blue-600/80 text-white rounded transition-colors">
                      1M
                    </button>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 text-sm font-medium text-green-400">
                    +5.8%
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-blue-300">
                    Updated just now
                  </div>
                </div>
                <Script
                  src="https://cdn.jsdelivr.net/npm/chart.js"
                  strategy="beforeInteractive"
                />
                <Script id="init-finance-chart">
                  {`
                    window.addEventListener('load', function() {
                      setTimeout(() => {
                        if (typeof Chart !== 'undefined') {
                          const ctx = document.getElementById('financeChart');
                          if (ctx) {
                            // Generate some sample data
                            const generateData = () => {
                              const baseValue = 10000;
                              const volatility = 0.03;
                              const uptrend = 0.002;
                              let lastValue = baseValue;
                              return Array.from({ length: 30 }, (_, i) => {
                                const change = lastValue * (Math.random() * volatility * 2 - volatility + uptrend);
                                lastValue = lastValue + change;
                                return lastValue;
                              });
                            };
                            
                            const labels = Array.from({ length: 30 }, (_, i) => \`\${i+1}\`);
                            const data = generateData();
                            
                            // Create gradient for area under the line
                            const chartCtx = ctx.getContext('2d');
                            if (chartCtx) {
                              const gradient = chartCtx.createLinearGradient(0, 0, 0, 300);
                              gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
                              gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                              
                              new Chart(ctx, {
                                type: 'line',
                                data: {
                                  labels: labels,
                                  datasets: [{
                                    label: 'Portfolio Value',
                                    data: data,
                                    borderColor: '#3b82f6',
                                    backgroundColor: gradient,
                                    borderWidth: 2,
                                    pointRadius: 0,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: '#3b82f6',
                                    pointHoverBorderColor: '#fff',
                                    pointHoverBorderWidth: 2,
                                    tension: 0.4,
                                    fill: true
                                  }]
                                },
                                options: {
                                  responsive: true,
                                  maintainAspectRatio: false,
                                  interaction: {
                                    intersect: false,
                                    mode: 'index'
                                  },
                                  scales: {
                                    y: {
                                      grid: {
                                        color: 'rgba(255, 255, 255, 0.1)'
                                      },
                                      ticks: {
                                        callback: function(value) {
                                          return '$' + value.toLocaleString();
                                        },
                                        color: 'rgba(255, 255, 255, 0.7)'
                                      }
                                    },
                                    x: {
                                      grid: {
                                        display: false
                                      },
                                      ticks: {
                                        display: false
                                      }
                                    }
                                  },
                                  plugins: {
                                    legend: {
                                      display: false
                                    },
                                    tooltip: {
                                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                      titleColor: '#fff',
                                      bodyColor: '#fff',
                                      borderColor: 'rgba(59, 130, 246, 0.5)',
                                      borderWidth: 1,
                                      padding: 10,
                                      displayColors: false,
                                      callbacks: {
                                        label: function(context) {
                                          return '$' + context.raw.toLocaleString();
                                        }
                                      }
                                    }
                                  }
                                }
                              });
                            }
                          }
                        }
                      }, 1000); // Small delay to ensure everything is loaded
                    });
                  `}
                </Script>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-gray-300 text-lg leading-relaxed">
                  At BaniyaAI, we're building an AI-powered platform that brings
                  real-time financial insights, savings recommendations, and
                  intelligent monitoring to individuals and businesses — without
                  the complexity or cost of traditional financial tools.
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              We believe trustworthy, intelligent financial guidance should be
              available to everyone — not just large enterprises or
              high-net-worth individuals. Our mission is to democratize
              financial intelligence.
            </p>
          </div>

          <button className="mt-10 relative group overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 animate-fade-in-up">
            <span className="relative z-10">Join our waitlist</span>
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-montserrat bg-gradient-to-r from-blue-300 to-indigo-400 text-transparent bg-clip-text">
            Our Vision
          </h2>
          <div className="max-w-4xl mx-auto bg-slate-900/50 p-8 rounded-2xl border border-blue-500/20 shadow-glow transform transition-all duration-500 hover:shadow-glow-intense">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <p className="text-lg text-blue-100 mb-6 leading-relaxed text-center">
                We believe trustworthy, intelligent financial guidance should be
                available to everyone — not just large enterprises or
                high-net-worth individuals. Our mission is to democratize
                financial intelligence by combining the power of AI with deep
                financial logic and user-friendly design.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p className="text-lg text-blue-100 text-center leading-relaxed">
                  We're making proactive, real-time finance the new normal — so
                  users can save more, avoid risks, and focus on what matters.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="relative group overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                <span className="relative z-10 flex items-center">
                  Learn more about our approach
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-montserrat bg-gradient-to-r from-blue-300 to-indigo-400 text-transparent bg-clip-text">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* For Individuals */}
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-glow max-w-4xl w-full border border-blue-500/20 transform transition-all duration-500 hover:shadow-glow-intense hover:-translate-y-2 relative overflow-hidden">
              {/* Background SVG Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#4F46E5"
                    d="M45.3,-51.2C58.3,-42.5,68.5,-27.1,71.3,-10.7C74.2,5.7,69.7,23.1,59.4,35.9C49.1,48.7,33,56.9,15.9,61.7C-1.1,66.4,-19.2,67.7,-35.3,61.5C-51.4,55.3,-65.6,41.6,-70.3,25.5C-75,9.5,-70.3,-8.9,-61.5,-23.4C-52.7,-37.9,-39.9,-48.5,-26.2,-56.8C-12.5,-65.1,2.1,-71.1,15.8,-68.5C29.5,-65.9,32.3,-59.9,45.3,-51.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <div className="mb-6 relative z-10">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <lottie-player
                        src="https://assets3.lottiefiles.com/packages/lf20_jegbmnh4.json"
                        background="transparent"
                        speed="1"
                        style="width: 120px; height: 120px;"
                        loop
                        autoplay
                      ></lottie-player>
                    `,
                  }}
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 mr-3 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L12 16L15 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-white">
                    For Individuals
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed pl-11">
                  We act like your personal money assistant — helping you
                  understand how you earn, spend, save, and invest. Think of us
                  as a proactive advisor that learns from your financial
                  behavior and gives personalized, daily suggestions to help you
                  grow your wealth and avoid costly mistakes — without needing a
                  financial planner.
                </p>
                <div className="mt-6 pl-11">
                  <div className="flex items-center text-blue-300 text-sm">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Personalized financial insights</span>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm mt-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Daily savings recommendations</span>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm mt-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Intelligent spending analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* For Businesses */}
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20 shadow-glow transform transition-all duration-500 hover:shadow-glow-intense hover:-translate-y-2 relative overflow-hidden">
              {/* Background SVG Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#4F46E5"
                    d="M47.7,-57.2C59.5,-45.7,65.5,-28.7,68.1,-11.1C70.7,6.4,69.8,24.5,61.4,38.9C53,53.3,37.1,64,19.9,69.7C2.7,75.4,-15.9,76.1,-32.9,70.3C-49.9,64.4,-65.2,52,-73.2,35.3C-81.1,18.6,-81.7,-2.3,-75.1,-20.1C-68.5,-37.9,-54.7,-52.5,-39.4,-62.5C-24.1,-72.5,-7.2,-77.9,8.1,-76.9C23.5,-75.9,35.9,-68.6,47.7,-57.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <div className="mb-6 relative z-10">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <lottie-player
                        src="https://assets8.lottiefiles.com/packages/lf20_yvzouxbf.json"
                        background="transparent"
                        speed="1"
                        style="width: 120px; height: 120px;"
                        loop
                        autoplay
                      ></lottie-player>
                    `,
                  }}
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 mr-3 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8.5H14.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 16.5H8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 16.5H14.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 12.03V16.11C22 19.62 22 19.62 18.56 19.62H5.44C2 19.62 2 19.62 2 16.11V7.89C2 4.38 2 4.38 5.44 4.38H14.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 9.5V3.5L22 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 3.5L18 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-white">
                    For Businesses
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed pl-11">
                  Imagine catching financial anomalies, compliance issues, or
                  risky patterns the moment they happen — not at the end of a
                  quarter. BaniyaAI continuously monitors your financial data,
                  automates routine audit tasks, and flags issues in real time.
                  What was once only possible with Big Four accounting firms is
                  now accessible to businesses of any size.
                </p>
                <div className="mt-6 pl-11">
                  <div className="flex items-center text-blue-300 text-sm">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Real-time anomaly detection</span>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm mt-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Automated compliance monitoring</span>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm mt-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Enterprise-grade insights for all</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-800/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-montserrat bg-gradient-to-r from-blue-300 to-indigo-400 text-transparent bg-clip-text">
            Our Team
          </h2>
          <p className="text-xl text-center text-blue-100 mb-12 max-w-3xl mx-auto">
            We bring together deep experience in AI, finance, and product.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
            {/* Team Member 1 - CEO */}
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20 max-w-xs w-full text-center transform transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 shadow-glow">
                <img
                  src="/images/Sanyam.jpeg"
                  alt="Sanyam Jain"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Sanyam Jain
              </h3>
              <p className="text-blue-300 mb-4">Co-Founder & CEO</p>
              <p className="text-gray-300 text-sm mb-4">
                ex-Writesonic, Unify, Buildspace
              </p>
              <a
                href="https://www.linkedin.com/in/sanyam-jain-a5a15a220/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Team Member 2 - CTO */}
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20 max-w-xs w-full text-center transform transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 shadow-glow">
                <img
                  src="/images/Ashish.jpeg"
                  alt="Ashish Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Ashish Gupta
              </h3>
              <p className="text-blue-300 mb-4">Co-Founder & CTO</p>
              <p className="text-gray-300 text-sm mb-4">
                Software Engineer | Explorer
              </p>
              <a
                href="https://www.linkedin.com/in/ashish-gupta-2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
