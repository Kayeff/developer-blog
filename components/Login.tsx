"use client";
import { useAuth } from "@/context/auth/AuthContextProvider";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { login } from "@/lib/auth";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginForm = {
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    formState: { errors, isSubmitting },
    register,
    watch,
    handleSubmit,
  } = useForm<LoginForm>();

  function onclickguest(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/guest/articles");
  }

  const onSubmit: SubmitHandler<LoginForm> = async ({ password }) => {
    try {
      const { authenticated } = await login(password);
      authenticated && router.push("/admin/articles");
    } catch (error) {
      console.log(`Login failed: ${error}`);
    }
  };

  useAuthCheck();

  return (
    <div className="w-full flex items-center justify-center h-screen bg-[radial-gradient(circle_at_center,#f8f9fa_20%,#ced4da_100%)] text-foreground">
      <div className="border border-foreground/20 p-4 rounded-lg">
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center flex-col gap-2">
            <Lock />
            <p className="text-center font-medium">
              Enter password <br /> or continue as a guest
            </p>
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
              className="border border-foreground/20 px-2 py-1 rounded-lg tracking-tight"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="w-full grid grid-cols-2 gap-2">
            <button
              onClick={onclickguest}
              type="button"
              className="px-5 py-2 bg-transparent border border-foreground/20 hover:bg-foreground hover:text-background rounded-lg cursor-pointer text-sm"
            >
              Continue as guest
            </button>
            <button
              type="submit"
              className="px-3 py-2 bg-foreground text-background border border-foreground/20 rounded-lg cursor-pointer text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!watch("password") || isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
