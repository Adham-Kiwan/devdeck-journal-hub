import { JournalEditor } from "@/components/journal/JournalEditor";

const NewEntry = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          New Journal Entry ✍️
        </h1>
        <p className="text-muted-foreground text-lg">
          Capture your thoughts, learnings, and code snippets
        </p>
      </div>

      {/* Editor */}
      <JournalEditor />
    </div>
  );
};

export default NewEntry;