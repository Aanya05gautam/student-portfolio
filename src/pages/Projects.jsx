export default function Projects() {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="border p-5 rounded-lg shadow">
          <h3 className="font-semibold text-xl mb-2">Mini Website</h3>
          <p className="text-gray-600">
            A 2-page responsive website built with React, Vite & Tailwind CSS.
          </p>
        </div>

        <div className="border p-5 rounded-lg shadow">
          <h3 className="font-semibold text-xl mb-2">ML Prediction App</h3>
          <p className="text-gray-600">
            Machine learning based cardiovascular risk prediction project.
          </p>
        </div>
      </div>
    </div>
  );
}
