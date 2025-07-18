import { JournalEditor } from "@/components/journal/JournalEditor";
import { RecentEntries } from "@/components/journal/RecentEntries";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Welcome back, John! 👋
        </h1>
        <p className="text-muted-foreground text-lg">
          Ready to capture today's coding journey?
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Journal Editor */}
        <div>
          <JournalEditor />
        </div>

        {/* Recent Entries */}
        <div>
          <RecentEntries />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;