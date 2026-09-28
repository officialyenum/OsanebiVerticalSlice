"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/lib/actions/auth";
import FormSubmissionButton from "@/components/ui/Button";


export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(formData: FormData) {
        setError("");

        const rawFormData = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        console.log(rawFormData);

        const result = await loginAction(rawFormData);

        console.log("handleSubmit");
        console.log(result);
        if (!result.ok) {
            setError(result.error);
            return;
        }
        router.push("/dashboard");
        router.refresh();
    }

    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-sm">
                <p className="font-mono text-xs text-accent">// sign in</p>
                <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Osanebi</h1>

                <form action={handleSubmit} className="mt-8 space-y-4">
                    <div>
                        <label htmlFor="email" className="label">email</label>
                        <input id="email" name="email" type="email" required className="input mt-1.5" />
                    </div>
                    <div>
                        <label htmlFor="password" className="label">password</label>
                        <input id="password" name="password" type="password" required className="input mt-1.5" />
                    </div>

                    <FormSubmissionButton
                        isSubmittingText="Signing in..."
                        isNotSubmittingText="Sign in" />

                    {error ? <p className="font-mono text-xs text-critical">{error}</p> : null}
                </form>

                <p className="mt-6 font-mono text-xs text-faint">
                    Seeded accounts (see README): studio@osanebi.dev / playtester@osanebi.dev — password: password123
                </p>
            </div>
        </main>
    );
}
