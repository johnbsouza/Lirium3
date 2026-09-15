import { Link } from "react-router";
import logo from "../imports/shared image.png";
import "./components.css";

export function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-12 flex flex-col items-center">
        <div className="w-32 h-32 flex items-center justify-center mb-4">
          <img src={logo} alt="Lirium Esmalteria Logo" className="w-full h-full object-contain drop-shadow-sm" />
        </div>
        <h1 className="text-4xl font-serif text-primary uppercase tracking-widest mt-2">Lirium</h1>
        <p className="text-muted-foreground uppercase tracking-widest text-xs mt-2">Esmalteria & Spa</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <input 
            type="email" 
            placeholder="E-mail" 
            className="input-field"
          />
        </div>
        <div className="space-y-2">
          <input 
            type="password" 
            placeholder="Senha" 
            className="input-field"
          />
        </div>
        
        <Link 
          to="/client" 
          className="btn-primary"
        >
          Entrar
        </Link>
        
        <div className="flex justify-between text-sm mt-4 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Esqueceu a senha?</a>
          <Link to="/register" className="hover:text-primary transition-colors">Cadastre-se</Link>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/pro" className="hover:text-primary">Acesso Profissional</Link>
          <span>|</span>
          <Link to="/admin" className="hover:text-primary">Acesso Admin</Link>
        </div>
      </div>
    </div>
  );
}
