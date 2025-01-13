import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

interface CommitteeMember {
  name: string;
  image: string;
  role: string;
  bio: string;
  education?: string[];
}

const committeeMembers: CommitteeMember[] = [
  {
    name: 'Darlene "Faye" Hall',
    image: "/lovable-uploads/7ba35fb4-3734-489b-8777-62d9d29e1231.png",
    role: "Community Organizer",
    education: [
      "George W. Tilton Elementary School",
      "Rezin Orr High School",
      "Triton College"
    ],
    bio: "I am the second generation of four born and raised on the west side of Chicago in the area most commonly known as West Garfield Park. I currently work for Cook County and have joined The LEGACY FAMILIES OF WEST GARFIELD PARK as a Community Organizer. I have dwelled in the West Garfield Park area for over 5 decades, I have always had a heart for my People and my Community. I have been witness to both the Good and the Bad things that have happened in and to West Garfield Park. It is my Mission in my Adult life to help Empower my People and my Community. It is Important that I leave behind a Legacy that will ensure that the future of West Garfield Park neighborhood includes those who live here, and have here for decades. That the development that is about to/taking place in West Garfield Park does not lead to exclusion or displacement of the People who call this place home. I stand ready to fight to ensure that the legacy of West Garfield Park not only reflects those who will migrate to the area due to Gentrification ... but also those who were here, have roots and generations of history here, remain here! Welcoming a future West Garfield Park neighborhood that provides Growth for ALL."
  },
  {
    name: "May Henderson",
    image: "/lovable-uploads/78d80068-cc7d-4d71-9e28-aba8646668fd.png",
    role: "Director of Food Distribution for New Mount Pilgrim M.B.Church",
    bio: "I have been a resident of West Garfield Park All my life, 50 + years. In my job capacity, I have had the honor of supplying food to over 19, 000 families in West Garfield since 2020.\n\nI care deeply about my Community. I want to see West Garfield thrive. I want to do all I can to help bring services, opportunities and resources to West Garfield Park."
  }
];

export const CommitteeMembers = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-primary text-center mb-12">
          Legacy Family Committee Members
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {committeeMembers.map((member) => (
            <Card key={member.name} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="w-48 h-48 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-playfair font-bold text-primary">{member.name}</h2>
                <p className="text-secondary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {member.education && (
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Education</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {member.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-primary mb-2">Biography</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;