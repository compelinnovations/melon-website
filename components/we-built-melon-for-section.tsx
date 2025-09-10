export function WeBuiltMelonForSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            We built <span className="text-[#04c751]">melon</span> for
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Melon is designed for everyday life. Whoever you are, Melon makes
            health coverage simple and accessible.
          </p>
        </div>
      </div>
    </section>
  );
}

const Features = () => {
  const audiences = [
    {
      title: "Students protecting their studies.",
      image: "/images/students-studying-group.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]", // Changed from text-white to dark gray
      size: "large",
    },
    {
      title: "Freelancers working without benefits.",
      image: "/images/freelancer-working-laptop.jpg",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      size: "small",
    },
    {
      title: "Tourists staying safe while traveling.",
      image: "/images/tourists-couple-passports.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]", // Changed to dark text like students card
      size: "wide",
      hasDecoration: true,
    },
    {
      title: "Small businesses caring for employees.",
      image: "/images/small-business-team.jpg",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      size: "small",
    },
    {
      title: "Diaspora sending love and support home.",
      image: "/images/diaspora-woman-phone.jpg",
      bgColor: "bg-[#005aad]",
      textColor: "text-white",
      size: "small",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Students - Large card */}
        <div
          className={`${audiences[0].bgColor} rounded-3xl p-8 md:col-span-2 lg:col-span-2 relative overflow-hidden min-h-[400px]`}
        >
          <h3
            className={`text-3xl lg:text-4xl font-normal ${audiences[0].textColor} mb-6 max-w-md leading-tight tracking-tight`}
          >
            {audiences[0].title}
          </h3>
          <div className="absolute bottom-0 right-0 w-full h-3/5">
            <img
              src={audiences[0].image || "/placeholder.svg"}
              alt="Students studying together"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Freelancers - Small card */}
        <div
          className={`${audiences[1].bgColor} rounded-3xl p-8 relative overflow-hidden min-h-[400px]`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-normal ${audiences[1].textColor} mb-6 max-w-xs leading-tight`}
          >
            {audiences[1].title}
          </h3>
          <div className="absolute bottom-0 right-0 w-full h-3/5">
            <img
              src={audiences[1].image || "/placeholder.svg"}
              alt="Freelancer working on laptop"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Tourists - Wide card with decoration */}
        <div
          className={`${audiences[2].bgColor} rounded-3xl p-8 md:col-span-2 lg:col-span-3 relative overflow-hidden min-h-[300px]`}
        >
          <h3
            className={`text-3xl lg:text-4xl font-normal ${audiences[2].textColor} mb-6 max-w-md leading-tight tracking-tight`}
          >
            {audiences[2].title}
          </h3>
          {audiences[2].hasDecoration && (
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white rounded-full transform -translate-y-1/2"></div>
          )}
          <div className="absolute bottom-0 right-0 w-2/3 h-4/5">
            <img
              src={audiences[2].image || "/placeholder.svg"}
              alt="Tourists with passports"
              className="w-full h-full object-contain object-bottom-right"
            />
          </div>
        </div>

        {/* Small businesses - Small card */}
        <div
          className={`${audiences[3].bgColor} rounded-3xl p-8 relative overflow-hidden min-h-[400px]`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-normal ${audiences[3].textColor} mb-6 max-w-xs leading-tight`}
          >
            {audiences[3].title}
          </h3>
          <div className="absolute bottom-0 right-0 w-full h-3/5">
            <img
              src={audiences[3].image || "/placeholder.svg"}
              alt="Business team"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Diaspora - Small card */}
        <div
          className={`${audiences[4].bgColor} rounded-3xl p-8 relative overflow-hidden min-h-[400px]`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-normal ${audiences[4].textColor} mb-6 max-w-xs leading-tight`}
          >
            {audiences[4].title}
          </h3>
          <div className="absolute bottom-0 right-0 w-full h-3/5">
            <img
              src={audiences[4].image || "/placeholder.svg"}
              alt="Woman using phone"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
