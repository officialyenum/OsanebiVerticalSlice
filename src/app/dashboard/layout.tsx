import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import DashboardNav from "@/components/DashboardNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-surface-alt">
      <DashboardNav name={user.name} role={user.role} />
      <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
    </div>
  );
}
