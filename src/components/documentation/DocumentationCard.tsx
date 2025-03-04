
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface DocumentationCardProps {
  onButtonClick?: () => void;
}

export function DocumentationCard({ onButtonClick }: DocumentationCardProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock search results based on query
  const searchResults = searchQuery ? 
    mockComponents.filter(comp => 
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
  
  return (
    <Card className={cn(
      "w-full max-w-4xl shadow-lg transition-colors duration-300",
      darkMode ? "bg-slate-900 text-slate-100" : "bg-white"
    )}>
      <CardHeader className={cn(
        "flex flex-row items-center justify-between rounded-t-lg",
        darkMode ? "bg-slate-800" : "bg-primary text-primary-foreground"
      )}>
        <div>
          <CardTitle className="text-2xl">Beautiful Documentation</CardTitle>
          <p className={cn("text-sm mt-1", darkMode ? "text-slate-400" : "text-primary-foreground/80")}>
            Interactive component library
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="dark-mode" className={darkMode ? "text-slate-400" : "text-primary-foreground/80"}>
            {darkMode ? "Dark" : "Light"}
          </Label>
          <Switch 
            id="dark-mode" 
            checked={darkMode} 
            onCheckedChange={setDarkMode} 
            className={darkMode ? "data-[state=checked]:bg-purple-600" : ""}
          />
        </div>
      </CardHeader>
      
      <CardContent className={cn(
        "pt-6 pb-4 px-6",
        darkMode ? "text-slate-300" : ""
      )}>
        <div className="mb-6">
          <Input 
            placeholder="Search components..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(
              "w-full",
              darkMode ? "bg-slate-800 text-slate-200 border-slate-700" : ""
            )}
          />
          
          {searchQuery && (
            <div className="mt-2">
              <p className={cn("text-sm mb-2", darkMode ? "text-slate-400" : "text-muted-foreground")}>
                {searchResults.length} results found
              </p>
              <ScrollArea className="h-24">
                <ul className="space-y-1">
                  {searchResults.map((result) => (
                    <li key={result.name} className={cn(
                      "p-2 rounded cursor-pointer hover:bg-slate-100",
                      darkMode ? "hover:bg-slate-800" : ""
                    )}>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{result.name}</span>
                        <Badge variant={darkMode ? "outline" : "secondary"} className="text-xs">
                          {result.category}
                        </Badge>
                      </div>
                      <p className={cn("text-xs mt-1", darkMode ? "text-slate-400" : "text-muted-foreground")}>
                        {result.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          )}
        </div>
        
        <Tabs defaultValue="components" className="w-full">
          <TabsList className={cn(
            "w-full mb-4",
            darkMode ? "bg-slate-800" : ""
          )}>
            <TabsTrigger value="components" className={darkMode ? "data-[state=active]:bg-slate-700" : ""}>Components</TabsTrigger>
            <TabsTrigger value="hooks" className={darkMode ? "data-[state=active]:bg-slate-700" : ""}>Hooks</TabsTrigger>
            <TabsTrigger value="examples" className={darkMode ? "data-[state=active]:bg-slate-700" : ""}>Examples</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components" className="space-y-4">
            <ScrollArea className="h-64">
              {mockComponents.map((component, index) => (
                <React.Fragment key={component.name}>
                  <div className="py-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{component.name}</h3>
                      <Badge variant={darkMode ? "outline" : "secondary"}>
                        {component.category}
                      </Badge>
                    </div>
                    <p className={cn("text-sm mt-1", darkMode ? "text-slate-400" : "text-muted-foreground")}>
                      {component.description}
                    </p>
                    
                    <div className={cn(
                      "mt-3 p-3 text-xs font-mono rounded",
                      darkMode ? "bg-slate-800" : "bg-slate-100"
                    )}>
                      {component.example}
                    </div>
                    
                    {component.props.length > 0 && (
                      <div className="mt-2">
                        <h4 className={cn("text-sm font-medium", darkMode ? "text-slate-300" : "")}>Props:</h4>
                        <ul className="mt-1 space-y-1">
                          {component.props.map(prop => (
                            <li key={prop.name} className="text-xs">
                              <span className={darkMode ? "text-purple-400" : "text-purple-600"}>{prop.name}</span>
                              <span className={darkMode ? "text-slate-400" : "text-slate-500"}>: {prop.type}</span>
                              {prop.default && (
                                <span className={darkMode ? "text-slate-500" : "text-slate-600"}> = {prop.default}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {index < mockComponents.length - 1 && (
                    <Separator className={darkMode ? "bg-slate-700" : ""} />
                  )}
                </React.Fragment>
              ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="hooks" className="space-y-4">
            <ScrollArea className="h-64">
              {mockHooks.map((hook, index) => (
                <React.Fragment key={hook.name}>
                  <div className="py-2">
                    <h3 className="text-lg font-semibold">{hook.name}</h3>
                    <p className={cn("text-sm mt-1", darkMode ? "text-slate-400" : "text-muted-foreground")}>
                      {hook.description}
                    </p>
                    
                    <div className={cn(
                      "mt-3 p-3 text-xs font-mono rounded",
                      darkMode ? "bg-slate-800" : "bg-slate-100"
                    )}>
                      {hook.example}
                    </div>
                    
                    {hook.parameters.length > 0 && (
                      <div className="mt-2">
                        <h4 className={cn("text-sm font-medium", darkMode ? "text-slate-300" : "")}>Parameters:</h4>
                        <ul className="mt-1 space-y-1">
                          {hook.parameters.map(param => (
                            <li key={param.name} className="text-xs">
                              <span className={darkMode ? "text-purple-400" : "text-purple-600"}>{param.name}</span>
                              <span className={darkMode ? "text-slate-400" : "text-slate-500"}>: {param.type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-2">
                      <h4 className={cn("text-sm font-medium", darkMode ? "text-slate-300" : "")}>Returns:</h4>
                      <p className={cn("text-xs", darkMode ? "text-slate-400" : "text-slate-600")}>
                        {hook.returns}
                      </p>
                    </div>
                  </div>
                  {index < mockHooks.length - 1 && (
                    <Separator className={darkMode ? "bg-slate-700" : ""} />
                  )}
                </React.Fragment>
              ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="examples" className="space-y-4">
            <div className={cn(
              "p-4 rounded border",
              darkMode ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"
            )}>
              <h3 className="text-lg font-semibold mb-2">Interactive Example</h3>
              <p className={cn("text-sm mb-4", darkMode ? "text-slate-400" : "text-muted-foreground")}>
                Try clicking the buttons below to see different states
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Button variant="default" size="sm">Default</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="destructive" size="sm">Destructive</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </div>
              
              <div className={cn(
                "mt-4 p-3 text-xs font-mono rounded",
                darkMode ? "bg-slate-900" : "bg-white border border-slate-200"
              )}>
                {`<Button variant="default">Default</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="destructive">Destructive</Button>`}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className={cn(
        "flex justify-between",
        darkMode ? "bg-slate-800" : "bg-slate-50"
      )}>
        <p className={cn("text-xs", darkMode ? "text-slate-400" : "text-muted-foreground")}>
          Documentation v1.0.0
        </p>
        {onButtonClick && (
          <Button 
            onClick={onButtonClick}
            variant={darkMode ? "outline" : "default"}
            size="sm"
          >
            View Full Docs
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

// Mock data for the documentation
const mockComponents = [
  {
    name: "Button",
    category: "UI",
    description: "A versatile button component with multiple variants and sizes.",
    example: '<Button variant="primary">Click me</Button>',
    props: [
      { name: "variant", type: "string", default: "'default'" },
      { name: "size", type: "string", default: "'md'" },
      { name: "isLoading", type: "boolean", default: "false" },
      { name: "disabled", type: "boolean", default: "false" },
    ]
  },
  {
    name: "Card",
    category: "Layout",
    description: "A container component for grouping related content.",
    example: '<Card>\n  <CardHeader>Title</CardHeader>\n  <CardContent>Content</CardContent>\n</Card>',
    props: [
      { name: "className", type: "string" },
      { name: "children", type: "ReactNode" },
    ]
  },
  {
    name: "Dialog",
    category: "Overlay",
    description: "A modal dialog that interrupts the user with important content.",
    example: '<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>Title</DialogHeader>\n  </DialogContent>\n</Dialog>',
    props: [
      { name: "open", type: "boolean" },
      { name: "onOpenChange", type: "function" },
    ]
  },
];

const mockHooks = [
  {
    name: "useToast",
    description: "A hook for displaying toast notifications.",
    example: 'const { toast } = useToast()\n\ntoast({\n  title: "Success",\n  description: "Operation completed"\n})',
    parameters: [],
    returns: "Object containing toast function and other utilities"
  },
  {
    name: "useMediaQuery",
    description: "A hook for responding to media query changes.",
    example: 'const isMobile = useMediaQuery("(max-width: 768px)")',
    parameters: [
      { name: "query", type: "string" }
    ],
    returns: "Boolean indicating if the media query matches"
  },
  {
    name: "useLocalStorage",
    description: "A hook for persisting state in localStorage.",
    example: 'const [value, setValue] = useLocalStorage("key", initialValue)',
    parameters: [
      { name: "key", type: "string" },
      { name: "initialValue", type: "any" }
    ],
    returns: "Array containing the stored value and a setter function"
  }
];
