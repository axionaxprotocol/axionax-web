import Link from 'next/link'

export default function Community() {
  const channels = [
    {
      icon: '💬',
      title: 'Discord',
      description: 'Join our Discord server for discussions, support, and community events',
      href: '/coming-soon',
      badge: '🔜 Coming Soon',
      available: false,
    },
    {
      icon: '🔗',
      title: 'GitHub',
      description: 'Contribute to the codebase, report issues, and submit pull requests',
      href: 'https://github.com/axionaxprotocol/axionax-core',
      badge: '✅ Open Source',
      available: true,
    },
    {
      icon: '🐦',
      title: 'Twitter',
      description: 'Follow for updates, announcements, and ecosystem news',
      href: '/coming-soon',
      badge: '🔜 Coming Soon',
      available: false,
    },
    {
      icon: '📱',
      title: 'Telegram',
      description: 'Real-time chat with the community and core team',
      href: '/coming-soon',
      badge: '🔜 Coming Soon',
      available: false,
    },
    {
      icon: '💭',
      title: 'Forum',
      description: 'In-depth discussions on governance, proposals, and research',
      href: '/coming-soon',
      badge: '🔜 Coming Soon',
      available: false,
    },
    {
      icon: '📝',
      title: 'Blog',
      description: 'Technical deep-dives, tutorials, and ecosystem updates',
      href: '/coming-soon',
      badge: '🔜 Coming Soon',
      available: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-white/[0.02]">
      <div className="container mx-auto">
        <h2 className="section-title">Join the Community</h2>
        <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12">
          Be part of building the future of decentralized compute
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {channels.map((channel, index) => (
            <Link
              key={index}
              href={channel.href}
              target={channel.available ? '_blank' : undefined}
              className={`card group ${!channel.available ? 'opacity-70' : ''}`}
            >
              <div className="text-5xl mb-4">{channel.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{channel.title}</h3>
              <p className="text-text-secondary mb-4 leading-relaxed">{channel.description}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                channel.available 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {channel.badge}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
