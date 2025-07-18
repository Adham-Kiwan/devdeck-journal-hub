import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react";

// Mock data for journal entries
const mockEntries = [
  {
    id: 1,
    date: "2024-01-15",
    title: "React Server Components Deep Dive",
    content: "Today I learned about React Server Components and how they can improve performance by reducing client-side JavaScript. The concept of streaming HTML from the server is fascinating and could be a game-changer for our applications. I spent time understanding the differences between server and client components, and how to properly implement them in Next.js 14. The mental model shift from traditional React is significant but worth it.",
    tags: ["React", "Performance", "Learning", "Next.js"],
    readTime: "3 min read"
  },
  {
    id: 2,
    date: "2024-01-14",
    title: "Debugging Async Issues",
    content: "Spent the morning debugging a tricky async issue in our Node.js API. The problem was with Promise.all() not handling rejections properly. Fixed it by implementing proper error boundaries and adding comprehensive logging. This reminded me of the importance of proper error handling in production systems. I also learned about using Promise.allSettled() as an alternative when you want to handle partial failures gracefully.",
    tags: ["Node.js", "Debugging", "APIs", "JavaScript"],
    readTime: "5 min read"
  },
  {
    id: 3,
    date: "2024-01-13",
    title: "CSS Grid Layout Mastery",
    content: "Implemented a new CSS Grid layout for our dashboard component. The flexibility is amazing compared to Flexbox for complex layouts. Also experimented with container queries which are now supported in all modern browsers. The responsive design possibilities are endless with these new CSS features. I created a reusable grid system that adapts to different screen sizes seamlessly.",
    tags: ["CSS", "UI/UX", "Frontend"],
    readTime: "4 min read"
  },
  {
    id: 4,
    date: "2024-01-12",
    title: "TypeScript Generic Patterns",
    content: "Deep dive into advanced TypeScript generic patterns today. Learned about conditional types, mapped types, and how to create utility types that make our codebase more type-safe. The challenge was creating a generic function that could infer types from complex object structures while maintaining compile-time safety.",
    tags: ["TypeScript", "Learning", "Architecture"],
    readTime: "6 min read"
  },
  {
    id: 5,
    date: "2024-01-11",
    title: "Database Query Optimization",
    content: "Optimized some slow database queries today. Found that adding proper indexes and restructuring the joins improved performance by 70%. Also learned about query execution plans and how to read them effectively. This experience reinforced the importance of understanding your data access patterns.",
    tags: ["Database", "Performance", "Backend"],
    readTime: "4 min read"
  }
];

const allTags = Array.from(new Set(mockEntries.flatMap(entry => entry.tags)));

const Journal = () => {
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);

  const filteredEntries = selectedTag === "all" 
    ? mockEntries 
    : mockEntries.filter(entry => entry.tags.includes(selectedTag));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + "...";
  };

  const toggleExpanded = (entryId: number) => {
    setExpandedEntry(expandedEntry === entryId ? null : entryId);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Journal Feed 📖
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse through your coding journey and insights
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tags</SelectItem>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>{tag}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedTag !== "all" && (
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {filteredEntries.length} entries
            </Badge>
          )}
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-6">
        {filteredEntries.map((entry) => {
          const isExpanded = expandedEntry === entry.id;
          
          return (
            <Card 
              key={entry.id} 
              className="shadow-card border-border/50 bg-card hover:shadow-elegant transition-smooth"
            >
              <CardHeader className="pb-4">
                <div className="space-y-3">
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
                  
                  <h2 className="text-xl font-semibold text-card-foreground">
                    {entry.title}
                  </h2>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-card-foreground leading-relaxed">
                  {isExpanded ? entry.content : truncateContent(entry.content)}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-smooth cursor-pointer"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => toggleExpanded(entry.id)}
                  className="w-fit p-0 h-auto text-primary hover:text-primary/80 transition-smooth"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                  <ArrowRight className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredEntries.length === 0 && (
        <Card className="shadow-card text-center py-12">
          <CardContent>
            <p className="text-muted-foreground text-lg">
              No entries found for the selected tag.
            </p>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedTag("all")}
              className="mt-2"
            >
              Show all entries
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Journal;