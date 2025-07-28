import React from "react";

export default function DemoPage() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center">
        Interactive System Demo
      </h1>
      
      <section className="bg-blue-50 rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">NYC Hotel Emergency Beacon System</h2>
        <p className="text-blue-900 mb-6">
          Experience how our emergency beacon system works in real-world hotel scenarios. 
          This interactive demo shows the complete workflow from panic button activation to emergency response.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* System Overview */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">System Components</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <span className="text-blue-900">Wearable Panic Buttons</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                <span className="text-blue-900">Room Beacons</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <span className="text-blue-900">Gateway Devices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                <span className="text-blue-900">Monitoring Software</span>
              </div>
            </div>
          </div>
          
          {/* Demo Scenario */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Demo Scenario</h3>
            <p className="text-blue-800 mb-4">
              Housekeeping staff member activates panic button in Room 312
            </p>
            <div className="space-y-2 text-sm text-blue-700">
              <div>✓ Instant alert sent to security</div>
              <div>✓ Precise location identified</div>
              <div>✓ Response team dispatched</div>
              <div>✓ Incident logged for compliance</div>
            </div>
          </div>
        </div>
        
        {/* Interactive Demo Section */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Try the Demo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-red-600 text-white font-semibold rounded-lg px-6 py-4 shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all">
              🚨 Simulate Panic Button
            </button>
            <button className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all">
              📍 View Location Tracking
            </button>
            <button className="bg-green-600 text-white font-semibold rounded-lg px-6 py-4 shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all">
              📊 See Compliance Report
            </button>
          </div>
        </div>
        
        {/* System Diagram */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">System Architecture</h3>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl h-64 bg-blue-100 rounded-lg flex items-center justify-center text-blue-400 border-2 border-blue-200">
              <div className="text-center">
                <span className="text-lg block mb-2">[Interactive System Diagram]</span>
                <span className="text-sm">Real-time visualization of beacon network</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Compliance Benefits</h3>
            <ul className="space-y-2 text-blue-800">
              <li>✓ Meets NYC Safe Hotels Act requirements</li>
              <li>✓ Audit-ready documentation</li>
              <li>✓ Training verification system</li>
              <li>✓ Incident reporting tools</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Staff Safety</h3>
            <ul className="space-y-2 text-blue-800">
              <li>✓ Instant emergency alerts</li>
              <li>✓ Precise location tracking</li>
              <li>✓ Rapid response capability</li>
              <li>✓ 24/7 monitoring</li>
            </ul>
          </div>
        </div>
        
        {/* Next Steps */}
        <div className="bg-blue-700 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6">Schedule a personalized consultation to discuss your hotel's specific needs</p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-semibold rounded-lg px-6 py-3 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              Schedule Consultation
            </a>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}