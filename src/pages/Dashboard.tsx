
import { useState } from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  HelpCircle, 
  Bell, 
  LogOut,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingCart,
  Users2,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Sample data for charts
  const revenueData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 4500 },
    { name: "May", value: 6000 },
    { name: "Jun", value: 5500 },
    { name: "Jul", value: 7000 },
  ];

  const usersData = [
    { name: "Jan", value: 1000 },
    { name: "Feb", value: 1200 },
    { name: "Mar", value: 1500 },
    { name: "Apr", value: 1800 },
    { name: "May", value: 2200 },
    { name: "Jun", value: 2500 },
    { name: "Jul", value: 2800 },
  ];

  const salesData = [
    { name: "Jan", value: 2400 },
    { name: "Feb", value: 1398 },
    { name: "Mar", value: 9800 },
    { name: "Apr", value: 3908 },
    { name: "May", value: 4800 },
    { name: "Jun", value: 3800 },
    { name: "Jul", value: 4300 },
  ];

  const pieData = [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 300 },
    { name: "Product D", value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const chartConfig = {
    revenue: { color: "#4f46e5" },
    users: { color: "#10b981" },
    sales: { color: "#f59e0b" },
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-gray-50">
        <Sidebar>
          <SidebarHeader className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-1">
                <div className="h-6 w-6 rounded-md bg-white" />
              </div>
              <span className="text-lg font-bold">SaaSify</span>
            </div>
            <SidebarTrigger />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeMenu === "dashboard"} 
                  onClick={() => setActiveMenu("dashboard")}
                  tooltip="Dashboard"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeMenu === "users"} 
                  onClick={() => setActiveMenu("users")}
                  tooltip="Users"
                >
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeMenu === "settings"} 
                  onClick={() => setActiveMenu("settings")}
                  tooltip="Settings"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeMenu === "help"} 
                  onClick={() => setActiveMenu("help")}
                  tooltip="Help"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>Help</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarSeparator />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="overflow-auto">
          <div className="container mx-auto p-4 sm:p-6 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John Doe</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button>Upgrade Plan</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                      <p className="text-xl sm:text-2xl font-bold">$24,780</p>
                    </div>
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <DollarSign className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">12%</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">New Orders</p>
                      <p className="text-xl sm:text-2xl font-bold">1,245</p>
                    </div>
                    <div className="rounded-full bg-orange-500/10 p-2 text-orange-500">
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">8%</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                      <p className="text-xl sm:text-2xl font-bold">3,456</p>
                    </div>
                    <div className="rounded-full bg-green-500/10 p-2 text-green-500">
                      <Users2 className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">14%</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                      <p className="text-xl sm:text-2xl font-bold">2.4%</p>
                    </div>
                    <div className="rounded-full bg-blue-500/10 p-2 text-blue-500">
                      <Activity className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-red-500 font-medium">3%</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                <CardHeader className="p-4 sm:p-6 pb-0">
                  <CardTitle className="text-lg sm:text-xl">Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue for the current year</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="h-60 sm:h-80">
                    <ChartContainer config={chartConfig} className="h-full">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip 
                          content={<ChartTooltipContent />} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#4f46e5" 
                          fillOpacity={1} 
                          fill="url(#colorRevenue)" 
                          animationDuration={1500}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-600">
                <CardHeader className="p-4 sm:p-6 pb-0">
                  <CardTitle className="text-lg sm:text-xl">User Growth</CardTitle>
                  <CardDescription>Monthly active users</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="h-60 sm:h-80">
                    <ChartContainer config={chartConfig} className="h-full">
                      <LineChart data={usersData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip 
                          content={<ChartTooltipContent />} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#10b981" 
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                          animationDuration={1500}
                        />
                      </LineChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="lg:col-span-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
                <CardHeader className="p-4 sm:p-6 pb-0">
                  <CardTitle className="text-lg sm:text-xl">Sales Analytics</CardTitle>
                  <CardDescription>Monthly sales performance</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="h-60 sm:h-80">
                    <ChartContainer config={chartConfig} className="h-full">
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip 
                          content={<ChartTooltipContent />} 
                        />
                        <Bar 
                          dataKey="value" 
                          fill="#f59e0b" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1500}
                        />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-800">
                <CardHeader className="p-4 sm:p-6 pb-0">
                  <CardTitle className="text-lg sm:text-xl">Product Distribution</CardTitle>
                  <CardDescription>Sales by product category</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="h-60 sm:h-80">
                    <ChartContainer config={chartConfig} className="h-full">
                      <PieChart>
                        <ChartTooltip 
                          content={<ChartTooltipContent />} 
                        />
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          animationDuration={1500}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartLegend content={<ChartLegendContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
