import { Button } from "@/components/ui/button";

export const NewsFilter = () => {
  const filters = [
    "All News",
    "Community Development",
    "Education",
    "Housing",
    "Events",
    "Safety"
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="outline"
          className="hover:bg-secondary hover:text-white transition-colors"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};