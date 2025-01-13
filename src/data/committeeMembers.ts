export interface CommitteeMember {
  name: string;
  image: string;
  role: string;
  bio: string;
  education?: string[];
}

export const committeeMembers: CommitteeMember[] = [
  {
    name: 'Darlene "Faye" Hall',
    image: "/lovable-uploads/7ba35fb4-3734-489b-8777-62d9d29e1231.png",
    role: "Community Organizer",
    education: [
      "George W. Tilton Elementary School",
      "Rezin Orr High School",
      "Triton College"
    ],
    bio: "I am a lifelong resident of Chicago's West Side, specifically West Garfield Park, where I have lived for over five decades. As a Community Organizer with The LEGACY FAMILIES OF WEST GARFIELD PARK and a Cook County employee, I am deeply committed to empowering our community. Having witnessed both triumphs and challenges, my mission is to ensure that the future of West Garfield Park includes and uplifts those with deep roots here. As development unfolds, I am dedicated to preventing displacement and fostering a neighborhood that offers growth and opportunity for all."
  },
  {
    name: "May Henderson",
    image: "/lovable-uploads/78d80068-cc7d-4d71-9e28-aba8646668fd.png",
    role: "Director of Food Distribution for New Mount Pilgrim M.B.Church",
    bio: "I have been a proud resident of West Garfield Park my entire life, spanning over 50 years. Deeply connected to this community, I have dedicated my professional efforts to making a tangible difference. Since 2020, I have had the honor of providing food to more than 19,000 families in West Garfield Park, a role that has reinforced my commitment to serving our neighbors and addressing the challenges we face together.\n\nI care deeply about the well-being and future of our community and am driven by a vision of seeing West Garfield Park thrive. My mission is to bring essential services, meaningful opportunities, and vital resources to our neighborhood, ensuring that every resident has the support they need to flourish. I believe that by working together, we can create a stronger, more resilient West Garfield Park where every individual and family can thrive."
  },
  {
    name: "Linda D. Thomas",
    image: "/lovable-uploads/a3403f60-ba26-4684-8b22-0af8ac08f85c.png",
    role: "Legacy Family Member",
    education: [
      "Malcolm X College - Associate Degree in Business Administrative Assistant"
    ],
    bio: "I am a proud member of Legacy Families, an initiative led by Rev. Dr. Marshall E. Hatch Sr. and Rev. Marshall J. Hatch Jr. I earned an Associate Degree in Business Administrative Assistance from Malcolm X College, where I worked as an Administrator under Vice President Mrs. Delinda Todd and Mr. Roy Walker in the Athletic Department, graduating in May 2013. My family has called West Garfield Park home since 1969 and remains deeply rooted here. At Legacy Families, our mission is to enhance the quality of life in West Garfield Park by fostering hope, prioritizing safety, and preventing displacement while bringing valuable resources to our community. In my free time, I enjoy designing clothing, crocheting, and pursuing lifelong learning to expand my skills."
  },
  {
    name: "Tosheika Thomas",
    image: "/lovable-uploads/61405f54-d646-4115-b40e-83ccc5999205.png",
    role: "Treasurer, Legacy Family's Community",
    education: [
      "Malcolm X College - A.A. in Elementary Education",
      "National-Louis University - B.A. in Psychology"
    ],
    bio: "I'm one of the four founding members of The Legacy Family's Community and currently serve as Treasurer. I hold an A.A. in Elementary Education from Malcolm X College and a B.A. in Psychology from National-Louis University. Born and raised in Chicago's West Garfield Park, I continue to reside in the community today. The Mission of Legacy Family is to increase the length and quality of lives in West Garfield Park by providing hope, prioritizing safety, and preventing displacement while adding valuable resources to our community. My interests include discovering new restaurants with excellent food, and my hobbies are writing and pursuing self and home improvement projects."
  }
];