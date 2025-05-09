export default function CompliancePage() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">NYC Hotel Safety Compliance</h1>
      <section className="bg-blue-50 rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">NYC Safe Hotels Act: Key Requirements</h2>
        <ul className="list-disc list-inside text-blue-900 space-y-2">
          <li><strong>Panic Button Mandate:</strong> Hotels with 50+ rooms must provide wearable panic buttons to all staff whose duties involve entering guest rooms. <span className="text-blue-800 text-xs">(NYC Admin Code § 20-561, effective May 3, 2025)</span></li>
          <li><strong>Immediate On-Scene Assistance:</strong> Panic button must alert on-site security or designated personnel for rapid response.</li>
          <li><strong>Location Tracking:</strong> System must provide precise location of the employee in distress.</li>
          <li><strong>Training:</strong> Hotels must provide human trafficking recognition training to all staff within 60 days of employment.</li>
          <li><strong>Documentation:</strong> Maintain compliance records, training logs, and system test results for audits.</li>
        </ul>
        <p className="mt-4 text-blue-800 text-sm">Source: <a href="https://www.nyc.gov/assets/dca/downloads/pdf/about/Panic-Button-Law.pdf" target="_blank" rel="noopener noreferrer" className="underline">NYC Safe Hotels Act (2024)</a></p>
      </section>
      <section className="bg-white rounded-xl p-8 shadow-md mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Deadlines & Penalties</h2>
        <ul className="list-disc list-inside text-blue-900 space-y-2">
          <li><strong>Compliance Deadline:</strong> May 3, 2025</li>
          <li><strong>Penalties:</strong> Fines up to $1,000 per day for non-compliance; risk of license suspension for repeated violations.</li>
          <li><strong>Audit Risk:</strong> City inspectors may request proof of compliance at any time.</li>
        </ul>
      </section>
      <section className="bg-blue-50 rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Compliance Checklist</h2>
        <ul className="list-disc list-inside text-blue-900 space-y-2">
          <li>Panic buttons deployed to all qualifying staff</li>
          <li>System tested and operational in all guest areas</li>
          <li>Location tracking enabled and accurate</li>
          <li>Staff trained on device use and emergency protocols</li>
          <li>Human trafficking training completed and documented</li>
          <li>Compliance records and test logs maintained</li>
        </ul>
      </section>
      <section className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">NYC Hotel Worker Safety: Why It Matters</h2>
        <ul className="list-disc list-inside text-blue-900 space-y-2 mb-2">
          <li>Over 58% of NYC hotel workers report experiencing harassment or threats on the job <span className="text-blue-800 text-xs">(NY Hotel Trades Council, 2023)</span></li>
          <li>Hotels with panic button systems see a 40% reduction in reported incidents <span className="text-blue-800 text-xs">(NYC Hospitality Alliance, 2022)</span></li>
        </ul>
        <p className="text-blue-800 text-sm">Protect your staff, avoid fines, and demonstrate your commitment to safety and compliance.</p>
      </section>
    </main>
  );
} 