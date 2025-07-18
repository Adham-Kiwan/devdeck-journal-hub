import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagSelector } from "./TagSelector";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function JournalEditor() {
  const [content, setContent] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSave = () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please write something in your journal entry.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically save to a backend
    console.log("Saving entry:", { content, codeSnippet, tags: selectedTags });
    
    toast({
      title: "Entry saved! 🎉",
      description: "Your journal entry has been saved successfully.",
    });

    // Reset form
    setContent("");
    setCodeSnippet("");
    setSelectedTags([]);
  };

  return (
    <Card className="shadow-card border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-card-foreground">
          Create New Entry
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            What's on your mind? 💭
          </label>
          <Textarea
            placeholder="Share your thoughts, learnings, breakthroughs, or challenges from today..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[200px] resize-none border-input bg-background/50 focus:border-primary transition-smooth"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Code Snippet (Optional) 🧑‍💻
          </label>
          <Textarea
            placeholder="// Paste any relevant code here..."
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
            className="min-h-[120px] font-mono text-sm resize-none border-input bg-background/50 focus:border-primary transition-smooth"
          />
        </div>

        <TagSelector 
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
        />

        <Button 
          onClick={handleSave}
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant"
          size="lg"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Entry
        </Button>
      </CardContent>
    </Card>
  );
}