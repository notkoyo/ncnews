export default function ErrorPage() {
  return (
    <div className="grid place-items-center h-screen bg-gradient-to-br from-indigo-400 to-cyan-400">
      <div className="absolute top-32 left-96">
        <div className="absolute top-20 left-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-cloud">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
        </div>
        <div className="absolute top-28 left-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-cloud">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
        </div>
        <div className="absolute top-20 left-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-cloud">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
        </div>
      </div>
      <div className="text-center text-neutral">
        <h1 className="text-6xl font-bold">404 Error</h1>
        <h2 className="text-4xl font-medium">Page/URL not valid.</h2>
      </div>
    </div>
  );
}
