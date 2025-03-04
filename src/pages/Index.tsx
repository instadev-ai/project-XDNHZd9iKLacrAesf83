
import { useState } from "react";
import { HelloCard } from "@/components/cards/HelloCard";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <HelloCard 
        name={name}
        message="Welcome to your application! Click the button below to say hello."
        onButtonClick={handleHelloClick}
      />
    </div>
  );
};

export default Index;
