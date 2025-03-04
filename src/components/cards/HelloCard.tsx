
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HelloCardProps {
  name?: string;
  message?: string;
  onButtonClick?: () => void;
}

export function HelloCard({ 
  name = "World", 
  message = "Welcome to our application!", 
  onButtonClick 
}: HelloCardProps) {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl">Hello, {name}!</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-4 px-6">
        <p className="mb-6 text-muted-foreground">{message}</p>
        {onButtonClick && (
          <Button 
            onClick={onButtonClick}
            className="w-full"
          >
            Say Hello
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
