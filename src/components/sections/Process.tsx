const steps = [
  {
    title: 'Request a Quote',
    description: 'Share your shipment details — origin, destination, cargo type and timeline — by form, phone or WhatsApp.',
  },
  {
    title: 'We Plan & Pick Up',
    description: 'Our team picks the right mode and route, then arranges pickup and loading for your consignment.',
  },
  {
    title: 'On-Time Delivery',
    description: 'Your cargo is tracked and handled securely until it reaches its destination, safely and on time.',
  },
];

export default function Process() {
  return (
    <section className="section py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Simple, Seamless Freight Movement
        </h2>
      </div>
      <div className="relative mt-14">
        <div
          className="absolute left-[16.66%] right-[16.66%] top-[60px] hidden h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 md:block"
          aria-hidden="true"
        />
        <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="card relative p-8 text-center">
            <span
              className={
                'mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 text-lg font-extrabold ' +
                (i === 1 ? 'border-primary bg-primary text-navy-deep shadow-glow' : 'border-primary/40 bg-white text-primary-deep')
              }
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-6 text-lg font-bold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-muted">{step.description}</p>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
