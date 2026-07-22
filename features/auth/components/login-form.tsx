"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { useAppDispatch } from "@/store/hooks";

import { tokenManager } from "@/lib/api";

import {
  setAccessToken,
  setAuthenticated,
  setLoading,
  setUser,
} from "@/store/slices/auth.slice";

import { useLoginMutation } from "../api/authApi";

import { loginSchema, LoginSchema } from "../schemas/login.schema";

import { AuthCard } from "./auth-card";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/lib/error";

export function LoginForm() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchema) {
    try {
      const response = await login(values).unwrap();

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
    <AuthCard title="Welcome Back" description="Login to continue">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      autoComplete="current-password"
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
            {isLoading ? "Signing In..." : "Login"}
          </Button>
        </form>
      </Form>

      <p className="text-muted-foreground text-center text-sm">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="text-primary font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthCard>
  );
}
