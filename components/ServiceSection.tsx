export default function ServiceSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Paragraphs */}
      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Our Services</p>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Designed to help your business move faster</h2>
      <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-2xl">
        We build thoughtful systems that adapt to your workflow — not the other way around. Every feature
        is crafted with clarity and purpose, so your team spends less time managing tools.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
        From initial planning through to delivery, we partner with teams at every stage. Our approach is
        grounded in transparency, precision, and deep respect for your time and resources.
      </p>

      <hr className="border-gray-100 mb-8" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Card 1 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
            {/* icon */}
          </div>
          <div className="w-8 h-0.5 bg-blue-400 rounded mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Strategy</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            We align your product vision with market demand — identifying opportunities, defining roadmaps,
            and ensuring every decision is backed by data and user insight.
          </p>
          <div className="flex gap-6 mb-5">
            <div><p className="text-xl font-semibold text-gray-900">3×</p><p className="text-xs text-gray-400">faster launch</p></div>
            <div><p className="text-xl font-semibold text-gray-900">98%</p><p className="text-xs text-gray-400">client retention</p></div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-lg">Strategy</span>
            <button className="text-xs text-gray-400 hover:text-gray-700 font-medium">Learn more →</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
            {/* icon */}
          </div>
          <div className="w-8 h-0.5 bg-emerald-500 rounded mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analytics</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Turn raw data into clear decisions. Our analytics layer surfaces the metrics that matter most,
            giving your team real-time visibility into growth and operational health.
          </p>
          <div className="flex gap-6 mb-5">
            <div><p className="text-xl font-semibold text-gray-900">40%</p><p className="text-xs text-gray-400">cost reduction</p></div>
            <div><p className="text-xl font-semibold text-gray-900">24/7</p><p className="text-xs text-gray-400">monitoring</p></div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg">Analytics</span>
            <button className="text-xs text-gray-400 hover:text-gray-700 font-medium">Learn more →</button>
          </div>
        </div>

      </div>
    </div>
  );
}