import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Bell, Shield, Database } from "lucide-react";

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Settings ⚙️
        </h1>
        <p className="text-muted-foreground text-lg">
          Customize your DevDeck experience
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Profile Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Change Avatar
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Daily Reminders</div>
                <div className="text-sm text-muted-foreground">
                  Get reminded to write in your journal
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Weekly Progress</div>
                <div className="text-sm text-muted-foreground">
                  Receive weekly progress summaries
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Streak Achievements</div>
                <div className="text-sm text-muted-foreground">
                  Celebrate your journaling streaks
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Private Journal</div>
                <div className="text-sm text-muted-foreground">
                  Keep your entries completely private
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Two-Factor Authentication</div>
                <div className="text-sm text-muted-foreground">
                  Add an extra layer of security
                </div>
              </div>
              <Switch />
            </div>
            
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                Export Data
              </Button>
              <Button variant="outline">
                Import Data
              </Button>
            </div>
            
            <div className="border-t pt-4">
              <div className="text-sm text-muted-foreground mb-2">
                Danger Zone
              </div>
              <Button variant="destructive" size="sm">
                Delete All Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant" size="lg">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;