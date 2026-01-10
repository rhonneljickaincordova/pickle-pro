import { useState } from 'react';

export default function FloorPlan() {
  const [setupType, setSetupType] = useState('outdoor');
  const [showDimensions, setShowDimensions] = useState(true);
  const [showCourtDetails, setShowCourtDetails] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [unit, setUnit] = useState('meters');

  const toFeet = (m) => (m * 3.28084).toFixed(1);
  const formatDim = (m) => unit === 'meters' ? m + 'm' : toFeet(m) + "'";
  const isIndoor = setupType === 'indoor';

  const indoorSpecs = { ceilingHeight: 9, ridgeHeight: 12, posts: 15 };

  const areaDetails = {
    court: { name: (isIndoor ? 'Covered' : 'Outdoor') + ' Pickleball Court', size: '100 sqm each', dims: '9.1m x 11m', features: isIndoor ? 'Roof covered, open sides' : 'Open-air, LED poles' },
    coffee: { name: 'Coffee Shop', size: '30 sqm', dims: '5m x 6m', features: 'Counter, tables' },
    maleRR: { name: 'Male Restroom', size: '4 sqm', dims: '2m x 2m', features: 'Toilet, sink' },
    maleShower: { name: 'Male Shower', size: '4 sqm', dims: '2m x 2m', features: 'Shower stall' },
    femaleRR: { name: 'Female Restroom', size: '4 sqm', dims: '2m x 2m', features: 'Toilet, sink' },
    femaleShower: { name: 'Female Shower', size: '4 sqm', dims: '2m x 2m', features: 'Shower stall' },
    parking: { name: 'Parking Area', size: '119 sqm', dims: '2.7m x 5.5m per slot', features: '8 slots' },
    post: { name: 'Structural Post', size: '0.13 sqm', dims: '400mm diameter', features: 'Steel column, 9m height' }
  };

  const courts = [];
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 4; col++) {
      courts.push({ row, col, num: row * 4 + col + 1 });
    }
  }

  const posts = [
    [25, 25], [140, 25], [260, 25], [375, 25], [495, 25],
    [25, 295], [140, 295], [260, 295], [375, 295], [495, 295],
    [25, 160], [495, 160], [140, 160], [260, 160], [375, 160]
  ];

  const lightPoles = [
    [30, 60], [140, 60], [260, 60], [370, 60],
    [30, 175], [140, 175], [260, 175], [370, 175],
    [30, 285], [370, 285]
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">8-Court Pickleball Facility</h1>
          <p className="text-slate-400 text-sm">1,000 sqm | Switch between Indoor and Outdoor</p>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-slate-800 p-1 rounded-lg flex">
            <button 
              onClick={() => setSetupType('outdoor')} 
              className={"px-5 py-2 rounded-md text-sm font-medium " + (setupType === 'outdoor' ? 'bg-green-500 text-white' : 'text-slate-400')}
            >
              Outdoor
            </button>
            <button 
              onClick={() => setSetupType('indoor')} 
              className={"px-5 py-2 rounded-md text-sm font-medium " + (setupType === 'indoor' ? 'bg-orange-500 text-white' : 'text-slate-400')}
            >
              Covered
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className={"inline-block px-4 py-1 rounded-full text-sm " + (isIndoor ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400')}>
            {isIndoor ? 'COVERED: Open Gable Roof, ' + indoorSpecs.ridgeHeight + 'm ridge, ' + indoorSpecs.posts + ' posts' : 'OUTDOOR: Open-air courts with perimeter fence'}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
            <input type="checkbox" checked={showDimensions} onChange={() => setShowDimensions(!showDimensions)} />
            Dimensions
          </label>
          <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
            <input type="checkbox" checked={showCourtDetails} onChange={() => setShowCourtDetails(!showCourtDetails)} />
            Court Details
          </label>
          <label className="flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg">
            <input type="checkbox" checked={showLegend} onChange={() => setShowLegend(!showLegend)} />
            Legend
          </label>
          <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg">
            <button onClick={() => setUnit('meters')} className={"px-2 py-0.5 rounded text-xs " + (unit === 'meters' ? 'bg-teal-500 text-white' : 'text-slate-400')}>m</button>
            <button onClick={() => setUnit('feet')} className={"px-2 py-0.5 rounded text-xs " + (unit === 'feet' ? 'bg-teal-500 text-white' : 'text-slate-400')}>ft</button>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-700 p-3 mb-4">
          <svg viewBox="0 0 520 420" className="w-full h-auto">
            <defs>
              <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#334155" strokeWidth="0.5"/>
              </pattern>
            </defs>

            <rect width="520" height="420" fill="#0f172a"/>
            <rect x="20" y="20" width="480" height="380" fill="url(#grid)"/>

            <rect 
              x="20" y="20" width="480" height="280" 
              fill={isIndoor ? "#7c2d12" : "#1e3a2f"} 
              stroke={isIndoor ? "#f97316" : "#22c55e"} 
              strokeWidth="3" 
              strokeDasharray={isIndoor ? "0" : "10,5"}
            />
            
            {isIndoor && (
              <g>
                <rect x="20" y="20" width="480" height="280" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="10,5"/>
                <line x1="20" y1="160" x2="500" y2="160" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8,4"/>
                <text x="510" y="163" fill="#f59e0b" fontSize="6" fontWeight="bold">RIDGE</text>
                <polygon points="20,20 260,5 500,20" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2"/>
                <text x="260" y="14" textAnchor="middle" fill="#f59e0b" fontSize="6">OPEN GABLE ROOF (12m ridge)</text>
              </g>
            )}
            
            <text x="30" y="35" fill={isIndoor ? "#f59e0b" : "#22c55e"} fontSize="8" fontWeight="bold">
              {isIndoor ? "COVERED COURT AREA (OPEN SIDES)" : "OUTDOOR COURT AREA (OPEN AIR)"}
            </text>

            {courts.map((court) => {
              const x = 30 + court.col * 117;
              const y = 45 + court.row * 120;
              return (
                <g key={court.num} onMouseEnter={() => setSelectedArea('court')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
                  <rect x={x} y={y} width="110" height="115" fill={isIndoor ? "#c2410c" : "#115e3a"} stroke={isIndoor ? "#f97316" : "#22c55e"} strokeWidth="2"/>
                  {showCourtDetails && (
                    <g>
                      <rect x={x + 12} y={y + 8} width="86" height="99" fill={isIndoor ? "#ea580c" : "#166534"} stroke="white" strokeWidth="1.5"/>
                      <line x1={x + 12} y1={y + 57} x2={x + 98} y2={y + 57} stroke="#1e293b" strokeWidth="3"/>
                      <rect x={x + 12} y={y + 8} width="86" height="18" fill={isIndoor ? "#dc2626" : "#15803d"} stroke="white" strokeWidth="0.5"/>
                      <rect x={x + 12} y={y + 89} width="86" height="18" fill={isIndoor ? "#dc2626" : "#15803d"} stroke="white" strokeWidth="0.5"/>
                      <line x1={x + 55} y1={y + 8} x2={x + 55} y2={y + 107} stroke="white" strokeWidth="0.5"/>
                    </g>
                  )}
                  <circle cx={x + 55} cy={y + 57} r="12" fill="#0f172a" fillOpacity="0.8"/>
                  <text x={x + 55} y={y + 61} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{court.num}</text>
                </g>
              );
            })}

            {isIndoor && posts.map((pos, i) => (
              <g key={'post-' + i} onMouseEnter={() => setSelectedArea('post')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
                <circle cx={pos[0]} cy={pos[1]} r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="2"/>
                <text x={pos[0]} y={pos[1] + 3} textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">{i + 1}</text>
              </g>
            ))}

            {!isIndoor && lightPoles.map((pos, i) => (
              <circle key={'pole-' + i} cx={pos[0]} cy={pos[1]} r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
            ))}

            {!isIndoor && (
              <text x="260" y="15" textAnchor="middle" fill="#22c55e" fontSize="7">PERIMETER FENCE</text>
            )}

            <text x="30" y="320" fill="#94a3b8" fontSize="8" fontWeight="bold">OUTSIDE AMENITIES AREA</text>

            <g onMouseEnter={() => setSelectedArea('maleRR')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
              <rect x="20" y="330" width="25" height="25" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2"/>
              <text x="32" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">M-RR</text>
            </g>

            <g onMouseEnter={() => setSelectedArea('maleShower')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
              <rect x="50" y="330" width="25" height="25" fill="#1e40af" stroke="#60a5fa" strokeWidth="2"/>
              <text x="62" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">M-SH</text>
            </g>

            <g onMouseEnter={() => setSelectedArea('femaleRR')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
              <rect x="80" y="330" width="25" height="25" fill="#831843" stroke="#ec4899" strokeWidth="2"/>
              <text x="92" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">F-RR</text>
            </g>

            <g onMouseEnter={() => setSelectedArea('femaleShower')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
              <rect x="110" y="330" width="25" height="25" fill="#9d174d" stroke="#f472b6" strokeWidth="2"/>
              <text x="122" y="370" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">F-SH</text>
            </g>

            <g onMouseEnter={() => setSelectedArea('coffee')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
              <rect x="145" y="330" width="60" height="45" fill="#78350f" stroke="#b45309" strokeWidth="2"/>
              <text x="175" y="355" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">COFFEE</text>
              <text x="175" y="365" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">SHOP</text>
            </g>

            <rect x="210" y="330" width="25" height="45" fill="#1e293b" stroke="#475569" strokeWidth="2" strokeDasharray="4"/>
            <text x="222" y="355" textAnchor="middle" fill="#64748b" fontSize="5" fontWeight="bold">GAP</text>

            <g onMouseEnter={() => setSelectedArea('parking')} onMouseLeave={() => setSelectedArea(null)} style={{cursor: 'pointer'}}>
              <rect x="240" y="330" width="260" height="45" fill="#292524" stroke="#57534e" strokeWidth="2"/>
              {[0,1,2,3,4,5,6,7].map(i => (
                <g key={'p-' + i}>
                  <rect x={245 + i * 31} y={332} width="28" height="40" fill="#1c1917" stroke="#44403c" strokeWidth="1"/>
                  <text x={259 + i * 31} y={355} textAnchor="middle" fill="#57534e" fontSize="8" fontWeight="bold">P{i + 1}</text>
                </g>
              ))}
            </g>
            <text x="370" y="390" textAnchor="middle" fill="#a8a29e" fontSize="6" fontWeight="bold">PARKING (8 slots)</text>

            {!isIndoor && (
              <g>
                <rect x="230" y="295" width="5" height="35" fill="#0ea5e9" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2"/>
                <text x="232" y="290" textAnchor="middle" fill="#38bdf8" fontSize="6" fontWeight="bold">ENTRY</text>
              </g>
            )}

            {showDimensions && (
              <g>
                <line x1="20" y1="12" x2="500" y2="12" stroke="#f59e0b" strokeWidth="1"/>
                <text x="260" y="9" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">{formatDim(40)} (WIDTH)</text>
                <line x1="508" y1="20" x2="508" y2="300" stroke="#f59e0b" strokeWidth="1"/>
                <text x="515" y="160" fill="#f59e0b" fontSize="8" fontWeight="bold" transform="rotate(90, 515, 160)">{formatDim(23)}</text>
              </g>
            )}

            {showLegend && (
              <g transform="translate(385, 40)">
                <rect width="110" height={isIndoor ? 145 : 120} fill="#0f172a" fillOpacity="0.95" stroke="#475569" strokeWidth="1" rx="4"/>
                <text x="55" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">LEGEND</text>
                <rect x="6" y="22" width="12" height="9" fill={isIndoor ? '#c2410c' : '#115e3a'} stroke={isIndoor ? '#f97316' : '#22c55e'} strokeWidth="1"/>
                <text x="24" y="29" fill="#94a3b8" fontSize="6">Courts</text>
                <rect x="6" y="36" width="12" height="9" fill="#78350f" stroke="#b45309" strokeWidth="1"/>
                <text x="24" y="43" fill="#94a3b8" fontSize="6">Coffee Shop</text>
                <rect x="6" y="50" width="12" height="9" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
                <text x="24" y="57" fill="#94a3b8" fontSize="6">Male RR</text>
                <rect x="6" y="64" width="12" height="9" fill="#831843" stroke="#ec4899" strokeWidth="1"/>
                <text x="24" y="71" fill="#94a3b8" fontSize="6">Female RR</text>
                <rect x="6" y="78" width="12" height="9" fill="#292524" stroke="#57534e" strokeWidth="1"/>
                <text x="24" y="85" fill="#94a3b8" fontSize="6">Parking</text>
                {isIndoor && (
                  <g>
                    <circle cx="12" cy="100" r="5" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
                    <text x="24" y="102" fill="#94a3b8" fontSize="6">Posts (15)</text>
                  </g>
                )}
              </g>
            )}

            <text x="20" y="410" fill="#64748b" fontSize="6">Scale 1:100 | {unit}</text>
            <text x="500" y="410" textAnchor="end" fill="#64748b" fontSize="6">PB-{isIndoor ? 'IN' : 'OUT'}-001</text>
          </svg>
        </div>

        {selectedArea && areaDetails[selectedArea] && (
          <div className={"rounded-lg p-3 border mb-4 " + (isIndoor ? 'bg-orange-900/20 border-orange-700' : 'bg-green-900/20 border-green-700')}>
            <h3 className="text-white font-bold">{areaDetails[selectedArea].name}</h3>
            <div className="grid grid-cols-2 gap-2 mt-1 text-sm">
              <div><span className="text-slate-400">Size:</span> <span className="text-white">{areaDetails[selectedArea].size}</span></div>
              <div><span className="text-slate-400">Dims:</span> <span className="text-white">{areaDetails[selectedArea].dims}</span></div>
              <div className="col-span-2"><span className="text-slate-400">Features:</span> <span className="text-white">{areaDetails[selectedArea].features}</span></div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-4 gap-2">
          <div className={"rounded-lg p-2 border " + (isIndoor ? 'bg-orange-900/30 border-orange-700' : 'bg-green-900/30 border-green-700')}>
            <div className={"font-bold text-lg " + (isIndoor ? 'text-orange-400' : 'text-green-400')}>8</div>
            <div className="text-slate-400 text-xs">{isIndoor ? 'Covered' : 'Outdoor'} Courts</div>
          </div>
          <div className="bg-amber-900/30 rounded-lg p-2 border border-amber-700">
            <div className="text-amber-400 font-bold text-lg">1</div>
            <div className="text-slate-400 text-xs">Coffee Shop</div>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-2 border border-purple-700">
            <div className="text-purple-400 font-bold text-lg">4</div>
            <div className="text-slate-400 text-xs">RR/Showers</div>
          </div>
          <div className="bg-stone-800/50 rounded-lg p-2 border border-stone-600">
            <div className="text-stone-400 font-bold text-lg">8</div>
            <div className="text-slate-400 text-xs">Parking</div>
          </div>
        </div>

        {isIndoor && (
          <div className="mt-3 bg-slate-800 rounded-lg p-3 border border-slate-700">
            <h3 className="text-white font-bold mb-2">Covered Structure Specs</h3>
            <div className="grid grid-cols-4 gap-2 text-sm">
              <div className="bg-slate-900 rounded p-2">
                <div className="text-slate-400 text-xs">Wall Height</div>
                <div className="text-white font-bold">9m</div>
              </div>
              <div className="bg-slate-900 rounded p-2">
                <div className="text-slate-400 text-xs">Ridge Height</div>
                <div className="text-yellow-400 font-bold">12m</div>
              </div>
              <div className="bg-slate-900 rounded p-2">
                <div className="text-slate-400 text-xs">Posts</div>
                <div className="text-red-400 font-bold">15</div>
              </div>
              <div className="bg-slate-900 rounded p-2">
                <div className="text-slate-400 text-xs">Roof</div>
                <div className="text-orange-400 font-bold">Gable</div>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-slate-500 text-xs mt-3">Toggle Indoor/Outdoor - Hover for details</p>
      </div>
    </div>
  );
}