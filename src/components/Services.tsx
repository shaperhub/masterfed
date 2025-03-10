import { services } from "@/data/services"
const Services = () => {
  return (
    <div className="py-8 pb-8 max-w-[850px] mx-auto">
        <h1 className="font-bold text-xl md:text-2xl pb-4 text-center">What I Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:justify-center cursor-default">
            {services.map((service) => (
            <div key={service.heading} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.heading}</h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Services