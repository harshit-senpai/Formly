import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";

export const FormList = async () => {
  const user = await getCurrentUser();

  const forms = await db.form.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <>
      {forms.map((form) => (
        <Card
          key={form.id}
          className="bg-card border rounded-xl text-card-foreground  shadow "
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2">
              <div className="text-sm font-bold truncate">{form.title}</div>
              <Badge variant={form.idPublished ? "default" : "destructive"}>
                {form.idPublished ? "Published" : "Draft"}
              </Badge>
            </CardTitle>
            <p className="text-xs font-semibold text-muted-foreground">
              about 1 Hour ago
            </p>
          </CardHeader>
          <CardContent>
            <div className="text-sm h-[20px] truncate text-muted-foreground">
              {form.description || "No Description"}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full text-sm">Edit</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
