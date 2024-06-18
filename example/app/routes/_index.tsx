import type { MetaFunction } from "@remix-run/node";
import { Button } from "@/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Shadcn</h1>
      <Button>Click Me</Button>
      
    </div>
  );
}
