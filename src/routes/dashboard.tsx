import { Suspense } from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SignIn, SignOutButton } from "@clerk/tanstack-react-start";
// import { clerkClient } from "@clerk/tanstack-react-start/server";
import { Layout } from "@/layout/dashboard";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async ({ context }) => {
    if (!context.userId) {
      throw new Error("Not authenticated");
    }
    // const user = await clerkClient().users.getUser(context.userId);
    // const email = user.primaryEmailAddress?.emailAddress ?? null;

    // if (email !== "sarliram.me@gmail.com") {
    //   throw new Error("Unauthorized");
    // }
  },
  errorComponent: ({ error }) => {
    if (error.message === "Not authenticated") {
      return (
        <div className="flex items-center justify-center p-12">
          <SignIn routing="hash" forceRedirectUrl={"/dashboard"} />
        </div>
      );
    }
    if (error.message === "Unauthorized") {
      return (
        <div className="flex items-center justify-center p-12">
          <h2>You are not authorized to access this route.</h2>
          <SignOutButton />
        </div>
      );
    }
    throw error;
  },
  component: RootComponent,
});

function RootComponent() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}
