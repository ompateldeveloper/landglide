import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AccountSettings() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Account Setting</h1>
            <Tabs defaultValue="general" className="w-full flex gap-2 ">
                <TabsList className="h-min flex-col p-2 mr-2 mt-2 bg-none"  >
                    <TabsTrigger className="w-full " value="general">General</TabsTrigger>
                    <TabsTrigger className="w-full " value="security">Security</TabsTrigger>
                    <TabsTrigger className="w-full " value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>General Information</CardTitle>
                            <CardDescription>Update your account details here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="john.doe@example.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="johndoe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="language">Language</Label>
                                <Select>
                                    <SelectTrigger id="language">
                                        <SelectValue placeholder="Select a language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="en">English</SelectItem>
                                        <SelectItem value="fr">French</SelectItem>
                                        <SelectItem value="de">German</SelectItem>
                                        <SelectItem value="es">Spanish</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="security" className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                            <CardDescription>Manage your account security and password here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <Input id="currentPassword" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="twoFactor" />
                                <Label htmlFor="twoFactor">Enable Two-Factor Authentication</Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Update Security Settings</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="notifications" className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Manage how you receive notifications.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Switch id="emailNotifications" />
                                <Label htmlFor="emailNotifications">Email Notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="pushNotifications" />
                                <Label htmlFor="pushNotifications">Push Notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="smsNotifications" />
                                <Label htmlFor="smsNotifications">SMS Notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="marketingEmails" />
                                <Label htmlFor="marketingEmails">Marketing Emails</Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Notification Preferences</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
