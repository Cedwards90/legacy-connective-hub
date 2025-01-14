import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const ChicagoHistory = () => {
  const [expandedEra, setExpandedEra] = useState<string | null>("early");

  const eras = [
    {
      id: "early",
      title: "Early History (1780-1899)",
      description: "From the first non-Indigenous settler to the formation of crucial social justice alliances.",
      content: [
        { year: "1780", event: "Jean Baptiste Point du Sable becomes Chicago's first non-Indigenous settler." },
        { year: "1833", event: "The Chicago Treaty forces concession of five million acres from Indigenous peoples." },
        { year: "1837", event: "Chicago is officially incorporated after forced removal of native peoples." },
        { year: "1889", event: "Hull House is founded by Jane Addams and Ellen Starr, shaping social reform." },
        { year: "1899", event: "Ida B. Wells and Jane Addams form alliance for racial and social justice." }
      ]
    },
    {
      id: "twentieth",
      title: "20th Century (1919-1994)",
      description: "A century of struggle, resistance, and community organizing.",
      content: [
        { year: "1919", event: "Chicago Race Riot marks heightened racial tensions during the Great Migration." },
        { year: "1939", event: "First modern community organization founded: Back of the Yard Neighborhood Council." },
        { year: "1965", event: "The Chicago Freedom Movement addresses segregation and housing conditions." },
        { year: "1968", event: "The Rainbow Coalition forms, uniting across racial and ethnic lines." },
        { year: "1983", event: "Harold Washington becomes Chicago's first Black Mayor." }
      ]
    },
    {
      id: "twentyfirst",
      title: "21st Century (2005-Present)",
      description: "Contemporary movements for justice and community empowerment.",
      content: [
        { year: "2005", event: "Elementary Justice Campaign launches to fight school-to-prison pipeline." },
        { year: "2015", event: "Chicago Community Bond Fund established to support community organizing." },
        { year: "2019", event: "Illinois leads with cannabis legalization including social equity programs." },
        { year: "2020", event: "Community mobilization during COVID-19 crisis." },
        { year: "2023", event: "Legacy Families of West Garfield Park continues the tradition of community organizing." }
      ],
      image: {
        src: "/lovable-uploads/a601eae3-028a-41a6-81ed-0f9a7415bd2c.png",
        alt: "Legacy Family Committee members at a community outreach event",
        caption: "The Legacy Family Committee engaging with the community at an outreach event"
      }
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-cream to-white" id="history">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6 tracking-tight">
            Chicago's Legacy of Community Organizing
          </h2>
          <p className="text-xl text-[#221F26] max-w-3xl mx-auto leading-relaxed">
            Our work builds upon generations of community organizing in Chicago, continuing the fight for justice, equity, and community empowerment in West Garfield Park.
          </p>
        </div>

        <div className="space-y-6">
          {eras.map((era) => (
            <div 
              key={era.id}
              className="bg-white rounded-2xl border border-secondary/10 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setExpandedEra(expandedEra === era.id ? null : era.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1F2C]">{era.title}</h3>
                  <p className="text-[#403E43] mt-2">{era.description}</p>
                </div>
                {expandedEra === era.id ? (
                  <ChevronUp className="w-6 h-6 text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-secondary flex-shrink-0" />
                )}
              </button>

              {expandedEra === era.id && (
                <div className="p-6 pt-0 border-t border-secondary/10">
                  <div className="space-y-6">
                    {era.content.map((item) => (
                      <div 
                        key={item.year}
                        className="flex gap-6 items-start animate-fade-up"
                      >
                        <span className="font-bold text-[#1A1F2C] whitespace-nowrap">{item.year}</span>
                        <p className="text-[#221F26]">{item.event}</p>
                      </div>
                    ))}
                    {era.image && (
                      <div className="mt-8 animate-fade-up">
                        <div className="relative rounded-lg overflow-hidden">
                          <img
                            src={era.image.src}
                            alt={era.image.alt}
                            className="w-full h-[700px] object-cover object-center rounded-lg"
                          />
                          <div className="mt-3 text-sm text-[#403E43] text-center italic">
                            {era.image.caption}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-[#221F26] max-w-3xl mx-auto leading-relaxed">
            The Legacy Families of West Garfield Park continues this rich tradition of community organizing, working to prevent displacement, prioritize safety, and build resources within our community. Together, we're writing the next chapter in Chicago's history of grassroots activism and community empowerment.
          </p>
        </div>
      </div>
    </section>
  );
};