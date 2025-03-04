
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { DocumentationCard } from "@/components/documentation/DocumentationCard";

const Index = () => {
  const { toast } = useToast();
  
  const handleViewDocsClick = () => {
    toast({
      title: "Documentation",
      description: "Full documentation site coming soon!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <DocumentationCard onButtonClick={handleViewDocsClick} />
      
      <div className="mt-8">
        <Link to="/dashboard">
          <Button className="bg-primary hover:bg-primary/90">
            View Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
