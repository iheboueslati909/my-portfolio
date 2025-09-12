

export default function SoftwareProjects() {
  return (

<section className="nes-container with-title" style={{ padding: "1rem" }}>
  <h2 className="title retro-title-green">Projects</h2>

  <div className="nes-container is-rounded" style={{ marginBottom: "1rem" }}>
    <h3>Festival & Events Ticketing Platform</h3>
    <ul className="nes-list is-disc">
      <li>Built distributed backend in .NET 8 using Clean Architecture, DDD, and CQRS.</li>
      <li>Implemented secure authentication and role-based access control.</li>
      <li>Integrated payment system with Outbox pattern, RabbitMQ, MassTransit & Stripe.</li>
      <li>CI/CD pipeline to Azure with Supabase for database hosting.</li>
      <li>Integrated OpenTelemetry with Grafana Cloud for monitoring traces, logs & metrics.</li>
    </ul>
  </div>
</section>
  );
}
