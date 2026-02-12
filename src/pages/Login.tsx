import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        setError(error.message);
      } else {
        setMessage("Please check your email to confirm your account.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        navigate("/");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-8">
        <a
          href="/"
          className="text-foreground/50 tracking-[0.25em] uppercase text-[10px] font-medium hover:text-foreground/70 transition-colors duration-500"
        >
          Murphy Street Partners
        </a>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h1
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-normal tracking-[0.02em] text-foreground leading-[1.15] text-center mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {isSignUp ? "Create Account" : "Client Login"}
          </h1>

          <div className="mx-auto my-6 w-12 h-px bg-foreground/20" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-medium"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-foreground/15 text-foreground/80 text-sm placeholder:text-foreground/20 focus:border-foreground/40 transition-colors duration-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-medium"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-foreground/15 text-foreground/80 text-sm placeholder:text-foreground/20 focus:border-foreground/40 transition-colors duration-500"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-destructive text-[11px] tracking-wide">
                {error}
              </p>
            )}

            {message && (
              <p className="text-primary text-[11px] tracking-wide">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 border border-foreground/15 text-foreground/50 text-[10px] tracking-[0.3em] uppercase font-medium hover:border-foreground/40 hover:text-foreground/80 transition-all duration-500 disabled:opacity-30"
            >
              {loading
                ? "Please wait..."
                : isSignUp
                ? "Create Account"
                : "Sign In"}
            </button>
          </form>

          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError(null);
              setMessage(null);
            }}
            className="mt-8 w-full text-center text-[10px] tracking-[0.25em] uppercase text-foreground/25 hover:text-foreground/50 transition-colors duration-500"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Need an account? Create one"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
