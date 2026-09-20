// A small picture of what Nishtha builds: several business systems
// connected through an integration hub (Camel and Kafka).
export default function FlowDiagram() {
  const left = [
    { label: "NetSuite", y: 40 },
    { label: "SAP", y: 130 },
    { label: "Dynamics 365", y: 220 },
  ];
  return (
    <figure className="flow">
      <svg
        viewBox="0 0 640 280"
        role="img"
        aria-label="Diagram: NetSuite, SAP and Dynamics 365 connect through a Camel and Kafka integration hub to Brightly EAM"
      >
        {left.map((n) => (
          <g key={n.label}>
            <path className="flow-line" d={`M170 ${n.y} C 250 ${n.y}, 250 140, 300 140`} />
            <rect className="flow-node" x="20" y={n.y - 22} width="150" height="44" rx="8" />
            <text className="flow-text" x="95" y={n.y + 5} textAnchor="middle">
              {n.label}
            </text>
          </g>
        ))}
        <path className="flow-line" d="M400 140 L 470 140" />
        <rect className="flow-hub" x="300" y="100" width="100" height="80" rx="12" />
        <text className="flow-hub-text" x="350" y="136" textAnchor="middle">
          Camel
        </text>
        <text className="flow-hub-text" x="350" y="158" textAnchor="middle">
          Kafka
        </text>
        <rect className="flow-node" x="470" y="118" width="150" height="44" rx="8" />
        <text className="flow-text" x="545" y="145" textAnchor="middle">
          Brightly EAM
        </text>
      </svg>
      <figcaption>The kind of system I build: separate business tools, one reliable integration layer.</figcaption>
    </figure>
  );
}
