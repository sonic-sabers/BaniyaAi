"use client";

export default function LayoutStyles() {
  return (
    <style jsx global>{`
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-gradient {
        background-size: 200% auto;
        animation: gradient 5s ease infinite;
      }

      .animate-fade-in {
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
      }

      .animate-fade-in-up {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 1s ease-out forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .shadow-glow {
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
      }

      .shadow-glow-intense {
        box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
      }

      #particles-js {
        width: 100%;
        height: 100%;
      }
    `}</style>
  );
}
