"use client";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRegisterMutation } from "../api/authApi";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { tokenManager } from "@/lib/api";
import {
  setAccessToken,
  setAuthenticated,
  setLoading,
  setUser,
} from "@/store/slices/auth.slice";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AuthCard } from "./auth-card";
import Link from "next/link";
import { getErrorMessage } from "@/lib/error";

export function RegisterForm() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterSchema) {
    try {
      const response = await register(values).unwrap();
      tokenManager.setAccessToken(response.data.accessToken);

      dispatch(setUser(response.data.user));
      dispatch(setAccessToken(response.data.accessToken));
      dispatch(setAuthenticated(true));
      dispatch(setLoading(false));

      toast.success(response.message);
      router.replace("/");
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  }

  return (
    <AuthCard title="Welcome to Showtime" description="Register to continue">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>

                <FormControl>
                  <Input {...field} autoComplete="name" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>

                <FormControl>
                  <Input {...field} autoComplete="username" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input {...field} autoComplete="email" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-4 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Register"}
          </Button>
        </form>
      </Form>

      <p className="text-muted-foreground text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-primary font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthCard>
  );
}
