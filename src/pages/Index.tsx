
import { useState } from "react";
import { Link } from "react-router-dom";
import { HelloCard } from "@/components/cards/HelloCard";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { toast } = useToast();
  const [name, setName] = useState("Friend");
  
  const handleHelloClick = () => {
    toast({
      title: "Hello!",
      description: `Nice to meet you, ${name}!`,
      duration: 3000,
    });
    
    // Cycle through different names
    if (name === "Friend") setName("Developer");
    else if (name === "Developer") setName("Designer");
    else if (name === "Designer") setName("Team");
    else setName("Friend");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <HelloCard 
        name={name}
        message="Welcome to your application! Click the button below to say hello."
        onButtonClick={handleHelloClick}
      />
      
      <div className="mt-8 animate-bounce">
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
