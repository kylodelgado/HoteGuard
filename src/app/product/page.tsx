export default function ProductPage() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">System Components & Features</h1>
      <section className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Complete Compliance Solution</h2>
        <p className="text-blue-900 mb-4">Our system is engineered to meet and exceed all NYC Safe Hotels Act requirements. Each component is designed for reliability, ease of use, and seamless integration into your hotel's operations.</p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Wearable Bluetooth Panic Buttons</h3>
            <ul className="list-disc list-inside text-blue-900 mb-4">
              <li>Discreet, lightweight, and water-resistant (IP67)</li>
              <li>6+ month battery life, rechargeable</li>
              <li>One-press emergency alert with unique staff ID</li>
              <li>Continuous Bluetooth broadcasting for real-time location</li>
              <li>Meets NYC panic button mandate <span className="text-blue-800 text-xs">(§ 20-561)</span></li>
            </ul>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Room Beacons</h3>
            <ul className="list-disc list-inside text-blue-900 mb-4">
              <li>Installed in every guest room for precise location mapping</li>
              <li>Battery-powered (12+ month lifespan)</li>
              <li>Easy adhesive mounting, low maintenance</li>
              <li>Unique identifier for each room</li>
            </ul>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Gateway Devices</h3>
            <ul className="list-disc list-inside text-blue-900 mb-4">
              <li>Receives signals from buttons/beacons</li>
              <li>Wi-Fi/Ethernet connectivity, PoE support</li>
              <li>Automatic failover and redundancy</li>
              <li>Secure, encrypted data relay to monitoring system</li>
            </ul>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Monitoring Software</h3>
            <ul className="list-disc list-inside text-blue-900 mb-4">
              <li>Windows-based, runs in background</li>
              <li>Immediate alert display with staff name and room number</li>
              <li>Real-time location mapping and historical reporting</li>
              <li>Compliance documentation and audit logs</li>
              <li>Integration with hotel management systems</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center">
            {/* System Diagram Placeholder */}
            <div className="w-72 h-56 bg-blue-100 rounded-lg flex items-center justify-center text-blue-400 border-2 border-blue-200 mb-4">
              <span className="text-lg">[System Diagram SVG Coming Soon]</span>
            </div>
            <p className="text-blue-800 text-sm text-center">Diagram: Staff button → Room beacon → Gateway → Monitoring software</p>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Technical Specifications</h2>
        <ul className="list-disc list-inside text-blue-900 space-y-2 mb-4">
          <li><strong>Wearable Buttons:</strong> Bluetooth 5.0 LE, CR2032 battery, IP67, 50m range, 1.5" diameter</li>
          <li><strong>Room Beacons:</strong> Bluetooth 5.0 LE, AA battery, 20-30m range, 2" x 2" x 0.5"</li>
          <li><strong>Gateway:</strong> Wi-Fi/Ethernet, PoE, 100m coverage, 500+ device capacity</li>
          <li><strong>Software:</strong> Windows 10/11, low resource, auto-start, encrypted cloud backend (AWS)</li>
        </ul>
        <p className="text-blue-800 text-sm">All components are tested and certified for NYC hotel compliance. Full documentation available upon request.</p>
      </section>
    </main>
  );
} 