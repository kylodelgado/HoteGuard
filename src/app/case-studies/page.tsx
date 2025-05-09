export default function CaseStudiesPage() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">Case Studies & Testimonials</h1>
      <section className="bg-blue-50 rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">NYC Hotel Success Stories</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Midtown Business Hotel</h3>
          <ul className="list-disc list-inside text-blue-900 mb-2">
            <li><strong>Challenge:</strong> Needed to comply with panic button law before city audit</li>
            <li><strong>Solution:</strong> Deployed 120 wearable buttons, 200 room beacons, 8 gateways</li>
            <li><strong>Outcome:</strong> Passed compliance audit, staff reported 50% increase in perceived safety, zero fines</li>
          </ul>
          <blockquote className="italic text-blue-800 border-l-4 border-blue-400 pl-4 mb-2">&quot;The system was easy to install and our team feels much safer. We passed our audit with no issues.&quot;</blockquote>
          <p className="text-blue-900 font-semibold">– General Manager, Midtown Business Hotel</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Boutique Hotel, Lower Manhattan</h3>
          <ul className="list-disc list-inside text-blue-900 mb-2">
            <li><strong>Challenge:</strong> Staff concerns about guest interactions and after-hours safety</li>
            <li><strong>Solution:</strong> Full system install, staff training, compliance documentation</li>
            <li><strong>Outcome:</strong> 40% reduction in reported incidents, positive guest feedback, improved staff retention</li>
          </ul>
          <blockquote className="italic text-blue-800 border-l-4 border-blue-400 pl-4 mb-2">&quot;We saw an immediate improvement in staff confidence and guest satisfaction.&quot;</blockquote>
          <p className="text-blue-900 font-semibold">– Operations Director, Boutique Hotel</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Uptown Luxury Hotel</h3>
          <ul className="list-disc list-inside text-blue-900 mb-2">
            <li><strong>Challenge:</strong> Needed to demonstrate ROI to ownership group</li>
            <li><strong>Solution:</strong> ROI calculator used to compare compliance costs vs. potential fines</li>
            <li><strong>Outcome:</strong> Projected savings of $36,000/year by avoiding non-compliance penalties</li>
          </ul>
          <blockquote className="italic text-blue-800 border-l-4 border-blue-400 pl-4 mb-2">&quot;The ROI was clear. Compliance is now a selling point for our property.&quot;</blockquote>
          <p className="text-blue-900 font-semibold">– Director of Finance, Uptown Luxury Hotel</p>
        </div>
      </section>
      <section className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Client Testimonials</h2>
        <blockquote className="italic text-blue-800 border-l-4 border-blue-400 pl-4 mb-2">&quot;The system was easy to install and our staff feel much safer. Highly recommended for NYC hotels!&quot;</blockquote>
        <p className="text-blue-900 font-semibold">– Operations Director, NYC Boutique Hotel</p>
        <blockquote className="italic text-blue-800 border-l-4 border-blue-400 pl-4 mb-2 mt-4">&quot;We appreciated the detailed compliance documentation and support throughout the process.&quot;</blockquote>
        <p className="text-blue-900 font-semibold">– Compliance Manager, Midtown Hotel</p>
      </section>
    </main>
  );
} 