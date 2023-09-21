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
        { name: "$ Saved from Increased Employee Retention", stat: `$${Math.round(dollarsSaved).toLocaleString()}` },
        { name: '$ From Increased Employee Productivity', stat: `$${Math.round(productivityBoost).toLocaleString()}` },
        { name: '$ From Decreased Employee Absenteeism', stat: `$${Math.round(reducedAbsenteeism).toLocaleString()}` },
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

  export default function Data({ setStats, stats }) { // Receive setStats and stats as props
  
    const explanations = {
        "$ Saved from Increased Employee Retention": (
            <>
              {"Effective recognition can reduce turnover by 31%. This dollar figure is calculated as: Expected turnover (Employee Count x "}
              <a href="https://www.bls.gov/news.release/jolts.t18.htm"
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white underline">
                Turnover Rate
              </a>
              {") x Cost to replace ("}
              <a href="https://www.hcmi.co/employee-turnover-cost#:~:text=Employee%20turnover%20is%20expensive.,onboard%2C%20and%20train%20a%20replacement."
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white underline">
                Avg Salary x 33%
              </a> 
              {") x Reduction in turnover ("}
              <a href="https://www2.deloitte.com/us/en/insights/deloitte-review/issue-16/employee-engagement-strategies.html"
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white underline">
                31%
              </a>
              {")."}
            </>
          ),
    "$ From Increased Employee Productivity": <>
      {"Effective recognition can boost productivity up to 17%. This dollar figure is calculated as: Employee Count x "}
      <a href="https://www.cfo.com/news/metric-of-the-month-business-entity-revenue-per-employee/658369/#:~:text=Among%20the%20top,employee%20each%20year."
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-white underline">
        (Avg Salary x 3)
      </a> 
      {" x "}
      <a href="https://news.gallup.com/businessjournal/200108/damage-inflicted-poor-managers.aspx#:~:text=17%25%20higher%20productivity"
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-white underline">
        1% minimum boost
      </a>
      {" from higher engagement."}
    </>,
  "$ From Decreased Employee Absenteeism": (
    <>
      {"Effective recognition can reduce absenteeism up to 41%. This dollar figure is calculated as: Employee Count x Absentee costs (Avg Employee Revenue x "}
      <a href="https://www.bls.gov/cps/cpsaat47.htm"
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-white underline">
        3.2% Avg Absenteeism
      </a>
      {") x Reduction in absenteeism ("}
      <a href="https://www.gallup.com/workplace/236366/right-culture-not-employee-satisfaction.aspx#:~:text=Showing%20up%20and%20staying%3A%20Engaged%20employees%20make%20it%20a%20point%20to%20show%20up%20to%20work%20and%20do%20more%20work%20%2D%2D%20highly%20engaged%20business%20units%20realize%20a%2041%25%20reduction%20in%20absenteeism%20and%20a%2017%25%20increase%20in%20productivity."
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-white underline">
        41%
      </a>
      {"%)."}
    </>
  ) };

  return (
    <>
      <h3>ROI Calculator</h3>
      <FormFields setStats={setStats} />
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 overflow-visible">
        {stats.map((item) => (
          <div key={item.name} className="relative rounded-lg bg-white px-4 py-5 shadow sm:p-6 overflow-visible">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            <div className="absolute bottom-2 right-2 group">
              <span className="text-xl cursor-pointer">i</span>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full right-0 bg-gray-700 text-white text-xs rounded p-2 max-w-xl whitespace-normal transition ease-in-out duration-200 z-50">
                {explanations[item.name]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  }