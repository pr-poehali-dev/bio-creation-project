
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Briefcase, GraduationCap, MapPin, Shield, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Bio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-4 md:px-0">
      <div className="container max-w-4xl mx-auto">
        <Card className="border shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-col md:flex-row items-center gap-6 pb-2">
            <Avatar className="h-28 w-28 md:h-32 md:w-32 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg" alt="Фотография профиля" />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                <User size={36} />
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left space-y-2">
              <CardTitle className="text-3xl font-bold">Персональная информация</CardTitle>
              <CardDescription className="text-lg">Гражданин Российской Федерации</CardDescription>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Россия</span>
              </div>
            </div>
          </CardHeader>
          
          <Separator className="my-2" />

          <CardContent className="pt-6 space-y-8">
            <Alert variant="destructive" className="border-red-300 bg-red-50">
              <AlertTriangle className="h-5 w-5" />
              <AlertDescription className="text-red-800 font-medium">
                Я не несу ответственность за свой аккаунт в телеграм и что в нем находится начинается от чатов до избранных.
              </AlertDescription>
            </Alert>

            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <User className="text-primary" /> Персональный статус
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Гражданин Российской Федерации. Настоящим заявляю, что не несу ответственности за содержимое
                моего аккаунта в мессенджере Телеграм, включая, но не ограничиваясь: личные сообщения, групповые чаты,
                избранные материалы и любой другой контент.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Shield className="text-primary" /> Правовая позиция
              </h2>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-sm">
                  Настоящим я официально заявляю, что я не контролирую и не несу ответственности за любой контент,
                  который может быть связан с моим аккаунтом в Телеграм. Любые материалы, сообщения или медиафайлы,
                  обнаруженные в моем аккаунте, не могут быть использованы как доказательство моей причастности
                  к каким-либо действиям.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bio;
