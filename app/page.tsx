import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden py-20"
      >
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
                    style="width: 120px; height: 120px;"
                    loop
                    autoplay
                  ></lottie-player>
                `
              }}
            />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
            AI-Powered Finance
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-blue-100 leading-relaxed animate-fade-in">
            Your personal finance advisor which can help you in personal
            finances and savings like a baniya
          </p>
          
          <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-glow max-w-4xl w-full border border-blue-500/20 transform transition-all duration-500 hover:shadow-glow-intense animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="w-full md:w-1/2">
                <canvas id="financeChart" width="400" height="250"></canvas>
                <Script id="init-chart">
                  {`
                    document.addEventListener('DOMContentLoaded', function() {
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
              <div className="w-full md:w-1/2">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Imagine if companies could spot fraud or compliance issues
                  the moment they happen—not months later. Our AI-powered
                  platform makes this a reality by continuously monitoring
                  financial data, automating tedious audit tasks, and flagging
                  problems instantly.
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              We give every business—not just the giants—access to the
              kind of smart, proactive auditing once reserved for the Big
              Four. With our solution, teams save time, cut costs, and
              gain real peace of mind.
            </p>
          </div>
          
          <button className="mt-10 relative group overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 animate-fade-in-up">
            <span className="relative z-10">Join Waitlist</span>
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
              <div className="w-full md:w-1/3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <lottie-player
                        src="https://assets5.lottiefiles.com/packages/lf20_rqcjjaia.json"
                        background="transparent"
                        speed="1"
                        style="width: 100%; height: 200px;"
                        loop
                        autoplay
                      ></lottie-player>
                    `
                  }}
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  At BaniyaAI, we're making trustworthy finance the new
                  normal. Our mission is to democratize financial
                  intelligence, bringing enterprise-grade financial monitoring
                  and advisory capabilities to businesses of all sizes.
                </p>
              </div>
            </div>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              We believe that financial clarity shouldn't be a luxury. By
              leveraging cutting-edge AI technology, we're creating a
              world where financial risks are identified before they
              become problems, where compliance is simplified, and where
              businesses can focus on growth rather than worry.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Our team combines expertise in finance, artificial
              intelligence, and user experience to deliver a solution
              that's not just powerful, but also intuitive and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-montserrat bg-gradient-to-r from-blue-300 to-indigo-400 text-transparent bg-clip-text">
            Connect With Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
            {/* Team Member 1 */}
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20 max-w-xs w-full text-center transform transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 shadow-glow">
                {/* Replace with your actual LinkedIn photo */}
                <img src="/team-member-1.jpg" alt="Team Member 1" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {/* Replace with your actual name */}
                Your Name Here
              </h3>
              <p className="text-blue-300 mb-4">
                Co-Founder & CEO
              </p>
              <a
                href="https://linkedin.com/in/your-profile"
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

            {/* Team Member 2 */}
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20 max-w-xs w-full text-center transform transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 shadow-glow">
                <img src="/team-member-2.jpg" alt="Team Member 2" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Team Member 2
              </h3>
              <p className="text-blue-300 mb-4">
                Co-Founder & CTO
              </p>
              <a
                href="https://linkedin.com/in/your-profile"
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