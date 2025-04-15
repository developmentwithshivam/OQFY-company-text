import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faBoxOpen, faClock, faBox, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function Home() {
  const data = {
    labels: ["Signed", "Pending", "Expired", "Initiated"],
    datasets: [
      {
        label: "E-sign Count",
        data: [10000, 8000, 5000, 7000], // You can replace these values
        backgroundColor: [
          "blue", // Signed
          "#9d4edd", // Pending
          "#e0aaff", // Expired
          "#e2e2e2", // Initiated (gray)
        ],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  return (
    <>
      {/* <h1>Home</h1>
    <Logout/>
    <Test/> */}

      <nav>
        <div className="flex px-10 py-4 bg-amber-200 justify-between items-center">
          <div className="text-2xl font-bold">OQFY</div>
          <ul className="flex gap-5 shrink">
            <li className="border-b-2 border-transparent py-2 hover:border-black cursor-pointer">
              services
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-black cursor-pointer">
              user Management
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-black cursor-pointer">
              My orders
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-black cursor-pointer">
              Reports
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-black cursor-pointer">
              Bar codes
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-black cursor-pointer">
              invoice
            </li>
            <li className="border-b-2 border-transparent py-2 hover:border-black cursor-pointer">
              coming soon
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3">
            <div>Michel Smith</div>
            <div className=" rounded-full bg-purple-900 w-8 h-8 flex justify-center items-center text-white">
              M
            </div>
          </div>
        </div>
      </nav>

      <main className=" px-10 py-5 bg-gray-100">
        <div className="flex gap-4">
          <div className="w-1/4  h-screen flex flex-col gap-y-5 ">
            <div className="px-4 py-3 bg-white rounded-xl">
              <p className="font-bold">Welcome back, Michael</p>
              <p className="text-xs text-slate-500">23 May, 2025 - Tuesday</p>
            </div>
            {/* my-wallet-- */}
            <div className="bg-white p-4 pr-6 rounded-xl shadow flex justify-between">
              <div>
                <p className="text-sm font-semibold text-black pb-2">
                  My Wallet
                </p>
                <p className="text-2xl font-bold">₹ 2,50,000</p>
                <p className="text-xs pb-2 text-gray-500">Current Balance</p>
                <p className="text-xs text-purple-900">
                  Running low?
                  <span className="underline">Notify admin now.</span>
                </p>
              </div>
              <div className="text-purple-600 text-2xl">
                <FontAwesomeIcon icon={faWallet} className="text-gray-700" />
              </div>
            </div>
            {/* -- */}
            <div className="px-4 pr-6 py3 bg-white rounded-xl h-3/5 overflow-y-auto ">
              <p className="font-semibold text-xl py-3">Pending Actions</p>
              <div className="border rounded-sm pb-2 mb-3">
                <div className="flex justify-between px-4 py-3">
                  <p className="text-sm font-semibold">#trd35468</p>
                  <p className="text-xs text-right text-black p-1 bg-gray-200 px-2">
                    10 days left
                  </p>
                </div>
                <p className="text-xs text-gray-500 px-4">
                  2 files are waiting to be Uploaded
                </p>
              </div>
              <div className="border rounded-sm pb-2 mb-3">
                <div className="flex justify-between px-4 py-3">
                  <p className="text-sm font-semibold">#trd35468</p>
                  <p className="text-xs text-right text-black p-1 bg-gray-200 px-2">
                    10 days left
                  </p>
                </div>
                <p className="text-xs text-gray-500 px-4">
                  2 files are waiting to be Uploaded
                </p>
              </div>
              <div className="border rounded-sm pb-2 mb-3">
                <div className="flex justify-between px-4 py-3">
                  <p className="text-sm font-semibold">#trd35468</p>
                  <p className="text-xs text-right text-black p-1 bg-gray-200 px-2">
                    10 days left
                  </p>
                </div>
                <p className="text-xs text-gray-500 px-4">
                  2 files are waiting to be Uploaded
                </p>
              </div>
              <div className="border rounded-sm pb-2 mb-3">
                <div className="flex justify-between px-4 py-3">
                  <p className="text-sm font-semibold">#trd35468</p>
                  <p className="text-xs text-right text-black p-1 bg-gray-200 px-2">
                    10 days left
                  </p>
                </div>
                <p className="text-xs text-gray-500 px-4">
                  2 files are waiting to be Uploaded
                </p>
              </div>
              <div className="border rounded-sm pb-2 mb-3">
                <div className="flex justify-between px-4 py-3">
                  <p className="text-sm font-semibold">#trd35468</p>
                  <p className="text-xs text-right text-black p-1 bg-gray-200 px-2">
                    10 days left
                  </p>
                </div>
                <p className="text-xs text-gray-500 px-4">
                  2 files are waiting to be Uploaded
                </p>
              </div>
            </div>
          </div>
          {/* Frequently used start here..... */}
          <div className="w-3/4 ">
            <div className="px-5 pb-4 pt-2 bg-white rounded-xl">
              <p className="py-2 font-medium">Frequently Used</p>
              <div className="flex gap-3 font-light">
                <div className="px-3 py-2 ring-1 ring-purple-900 rounded-xl">
                  <h2 className="font-medium">Contract Execution Upload</h2>
                  <p className="text-xs py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam quis aliquam minus?
                  </p>
                  <p className="underline underline-offset-4 font-semibold text-purple-900">
                    Get started &gt;&gt;
                  </p>
                </div>
                <div className="px-3 py-2 ring-1 ring-purple-900 rounded-xl">
                  <h2 className="font-medium">Contract Execution Upload</h2>
                  <p className="text-xs py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam quis aliquam minus?
                  </p>
                  <p className="underline underline-offset-4 font-semibold text-purple-900">
                    Get started &gt;&gt;
                  </p>
                </div>
                <div className="px-3 py-2 ring-1 ring-purple-900 rounded-xl">
                  <h2 className="font-medium">Contract Execution Upload</h2>
                  <p className="text-xs py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam quis aliquam minus?
                  </p>
                  <p className="underline underline-offset-4 font-medium text-purple-900">
                    Get started &gt;&gt;
                  </p>
                </div>
              </div>
            </div>
            <div className=" py-4 pt-6 pb-5 flex justify-between">
              <select className="w-64 bg-white rounded-md p-1 ring-1 ring-slate-300 text-slate-500">
                <option>All branches</option>
              </select>
              <div className="flex gap-3">
                <select className="w-52 bg-white rounded-md p-1 ring-1 ring-slate-300 text-slate-500">
                  <option>Custom range</option>
                </select>
                <select className="w-52 bg-white rounded-md p-1 ring-1 ring-slate-300 text-slate-500">
                  <option>March 2025</option>
                </select>
              </div>
            </div>
            <div className="px-5 pb-6 pt-2 bg-white rounded-xl">
              <div className="flex justify-between px-2">
                <p className="py-2 font-medium">Order Details</p>
                <p className="py-2 font-medium underline underline-offset-4 text-purple-900">
                  view All
                </p>
              </div>
              <div className="flex gap-4 font-light flex-wrap">
                <div className="bg-slate-200 flex rounded-md px-5 py-2 pb-4 gap-24">
                  <div className="font-md">
                    <p className="font-bold text-2xl">18</p>
                    <p>Total Orders</p>
                    <p className="text-xs">+2.4%</p>
                  </div>
                  <div><FontAwesomeIcon icon={faBoxOpen} className="text-2xl pt-2"/></div>
                </div>
                <div className="bg-slate-200 flex rounded-md px-5 py-2 pb-4 gap-24">
                  <div className="font-md">
                    <p className="font-bold text-2xl">18</p>
                    <p>Total Orders</p>
                    <p className="text-xs">+2.4%</p>
                  </div>
                  <div><FontAwesomeIcon icon={faClock} className="text-2xl pt-2"/></div>
                </div>
                <div className="bg-slate-200 flex rounded-md px-5 py-2 pb-4 gap-24">
                  <div className="font-md">
                    <p className="font-bold text-2xl">18</p>
                    <p>Total Orders</p>
                    <p className="text-xs">+2.4%</p>
                  </div>
                  <div><FontAwesomeIcon icon={faBox} className="text-2xl pt-2"/></div>
                </div>
                <div className="bg-slate-200 flex rounded-md px-5 py-2 pb-4 gap-24">
                  <div className="font-md">
                    <p className="font-bold text-2xl">18</p>
                    <p>Total Orders</p>
                    <p className="text-xs">+2.4%</p>
                  </div>
                  <div><FontAwesomeIcon icon={faShieldHalved} className="text-2xl pt-2"/></div>
                </div>
              </div>
            </div>
            <div className="mt-2 py-4 flex gap-3">
              <div className="px-6 py-4 pb-10 rounded-sm bg-white w-1/2 flex gap-20">
                <div className="w-3/5">
                  <h1 className="text-xl font-semibold pb-4">E-sign Count</h1>
                  <div className="flex gap-5 pb-4">
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>initiated</p>
                    </div>
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>Pending</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>Signed</p>
                    </div>
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>Expired</p>
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="relative w-32 h-32 inset-2">
                    <Doughnut
                      data={data}
                      options={{
                        plugins: { legend: { display: false } },
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <span className="text-xl font-bold">30k</span>
                      <span className="text-sm text-gray-500">initiated</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 pb-10 rounded-sm bg-white w-1/2 flex gap-20">
                <div className="w-3/5">
                  <h1 className="text-xl font-semibold pb-4">E-sign Count</h1>
                  <div className="flex gap-5 pb-4">
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>initiated</p>
                    </div>
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>Pending</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>Signed</p>
                    </div>
                    <div className="flex items-center gap-3 min-w-24">
                      <div className="h-3 w-3 bg-amber-600"></div>
                      <p>Expired</p>
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="relative w-32 h-32 inset-2">
                    <Doughnut
                      data={data}
                      options={{
                        plugins: { legend: { display: false } },
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <span className="text-xl font-bold">30k</span>
                      <span className="text-sm text-gray-500">initiated</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
