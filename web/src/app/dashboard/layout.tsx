import { redirect } from "next/navigation";
import DashboardNav from "@/components/DashboardNav";
import { getCurrentUserAction } from "@/lib/actions/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await getCurrentUserAction();
  if (!response.ok) redirect("/auth/login");

  return (
    <div className="min-h-screen bg-surface-alt md:flex">
      <DashboardNav name={response.data.name} role={response.data.role} />
      <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  );
}
