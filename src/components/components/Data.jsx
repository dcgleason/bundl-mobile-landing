"use client"

import React, {useState} from 'react'

function FormFields({ setStats }) {
    const [employeeCount, setEmployeeCount] = useState(0);
    const [avgSalary, setAvgSalary] = useState(0);
    const [turnoverRate, setTurnoverRate] = useState(0);
  
    const updateStats = () => {
      const expectedTurnover = employeeCount * (turnoverRate / 100);
      const costToReplace = avgSalary * 0.33;
      const dollarsSaved = expectedTurnover * costToReplace * 0.31;
  
      const revenueGenerated = avgSalary * 3;
      const productivityBoost = employeeCount * revenueGenerated * 0.01;
  
      const absenteeismCost = revenueGenerated * 0.032;
      const reducedAbsenteeism = employeeCount * absenteeismCost * 0.41;
  
      setStats([
        { name: "$ Saved from Increased Employee Retention", stat: `$${dollarsSaved.toFixed(2)}` },
        { name: '$ From Increased Employee Productivity', stat: `$${productivityBoost.toFixed(2)}` },
        { name: '$ From Decreased Employee Absenteeism', stat: `$${reducedAbsenteeism.toFixed(2)}` },
      ]);
    };
  
    return (
      <>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Employee Count */}
          <div className="sm:col-span-2">
            <label htmlFor="employee-count" className="block text-sm font-medium leading-6 text-white">
              Employee Headcount
            </label>
            <div className="mt-2">
              <input
                type="number"
                placeholder='100'
                name="employee-count"
                id="employee-count"
                onChange={(e) => {
                  setEmployeeCount(Number(e.target.value));
                  updateStats();
                }}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

              />
            </div>
          </div>
          {/* Average Salary */}
          <div className="sm:col-span-2">
            <label htmlFor="avg-salary" className="block text-sm font-medium leading-6 text-white">
              Average Employee Salary
            </label>
            <div className="mt-2">
              <input
                type="number"
                placeholder='$60,000'
                name="avg-salary"
                id="avg-salary"
                onChange={(e) => {
                  setAvgSalary(Number(e.target.value));
                  updateStats();
                }}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

                />
            </div>
          </div>
          {/* Turnover Rate */}
          <div className="sm:col-span-2">
            <label htmlFor="turnover-rate" className="block text-sm font-medium leading-6 text-white">
              Average Employee Turnover Rate
            </label>
            <div className="mt-2">
              <input
                type="number"
                placeholder='15%'
                name="turnover-rate"
                id="turnover-rate"
                onChange={(e) => {
                  setTurnoverRate(Number(e.target.value));
                  updateStats();
                }}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

                />
            </div>
          </div>
        </div>
      </>
    );
  }
  
 export default function Data() {
    const [stats, setStats] = useState([]);
  
    return (
      <>
      <h3>ROI Calculator</h3>
        <FormFields setStats={setStats} />
        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
              </div>
            ))}
          </dl>
        </div>
      </>
    );
  }
  