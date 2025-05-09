import React, { useState, useEffect } from 'react';

interface ROICalculatorProps {
  className?: string;
}

export default function ROICalculator({ className = '' }: ROICalculatorProps) {
  const [hotelSize, setHotelSize] = useState<number>(100);
  const [staffCount, setStaffCount] = useState<number>(20);
  
  // Constants based on NYC regulations and our pricing
  const DAILY_FINE = 1000; // $1,000 per day non-compliance fine
  const BUTTON_COST = 55; // Average cost per panic button
  const BEACON_COST = 30; // Average cost per room beacon
  const GATEWAY_COST = 400; // Cost per gateway (1 per floor typically)
  const FLOORS = Math.ceil(hotelSize / 20); // Assume 20 rooms per floor
  const INSTALLATION_BASE = 3500; // Base installation cost
  const INSTALLATION_PER_ROOM = 15; // Additional cost per room
  
  const [results, setResults] = useState({
    totalInvestment: 0,
    yearlyNonComplianceCost: 0,
    firstYearSavings: 0,
    roi: 0
  });

  useEffect(() => {
    // Calculate total investment
    const totalHardwareCost = (staffCount * BUTTON_COST) + (hotelSize * BEACON_COST) + (FLOORS * GATEWAY_COST);
    const installationCost = INSTALLATION_BASE + (hotelSize * INSTALLATION_PER_ROOM);
    const totalInvestment = totalHardwareCost + installationCost;

    // Calculate potential fines (assume 1 month of non-compliance)
    const yearlyNonComplianceCost = DAILY_FINE * 30; // One month of fines

    // Calculate first year savings
    const firstYearSavings = yearlyNonComplianceCost - totalInvestment;

    // Calculate ROI percentage
    const roi = (firstYearSavings / totalInvestment) * 100;

    setResults({
      totalInvestment: Math.round(totalInvestment),
      yearlyNonComplianceCost: Math.round(yearlyNonComplianceCost),
      firstYearSavings: Math.round(firstYearSavings),
      roi: Math.round(roi)
    });
  }, [hotelSize, staffCount]);

  return (
    <div className={`bg-white rounded-xl p-6 shadow-md ${className}`}>
      <h3 className="text-xl font-bold text-blue-900 mb-4">ROI Calculator</h3>
      <p className="text-blue-800 mb-4">Compare compliance investment vs potential penalties</p>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="hotelSize" className="block text-sm font-medium text-blue-900 mb-1">
            Number of Rooms
          </label>
          <input
            type="range"
            id="hotelSize"
            min="50"
            max="500"
            step="10"
            value={hotelSize}
            onChange={(e) => setHotelSize(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-blue-700">
            <span>50</span>
            <span className="font-medium">{hotelSize} rooms</span>
            <span>500</span>
          </div>
        </div>

        <div>
          <label htmlFor="staffCount" className="block text-sm font-medium text-blue-900 mb-1">
            Number of Staff Requiring Buttons
          </label>
          <input
            type="range"
            id="staffCount"
            min="5"
            max="100"
            step="5"
            value={staffCount}
            onChange={(e) => setStaffCount(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-blue-700">
            <span>5</span>
            <span className="font-medium">{staffCount} staff</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900">Total Investment</h4>
          <p className="text-2xl font-bold text-blue-700">${results.totalInvestment.toLocaleString()}</p>
          <p className="text-sm text-blue-600">One-time cost</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900">Non-Compliance Cost</h4>
          <p className="text-2xl font-bold text-red-700">${results.yearlyNonComplianceCost.toLocaleString()}</p>
          <p className="text-sm text-red-600">Potential monthly fines</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-green-900">First Year Savings</h4>
        <p className="text-2xl font-bold text-green-700">${results.firstYearSavings.toLocaleString()}</p>
        <p className="text-sm text-green-600">ROI: {results.roi}% (vs. one month of non-compliance)</p>
      </div>

      <p className="mt-4 text-sm text-blue-600">
        * Calculations based on NYC Safe Hotels Act fine structure and standard pricing. 
        Contact us for a detailed quote specific to your property.
      </p>
    </div>
  );
} 