export default function Stats() {
  const stats = [
    { number: '20/20', label: 'Tests Passing' },
    { number: '3x', label: 'Faster than Go' },
    { number: '40K+', label: 'VRF Ops/Sec' },
    { number: '10K+', label: 'Target TPS' },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
