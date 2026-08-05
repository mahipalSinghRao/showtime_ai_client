import { ReactNode } from "react";
import { AdminLayout } from "@/features/admin/component/admin-layout";
import { AdminGuard } from "@/features/admin/component/admin-guard";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>;
      {/* <AdminGuard>
      </AdminGuard> */}
    </>
  );
  //
}
