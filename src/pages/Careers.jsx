import React from 'react'

const jobRoles = [
  {
    name: "Frontend Developer",
    contract: "Full-time",
    location: "Ontario, CA",
    description: "Build and maintain responsive web applications using React and Tailwind. Collaborate with designers and backend engineers to deliver scalable solutions.",
  },
  {
    name: "Backend Developer",
    contract: "Full-time",
    location: "Remote",
    description: "Design and implement APIs, manage databases, and optimize server-side logic to ensure smooth and secure application performance.",
  },
  {
    name: "UI/UX Designer",
    contract: "Contract",
    location: "Abuja, Nigeria",
    description: "Create intuitive user interfaces and experiences. Work closely with frontend developers to translate designs into interactive products.",
  },
  {
    name: "Product Manager",
    contract: "Full-time",
    location: "Remote",
    description: "Lead product strategy, manage roadmaps, and coordinate cross-functional teams to deliver products that meet business goals.",
  },
  {
    name: "QA Engineer",
    contract: "Contract",
    location: "Lagos, Nigeria",
    description: "Test web applications, report bugs, and ensure quality standards are met before releases. Automate tests where possible.",
  },
];

const Careers = () => {
  return (
    <section className="py-10 px-5 space-y-8 hero">
      <h2 className="text-3xl font-bold text-center">Open Roles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {jobRoles.map((role, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{role.name}</h3>
            <p className="text-sm text-gray-500">{role.contract} · {role.location}</p>
            <p className="mt-2 text-gray-700">{role.description}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 hover:bg-gray-200 hover:text-black transition">
              View Role
            </button>
          </div>
        ))}
      </div>

      {/* Other Role */}
      <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-transparent outline-2 outline-offset-2 outline-dashed">
            <h3 className="text-xl font-semibold">Open application</h3>
            <p className="text-sm text-gray-500">Full-time . New Jersey, NY</p>
            <p className="mt-2 text-gray-700">Dont see your role available? Apply for an open application</p>
            <button className="mt-4 bg-black text-white px-4 py-2 hover:bg-gray-200 hover:text-black transition">
              View Role
            </button>
          </div>
    </section>
  )
}

export default Careers