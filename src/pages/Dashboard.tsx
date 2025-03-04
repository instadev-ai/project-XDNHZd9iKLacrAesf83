
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DocumentationCard } from "@/components/documentation/DocumentationCard";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
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
      <h1 className="text-3xl font-bold mb-8 text-center">Documentation Dashboard</h1>
      
      <DocumentationCard onButtonClick={handleViewDocsClick} />
      
      <div className="mt-8">
        <Link to="/">
          <Button variant="outline" className="mr-4">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
