import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Mock data for recent entries
const mockEntries = [
  {
    id: 1,
    date: "2024-01-15",
    content: "Today I learned about React Server Components and how they can improve performance by reducing client-side JavaScript. The concept of streaming HTML from the server is fascinating and could be a game-changer for our applications...",
    tags: ["React", "Performance", "Learning"],
    readTime: "3 min read"
  },
  {
    id: 2,
    date: "2024-01-14",
    content: "Spent the morning debugging a tricky async issue in our Node.js API. The problem was with Promise.all() not handling rejections properly. Fixed it by implementing proper error boundaries and adding comprehensive logging...",
    tags: ["Node.js", "Debugging", "APIs"],
    readTime: "5 min read"
  },
  {
    id: 3,
    date: "2024-01-13",
    content: "Implemented a new CSS Grid layout for our dashboard component. The flexibility is amazing compared to Flexbox for complex layouts. Also experimented with container queries which are now supported in all modern browsers...",
    tags: ["CSS", "UI/UX", "Frontend"],
    readTime: "4 min read"
  }
];

export function RecentEntries() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + "...";
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Recent Entries 📝
      </h2>
      
      <div className="grid gap-4">
        {mockEntries.map((entry) => (
          <Card 
            key={entry.id} 
            className="shadow-card border-border/50 bg-card hover:shadow-elegant transition-smooth cursor-pointer group"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(entry.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {entry.readTime}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-card-foreground leading-relaxed">
                {truncateContent(entry.content)}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="w-fit p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-smooth"
              >
                View More
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}