import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CommitteeMember {
  name: string;
  image: string;
  role: string;
  bio: string;
  education?: string[];
}

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export const CommitteeMemberCard = ({ member }: CommitteeMemberCardProps) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="text-center">
        <Avatar className="w-48 h-48 mx-auto mb-4">
          <AvatarImage 
            src={member.image} 
            alt={member.name} 
            className="object-cover"
            onError={(e) => {
              console.error(`Error loading image for ${member.name}`);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
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
  );
};