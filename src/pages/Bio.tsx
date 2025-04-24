
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";

const Bio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-4 md:px-0">
      <div className="container max-w-4xl mx-auto">
        <Card className="border shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-col md:flex-row items-center gap-6 pb-2">
            <Avatar className="h-28 w-28 md:h-32 md:h-32 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg" alt="Фотография профиля" />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                <User size={36} />
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left space-y-2">
              <CardTitle className="text-3xl font-bold">Иванов Иван Иванович</CardTitle>
              <CardDescription className="text-lg">Разработчик ПО</CardDescription>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Москва, Россия</span>
              </div>
            </div>
          </CardHeader>
          
          <Separator className="my-2" />

          <CardContent className="pt-6 space-y-8">
            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <User className="text-primary" /> Обо мне
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Привет! Я опытный разработчик программного обеспечения с более чем 5-летним опытом создания 
                высокопроизводительных веб-приложений. Специализируюсь на фронтенд-разработке с использованием 
                современных JavaScript-фреймворков, особенно React. Люблю решать сложные проблемы и создавать 
                интуитивно понятные пользовательские интерфейсы.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Briefcase className="text-primary" /> Опыт работы
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-medium text-lg">Ведущий Frontend-разработчик</h3>
                  <div className="text-muted-foreground">ООО "ТехноПрогресс"</div>
                  <div className="text-sm text-muted-foreground mb-2">2020 - настоящее время</div>
                  <p className="text-sm">
                    Руководство командой разработчиков, архитектура frontend-проектов, 
                    внедрение новых технологий и методологий разработки.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-medium text-lg">Frontend-разработчик</h3>
                  <div className="text-muted-foreground">ООО "ДиджиСолюшнс"</div>
                  <div className="text-sm text-muted-foreground mb-2">2018 - 2020</div>
                  <p className="text-sm">
                    Разработка пользовательских интерфейсов для веб-приложений с использованием 
                    React, TypeScript и различных библиотек UI-компонентов.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <GraduationCap className="text-primary" /> Образование
              </h2>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="font-medium text-lg">Московский Технический Университет</h3>
                <div className="text-muted-foreground">Факультет информационных технологий</div>
                <div className="text-sm text-muted-foreground">2014 - 2018</div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bio;
