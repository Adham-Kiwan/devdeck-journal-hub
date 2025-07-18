import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

const availableTags = [
  "React", "JavaScript", "TypeScript", "APIs", "Debugging", 
  "CSS", "Node.js", "Python", "Git", "Testing", "Performance",
  "Database", "DevOps", "UI/UX", "Architecture"
];

interface TagSelectorProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export function TagSelector({ selectedTags, onTagsChange }: TagSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    onTagsChange(selectedTags.filter(t => t !== tag));
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">Tags</label>
      
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-1 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full justify-between text-left font-normal"
          >
            {selectedTags.length > 0 
              ? `${selectedTags.length} tag${selectedTags.length > 1 ? 's' : ''} selected`
              : "Select tags"
            }
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-3">
          <div className="grid grid-cols-2 gap-2">
            {availableTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "ghost"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="justify-start text-xs h-8"
              >
                {tag}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}