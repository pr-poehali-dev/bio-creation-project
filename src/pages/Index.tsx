
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center max-w-md px-4">
        <h1 className="text-4xl font-bold mb-4 text-primary">Персональная информация</h1>
        <p className="text-xl text-muted-foreground mb-8">Гражданин РФ и мой правовой статус</p>
        <Button asChild className="gap-2 text-lg py-6 px-8 rounded-full bg-blue-600 hover:bg-blue-700">
          <Link to="/bio">
            <Shield className="mr-2 h-5 w-5" />
            Просмотреть информацию
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
