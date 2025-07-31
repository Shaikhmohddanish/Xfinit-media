export default function OurProcess() {
  const steps = [
    {
      name: "Discover & Strategize",
      description:
        "We start by listening. Our initial phase is dedicated to understanding your business, audience, and objectives. We conduct in-depth research and workshops to build a strategic foundation for the project.",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Business team brainstorming with sticky notes on a glass wall",
    },
    {
      name: "Design & Prototype",
      description:
        "Creativity meets functionality. Our design team crafts intuitive user interfaces (UI) and seamless user experiences (UX). We create wireframes and interactive prototypes to visualize the solution before development begins.",
      image: "/placeholder.svg?height=400&width=600",
      alt: "UI/UX designer working on wireframes on a large monitor",
    },
    {
      name: "Develop & Engineer",
      description:
        "This is where your vision becomes a reality. Our expert developers write clean, efficient, and scalable code, following industry best practices to build a robust and high-performing digital product.",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Close-up of code on a computer screen",
    },
    {
      name: "Test & Deploy",
      description:
        "Quality is paramount. We conduct rigorous testing across devices and scenarios to ensure a flawless launch. Our deployment process is meticulous, ensuring a smooth transition from development to a live environment.",
      image: "/placeholder.svg?height=400&width=600",
      alt: "Stylized graphic of a rocket launching, symbolizing project deployment",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Our Path to Your Success</h2>
          <p className="text-lg text-gray-600">
            We follow a structured and transparent process to ensure every project is delivered on time, on budget, and
            to the highest standard of quality.
          </p>
        </div>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:grid-flow-row-dense" : ""}`}
            >
              <div
                className={`relative rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}
              >
                <img src={step.image || "/placeholder.svg"} alt={step.alt} className="w-full h-full object-cover" />
              </div>
              <div className="lg:pr-8">
                <span className="text-sm font-bold text-blue-500 uppercase">Step {index + 1}</span>
                <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4">{step.name}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
