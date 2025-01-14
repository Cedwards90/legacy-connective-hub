interface TheoryOfChangeHeaderProps {
  title: string;
  description: string;
}

export const TheoryOfChangeHeader = ({ title, description }: TheoryOfChangeHeaderProps) => {
  return (
    <div className="text-center mb-24 animate-fade-up">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6 tracking-tight">{title}</h2>
      <p className="text-xl text-[#221F26] max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};