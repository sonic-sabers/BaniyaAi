import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_kcsr6fcp.json"
                  background="transparent"
                  speed="1"
                  style="width: 200px; height: 200px; margin: 0 auto;"
                  loop
                  autoplay
                ></lottie-player>
              `,
            }}
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-transparent bg-clip-text">
          404 - Page Not Found
        </h1>
        <p className="text-blue-100 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          <span>Return to Home</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}