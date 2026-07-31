import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Login() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic client-side validation
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    // Simulate authentication — redirect to AIFA dashboard on success
    setTimeout(() => {
      setLoading(false);
      setLocation('/aifa');
    }, 1600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-md mx-auto px-6 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-10"
        >
          <Link href="/" className="flex items-center gap-3 group">
            <img src={`${import.meta.env.BASE_URL}logo-icon.svg`} alt="LAIFA logo" className="w-10 h-10 shrink-0" width={40} height={40} />
            <span className="text-2xl font-bold tracking-widest text-foreground">LAIFA</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-sm p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 filter blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-8">
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-1">Secure Access</p>
              <h1 className="text-2xl font-bold text-foreground">Sign in to LAIFA</h1>
              <p className="text-sm text-muted-foreground mt-2">Enter your credentials to access the intelligence platform.</p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-sm text-sm text-red-400"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  required
                  disabled={loading}
                  placeholder="ahmed@firm.ma"
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Password</label>
                  <button type="button" className="text-xs font-mono text-primary hover:underline">Forgot password?</button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    required
                    disabled={loading}
                    placeholder="••••••••"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 pr-12 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !email || !password}
                className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-sm flex items-center justify-center gap-2 hover:bg-primary/90 shadow-[0_0_15px_rgba(0,200,255,0.3)] hover:shadow-[0_0_25px_rgba(0,200,255,0.5)] transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Authenticating...</>
                ) : (
                  <>Access Platform <ChevronRight className="w-4 h-4" /></>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                No account?{' '}
                <Link href="/" className="text-primary font-semibold hover:underline">
                  Request Access
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs font-mono text-muted-foreground mt-6"
        >
          <Link href="/" className="hover:text-primary transition-colors">Return to LAIFA Home</Link>
          {' '}&mdash;{' '}
          <span className="text-green-400">SECURE CONNECTION</span>
        </motion.p>
      </div>
    </div>
  );
}
